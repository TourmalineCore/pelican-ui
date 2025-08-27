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

  test.afterEach(async () => {
    await cleanupNewsArticlePageByTitle({
      title: NEWS_ARTICLE_PAGE_TITLE,
    });
  });

  test(`Addition of a news article page`, async ({
    goto,
    page,
  }: {
    page: Page;
    goto: CustomTestFixtures['goto'];
  }) => {
    await page.goto(process.env.STRAPI_URL || `http://localhost:1337`);

    await page.locator(`input[name=email]`)
      .fill(`admin@init-strapi-admin.strapi.io`);

    await page.locator(`input[name=password]`)
      .fill(`admin`);

    await page.getByText(`Login`)
      .click();

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

    await page.waitForTimeout(1000);

    // adding sitemap

    await page.getByText(`Settings`)
      .click();

    await page.getByText(`Configuration`)
      .last()
      .click();

    await page.waitForTimeout(1000);

    const rows = await page.locator(`table[role=grid] > tbody > tr`)
      .count();
    const isSitemapConfigExist = rows > 0;

    if (!isSitemapConfigExist) {
      await page.locator(`input`)
        .first()
        .fill(`http://localhost:3000/`);

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
        .fill(`news/[slug]`);

      await page.locator(`div[name=priority]`)
        .click();

      await page.getByText(`0.1`)
        .last()
        .click();

      await page.locator(`div[name=frequency]`)
        .click();

      await page.getByText(`Daily`, {
        exact: true,
      })
        .click();

      await page.getByText(`Confirm`)
        .click();

      await page.getByText(`Save`)

        .click();
    }

    await page.waitForTimeout(1500);

    await goto(`/news`);

    await page.getByText(NEWS_ARTICLE_PAGE_TITLE)
      .click();

    await page.getByText(`Тестовая новость`)
      .isVisible();

    await page.waitForTimeout(1000);

    // Check SEO
    const metaTitle = await page.$eval(
      `head title`,
      (el) => el.innerHTML,
    );

    expect(metaTitle)
      .toBe(SEO_META_TITLE);

    const metaDescription = await page.$eval(
      `head meta[name="description"]`,
      (el) => el.getAttribute(`content`),
    );

    expect(metaDescription)
      .toBe(SEO_META_DESCRIPTION);

    // Check sitemap
    await goto(`/api/get-sitemap`);

    await expect(page.locator(`html`))
      .toContainText(`e2e-ui-testovaya-novost`);
  });
});

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
