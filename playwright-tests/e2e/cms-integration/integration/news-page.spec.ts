import { gotoPage } from "@/playwright-tests/global-helpers";
import { AppRoute } from "@/src/common/enum";
import test, { expect, Page } from "@playwright/test";
import { NewsCollection } from "@/src/common/api-types";
import axios, { HttpStatusCode, AxiosError } from "axios";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import {
  E2E_DRAFT_UI_NAME_PREFIX,
  E2E_UI_NAME_PREFIX,
  getFileIdByName,
  gotoWithDraftPreviewMode,
} from "../helpers/cms-integration-helpers";

const NEWS_PAGE_TITLE = `${E2E_UI_NAME_PREFIX} Новости`;
const NEWS_TITLE = `${E2E_UI_NAME_PREFIX} В зоопарке появился амурский тигр`;
const NEWS_DESCRIPTION = `${E2E_UI_NAME_PREFIX} На фотографии изображен амурский тигр!`;
const NEWS_INNER_CONTENT = `${E2E_UI_NAME_PREFIX} В зоопарке появился амурский тигр, приходите посмотреть!`;

const NEWS_PAGE_DRAFT_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Новости`;
const NEWS_DRAFT_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX}  В зоопарке появился амурский тигр`;
const NEWS_DRAFT_DESCRIPTION = `${E2E_DRAFT_UI_NAME_PREFIX} На фотографии изображен амурский тигр!`;
const NEWS_DRAFT_INNER_CONTENT = `${E2E_DRAFT_UI_NAME_PREFIX} В зоопарке появился амурский тигр, приходите посмотреть!`;

const NEWS_API_ENDPOINT = `${getStrapiURL()}/news`;
const NEWS_PAGE_API_ENDPOINT = `${getStrapiURL()}/news-page`;

test.describe(`News page CMS integration tests`, () => {
  test.afterEach(async () => {
    await cleanupTestNewsPage();
  });

  test.describe(`Main scenario integration tests`, () => {
    test.beforeEach(async () => {
      await cleanupTestNewsByTitle({
        title: NEWS_TITLE,
      });

      await createTestNews({
        title: NEWS_TITLE,
        description: NEWS_DESCRIPTION,
        innerContent: NEWS_INNER_CONTENT,
      });

      await updateTestNewsPage({
        title: NEWS_PAGE_TITLE,
      });
    });

    test.afterEach(async () => {
      await cleanupTestNewsByTitle({
        title: NEWS_TITLE,
      });
    });

    test(
      `
        GIVEN news page without content
        WHEN call method PUT /api/news-page
        AND call method POST /api/news
        AND go to news page
        SHOULD display news page content correctly
        AND display news correctly
        `,
      checkNewsPageOnUiTest,
    );
  });

  test.describe(`Draft preview tests`, () => {
    test.beforeEach(async () => {
      await cleanupTestNewsByTitle({
        title: NEWS_TITLE,
      });

      await createTestNews({
        title: NEWS_DRAFT_TITLE,
        description: NEWS_DRAFT_DESCRIPTION,
        innerContent: NEWS_DRAFT_INNER_CONTENT,
        isDraft: true,
      });

      await updateTestNewsPage({
        title: NEWS_PAGE_DRAFT_TITLE,
        isDraft: true,
      });
    });

    test.afterEach(async () => {
      await cleanupTestNewsByTitle({
        title: NEWS_DRAFT_TITLE,
      });
    });

    test(
      `
        GIVEN news page without content
        WHEN call method PUT /api/news-page?status=draft
        AND call method POST /api/news?status=draft
        AND go to news page
        SHOULD display news page content correctly
        AND display news correctly in draft preview
        `,
      checkNewsPageDraftPreviewOnUiTest,
    );
  });
});

async function checkNewsPageDraftPreviewOnUiTest({
  page,
}: {
  page: Page;
}) {
  await gotoWithDraftPreviewMode({
    page,
    slug: AppRoute.NEWS.slice(1),
  });

  await checkNewsPageContent({
    page,
    newsPageTitle: NEWS_PAGE_DRAFT_TITLE,
    newsTitle: NEWS_DRAFT_TITLE,
    newsDescription: NEWS_DRAFT_DESCRIPTION,
    newsInnerContent: NEWS_DRAFT_INNER_CONTENT,
  });
}

async function checkNewsPageOnUiTest({
  page,
}: {
  page: Page;
}) {
  await gotoPage({
    page,
    url: AppRoute.NEWS,
  });

  await checkNewsPageContent({
    page,
    newsPageTitle: NEWS_PAGE_TITLE,
    newsTitle: NEWS_TITLE,
    newsDescription: NEWS_DESCRIPTION,
    newsInnerContent: NEWS_INNER_CONTENT,
  });
}

async function checkNewsPageContent({
  page,
  newsPageTitle,
  newsTitle,
  newsDescription,
  newsInnerContent,
}: {
  page: Page;
  newsPageTitle: string;
  newsTitle: string;
  newsDescription: string;
  newsInnerContent: string;
}) {
  await expect(page.getByText(newsPageTitle), `News page title should be visible`)
    .toBeVisible();

  await expect(page.getByText(newsTitle), `News title should be visible`)
    .toBeVisible();

  await expect(page.getByText(newsDescription), `News description should be visible`)
    .toBeVisible();

  await page.getByText(newsTitle)
    .click();

  await page.waitForURL(`${AppRoute.NEWS}/**`);

  await expect(page.getByText(newsInnerContent), `News content should be visible`)
    .toBeVisible();
}

async function updateTestNewsPage({
  title,
  isDraft = false,
}: {
  title: string;
  isDraft?: boolean;
}) {
  try {
    const response = await axios.put(`${NEWS_PAGE_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        title,
      },
    });

    await expect(response.status, `News page should be updated with status 200`)
      .toEqual(HttpStatusCode.Ok);
  } catch (error) {
    throw new Error(`Failed to update test news page: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestNewsPage() {
  try {
    const response = await axios.delete(`${NEWS_PAGE_API_ENDPOINT}`);

    await expect(response.status, `News page should be deleted with status 204`)
      .toEqual(HttpStatusCode.NoContent);
  } catch (error) {
    throw new Error(`Failed to delete test news page: ${(error as AxiosError).message}`);
  }
}

async function createTestNews({
  title,
  description,
  innerContent,
  isDraft = false,
}: {
  title: string;
  description: string;
  innerContent: string;
  isDraft?: boolean;
}) {
  try {
    const response = await axios.post(`${NEWS_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        title,
        description,
        image: await getFileIdByName(),
        innerContent,
      },
    });

    await expect(response.status, `News should be created with status 201`)
      .toEqual(HttpStatusCode.Created);
  } catch (error) {
    throw new Error(`Failed to create test news: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestNewsByTitle({
  title,
}: {
  title: string;
}) {
  try {
    const newsResponse = (await axios.get(`${NEWS_API_ENDPOINT}?populate=*&status=draft`)).data;

    const testNews = newsResponse.data.find((item: NewsCollection) => item.title === title);

    if (testNews) {
      const response = await axios.delete(`${NEWS_API_ENDPOINT}/${testNews.documentId}`);

      await expect(response.status, `News should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    }
  } catch (error) {
    throw new Error(`Failed to delete test news: ${(error as AxiosError).message}`);
  }
}
