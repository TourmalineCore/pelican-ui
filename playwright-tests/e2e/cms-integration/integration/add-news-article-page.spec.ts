import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "@/playwright-tests/custom-test";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { E2E_UI_NAME_PREFIX } from "../helpers/cms-integration-helpers";

const NEWS_LIST_PAGE_API_ENDPOINT = `${getStrapiURL()}/news`;
const NEWS_ARTICLE_PAGE_TITLE = `${E2E_UI_NAME_PREFIX} Тестовая новость`;
const SEO_META_TITLE = `Новости`;
const SEO_META_DESCRIPTION = `Описание тестовой новости`;

test.describe(`Addition of a news article page`, () => {
  test.beforeEach(async () => {
    await cleanupNewsArticlePageByTitle({
      title: NEWS_ARTICLE_PAGE_TITLE,
    });
  });

  test.afterEach(async ({
    page,
  }) => {
    await cleanupNewsArticlePageByTitle({
      title: NEWS_ARTICLE_PAGE_TITLE,
    });

    await cleanupSitemapConfiguration({
      page,
    });
  });

  test(`Addition of a news article page`, async ({
    goto,
    page,
  }: {
    page: Page;
    goto: CustomTestFixtures['goto'];
  }) => {
    await page.goto(process.env.CMS_URL as string);

    // This is necessary to hide the guide tour banner, which blocks all clicks in the test.
    await page.evaluate(() => {
      localStorage.setItem(`STRAPI_GUIDED_TOUR`, JSON.stringify({
        completedActions: [],
        tours: {
          contentManager: {
            currentStep: 0,
            isCompleted: true,
          },
        },
      }));
    });

    await authorizationInStrapi({
      page,
    });

    await createAndPublishNews({
      page,
    });

    await addSitemapConfiguration({
      page,
    });

    // Check news content on UI
    await goto(`/news`);

    await page.getByText(NEWS_ARTICLE_PAGE_TITLE)
      .click();

    await page.getByText(`Тестовая новость`)
      .isVisible();

    await checkSeo({
      page,
    });

    await checkSitemap({
      page,
      goto,
    });
  });
});

async function authorizationInStrapi({
  page,
}: {
  page: Page;
}) {
  await page.locator(`input[name=email]`)
    .fill(process.env.CMS_EMAIL as string);

  await page.locator(`input[name=password]`)
    .fill(process.env.CMS_PASSWORD as string);

  await page.getByText(`Login`)
    .click();
}

async function createAndPublishNews({
  page,
}: {
  page: Page;
}) {
  await page.getByText(`Content Manager`)
    .click();

  await page.getByRole(`link`, {
    name: `Новости`,
  })
    .click();

  await page.getByText(`Create new entry`)
    .first()
    .click();

  await page.locator(`input[name=title]`)
    .fill(NEWS_ARTICLE_PAGE_TITLE);

  await page.locator(`div[role=textbox]`)
    .fill(`Тестовое описание`);

  await page.getByText(`No entry yet. Click to add one.`)
    .first()
    .click();

  await page.locator(`input[name='seo.metaTitle']`)
    .fill(SEO_META_TITLE);

  await page.locator(`textarea[name='seo.metaDescription']`)
    .fill(SEO_META_DESCRIPTION);

  await page.getByRole(`button`, {
    name: `Publish`,
  })
    .click();

  // Wait for the CMS to save the entry to the db
  await page.waitForTimeout(1000);
}

async function addSitemapConfiguration({
  page,
}: {
  page: Page;
}) {
  await page.getByText(`Settings`)
    .click();

  await page.getByText(`Configuration`)
    .last()
    .click();

  await page.locator(`input[name=baseURL]`)
    .fill(process.env.FRONTEND_URL as string);

  await page.getByText(`Add another field to this collection type`)
    .click();

  await page.waitForTimeout(1000);

  await page.locator(`div[name=type]`)
    .click();

  await page.getByText(`Новости`)
    .click();

  await page.locator(`div[name=langcode]`)
    .click();

  await page.getByText(`Default Language`)
    .last()
    .click();

  await page.locator(`input[name=pattern]`)
    .fill(`/news-test/[slug]`);

  await page.locator(`div[name=priority]`)
    .click();

  await page.getByText(`0.1`)
    .last()
    .click();

  await page.locator(`div[name=frequency]`)
    .click();

  await page.getByText(`Daily`)
    .last()
    .click();

  await page.getByText(`Confirm`)
    .click();

  await page.getByText(`Save`)
    .click();
}

async function checkSeo({
  page,
}: {
  page: Page;
}) {
  await expect(page)
    .toHaveTitle(SEO_META_TITLE);

  await expect(page.locator(`meta[name="description"]`))
    .toHaveAttribute(`content`, SEO_META_DESCRIPTION);
}

async function checkSitemap({
  page,
  goto,
}:{
  page: Page;
  goto: CustomTestFixtures['goto'];
}) {
  await goto(`/api/get-sitemap`);

  await expect(page.locator(`html`))
    .toContainText(`e2e-ui-testovaya-novost`);
}

async function cleanupSitemapConfiguration({
  page,
}: {
  page: Page;
}) {
  await page.goto(`${process.env.CMS_URL}/admin/settings/strapi-5-sitemap-plugin`, {
    waitUntil: `networkidle`,
  });

  const testRecord = await page.locator(`tr:has(td span:has-text("news-test/"))`)
    .first();

  await testRecord.getByRole(`button`, {
    name: `Delete`,
  })
    .click();

  await page.getByText(`Delete`)
    .last()
    .click();
}

async function cleanupNewsArticlePageByTitle({
  title,
}: {
  title: string;
}) {
  try {
    const newsListPageResponse = (await axios.get(`${NEWS_LIST_PAGE_API_ENDPOINT}?populate=*`)).data;

    const testNewsArticlePage = newsListPageResponse.data.find((item: any) => item.title === title);

    if (testNewsArticlePage) {
      const response = await axios.delete(`${NEWS_LIST_PAGE_API_ENDPOINT}/${testNewsArticlePage.documentId}`);

      await expect(response.status, `News article page should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    }
  } catch (error) {
    throw new Error(`Failed to delete test news article page: ${(error as AxiosError).message}`);
  }
}
