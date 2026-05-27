import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "@/playwright-tests/custom-test";
import { OtherPage } from "@/src/common/api-types";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { E2E_UI_NAME_PREFIX } from "../helpers/cms-integration-helpers";

const OTHER_PAGE_API_ENDPOINT = `${getStrapiURL()}/other-pages`;
const OTHER_PAGE_TITLE = `${E2E_UI_NAME_PREFIX} Услуги`;
const SEO_META_TITLE = `Тестовая страница`;
const SEO_META_DESCRIPTION = `Тестовое описание`;
const SEO_KEYWORDS = `Тестовые ключевые слова`;

test.describe(`Dynamic addition of new pages`, () => {
  test.beforeEach(async () => {
    await cleanupOtherPageByTitle({
      title: OTHER_PAGE_TITLE,
    });
  });

  test.afterEach(async () => {
    await cleanupOtherPageByTitle({
      title: OTHER_PAGE_TITLE,
    });
  });

  test(`Dynamic addition of new pages`, async ({
    page,
    goto,
    authorizeInCms,
  }: {
    page: Page;
    authorizeInCms: CustomTestFixtures['authorizeInCms'];
    goto: CustomTestFixtures['goto'];
  }) => {
    await page.goto(process.env.CMS_URL as string);

    await test.step(`Authorize in CMS`, authorizeInCms);

    await test.step(`Setup CMS content`, setupCmsContent);

    // Todo: After the sitemap is added
    // in the "add-news-article-page.spec" test, the sitemap changes in this test are displayed with a long delay.
    // Think about how it can be fixed
    // await test.step(`Add sitemap configuration`, addSitemapConfiguration);

    await test.step(`Check created page on UI`, checkCreatedPageOnUi);

    async function setupCmsContent() {
      await page.getByText(`Content Manager`)
        .click();

      await page.getByRole(`button`, {
        name: `Skip`,
      })
        .click();

      await page.getByRole(`link`, {
        name: `Другие страницы`,
      })
        .click();

      await page.getByText(`Create new entry`)
        .first()
        .click();

      await page.locator(`input[name=title]`)
        .fill(OTHER_PAGE_TITLE);

      await page.getByRole(`button`, {
        name: `Add a component to blocks`,
      })
        .click();

      await page.getByRole(`button`, {
        name: `Блок с билетами`,
        exact: true,
      })
        .click();

      await page.locator(`input[name='blocks.0.title']`)
        .fill(`Тест`);

      await page.locator(`textarea[name='blocks.0.description']`)
        .fill(`Тестовое описание`);

      await page.getByText(`No entry yet. Click to add one.`)
        .first()
        .click();

      await page.locator(`textarea[name='blocks.0.subsidizedTickets.0.category']`)
        .fill(`Тестовый билет`);

      await page.locator(`input[name='blocks.0.subsidizedTickets.0.price']`)
        .fill(`100`);

      await page.locator(`input[name='seo.metaTitle']`)
        .fill(SEO_META_TITLE);

      await page.locator(`textarea[name='seo.metaDescription']`)
        .fill(SEO_META_DESCRIPTION);

      await page.locator(`textarea[name='seo.keywords']`)
        .fill(SEO_KEYWORDS);

      await page.getByRole(`button`, {
        name: `Publish`,
      })
        .click();

      // Wait until navigation record is saved in db
      await page.waitForTimeout(1000);
    }

    // async function addSitemapConfiguration() {
    //   await page.getByText(`Settings`)
    //     .click();

    //   await page.getByText(`Configuration`)
    //     .last()
    //     .click();

    //   await page.locator(`input[name=baseURL]`)
    //     .fill(process.env.FRONTEND_URL as string);

    //   await page.getByText(`Add another field to this collection type`)
    //     .click();

    //   await page.waitForTimeout(1000);

    //   await page.locator(`div[name=type]`)
    //     .click();

    //   await page.getByText(`Другие страницы`)
    //     .click();

    //   await page.locator(`div[name=langcode]`)
    //     .click();

    //   await page.getByText(`Default Language`)
    //     .last()
    //     .click();

    //   await page.locator(`input[name=pattern]`)
    //     .fill(`/other-pages-test/[slug]`);

    //   await page.locator(`div[name=priority]`)
    //     .click();

    //   await page.getByText(`0.1`)
    //     .last()
    //     .click();

    //   await page.locator(`div[name=frequency]`)
    //     .click();

    //   await page.getByText(`Daily`)
    //     .last()
    //     .click();

    //   await page.getByText(`Confirm`)
    //     .click();

    //   await page.getByText(`Save`)
    //     .click();
    // }

    async function checkCreatedPageOnUi() {
      await goto(`/other`);

      await page.getByText(OTHER_PAGE_TITLE)
        .click();

      await page.getByText(`Тестовый билет`)
        .isVisible();

      await page.waitForTimeout(1000);

      // Check seo
      await expect(page)
        .toHaveTitle(SEO_META_TITLE);

      await expect(page.locator(`meta[name="description"]`))
        .toHaveAttribute(`content`, SEO_META_DESCRIPTION);

      await expect(page.locator(`meta[name="keywords"]`))
        .toHaveAttribute(`content`, SEO_KEYWORDS);

      // // Check sitemap
      // await goto(`/api/get-sitemap`);

      // await expect(page.locator(`html`))
      //   .toContainText(`/other-pages-test/e2e-ui-uslugi`);
    }
  });
});

async function cleanupOtherPageByTitle({
  title,
}: {
  title: string;
}) {
  try {
    const otherPageResponse = (await axios.get(`${OTHER_PAGE_API_ENDPOINT}?populate=*`)).data;

    const testOtherPage = otherPageResponse.data.find((item: OtherPage) => item.title === title);

    if (testOtherPage) {
      const response = await axios.delete(`${OTHER_PAGE_API_ENDPOINT}/${testOtherPage.documentId}`);

      await expect(response.status, `Other page should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    }
  } catch (error) {
    throw new Error(`Failed to delete test other page: ${(error as AxiosError).message}`);
  }
}
