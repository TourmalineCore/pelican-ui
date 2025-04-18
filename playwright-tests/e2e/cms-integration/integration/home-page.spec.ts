import { gotoPage, setViewportSize } from "@/playwright-tests/global-helpers";
import { AppRoute, Breakpoint } from "@/src/common/enum";
import test, { expect, Page } from "@playwright/test";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { HttpStatusCode, AxiosError } from "axios";
import { TEST_MOCK_HERO } from "../cms-integration-mocks";
import { E2E_DRAFT_UI_NAME_PREFIX, getFileIdByName, gotoWithDraftPreviewMode } from "../helpers/cms-integration-helpers";

const HOME_PAGE_DRAFT_HERO_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Челябинский зоопарк`;
const HOME_PAGE_API_ENDPOINT = `${getStrapiURL()}/home`;

test.describe(`Home page CMS integration tests`, () => {
  test.afterEach(async () => {
    await cleanupTestHomePage();
  });

  test.describe(`Main scenario tests`, () => {
    test.beforeEach(async () => {
      await updateTestHomePage();
    });

    test(
      `
      GIVEN home page without content
      WHEN call method PUT /api/home
      AND go to home page
      SHOULD display home page content correctly
      `,
      checkHomePageOnUiTest,
    );
  });

  test.describe(`Draft preview tests`, () => {
    test.beforeEach(async () => {
      await updateTestHomePage({
        isDraft: true,
      });
    });

    test(
      `
        GIVEN home page without content
        WHEN call method PUT /api/home?status=draft
        AND go to home page
        SHOULD display home page content correctly in draft preview
        `,
      checkHomePageDraftPreviewOnUiTest,
    );
  });
});

async function checkHomePageOnUiTest({
  page,
}: {
  page: Page;
}) {
  await gotoPage({
    page,
    url: AppRoute.HOME,
  });

  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await checkHomePageContent({
    page,
    homeHeroTitle: TEST_MOCK_HERO.title,
  });
}

async function checkHomePageDraftPreviewOnUiTest({
  page,
}: {
  page: Page;
}) {
  await gotoWithDraftPreviewMode({
    page,
    slug: AppRoute.HOME.slice(1),
  });

  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await checkHomePageContent({
    page,
    homeHeroTitle: HOME_PAGE_DRAFT_HERO_TITLE,
  });
}

async function checkHomePageContent({
  page,
  homeHeroTitle,
}: {
  page: Page;
  homeHeroTitle: string;
}) {
  await expect(page.getByText(homeHeroTitle), `Home page hero title should be visible`)
    .toBeVisible();

  await expect(page.getByText(TEST_MOCK_HERO.infoCard.title), `Home page hero info card title should be visible`)
    .toBeVisible();

  await expect(page.getByText(TEST_MOCK_HERO.scheduleCard.title), `Home page hero schedule card title should be visible`)
    .toBeVisible();
}

export async function updateTestHomePage({
  isDraft = false,
}: {
  isDraft?: boolean;
} = {}) {
  try {
    const response = await axios.put(`${HOME_PAGE_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        blocks: [
          {
            ...TEST_MOCK_HERO,
            ...(isDraft ? {
              title: HOME_PAGE_DRAFT_HERO_TITLE,
            } : {}),
            image: await getFileIdByName(),
          },
        ],
      },
    });

    await expect(response.status, `Home page should be updated with status 200`)
      .toEqual(HttpStatusCode.Ok);
  } catch (error) {
    throw new Error(`Failed to update test home page: ${(error as AxiosError).message}`);
  }
}

export async function cleanupTestHomePage() {
  try {
    const response = await axios.delete(`${HOME_PAGE_API_ENDPOINT}`);

    await expect(response.status, `Home page should be deleted with status 204`)
      .toEqual(HttpStatusCode.NoContent);
  } catch (error) {
    throw new Error(`Failed to delete test home page: ${(error as AxiosError).message}`);
  }
}
