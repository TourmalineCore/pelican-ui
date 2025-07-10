import { AppRoute, Breakpoint } from "@/src/common/enum";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { HttpStatusCode, AxiosError } from "axios";
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "@/playwright-tests/custom-test";
import { E2E_DRAFT_UI_NAME_PREFIX } from "../helpers/cms-integration-helpers";
import { TEST_MOCK_DISCOUNTS } from "../cms-integration-mocks";

const DISCOUNTS_DRAFT_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Льготы`;
const DISCOUNTS_PAGE_API_ENDPOINT = `${getStrapiURL()}/discount-page`;

test.describe(`Discounts page CMS integration tests`, () => {
  test.afterEach(async () => {
    await cleanupTestDiscountsPage();
  });

  test.describe(`Main scenario integration tests`, () => {
    test.beforeEach(async () => {
      await updateTestDiscountsPage();
    });

    test(
      `
        GIVEN discounts page without content
        WHEN call method PUT /api/discount-page
        AND go to discounts page
        SHOULD display discounts page content correctly
        `,
      checkDiscountsPageOnUiTest,
    );
  });

  test.describe(`Draft preview tests`, () => {
    test.beforeEach(async () => {
      await updateTestDiscountsPage({
        isDraft: true,
      });
    });

    test(
      `
        GIVEN discounts page without content
        WHEN call method PUT /api/discount-page
        AND go to discounts page
        SHOULD display discounts page content correctly
        `,
      checkDiscountsPageDraftPreviewOnUiTest,
    );
  });
});

async function checkDiscountsPageOnUiTest({
  page,
  goto,
  setViewportSize,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await goto(AppRoute.DISCOUNTS);

  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await checkDiscountsPageContent({
    page,
    title: TEST_MOCK_DISCOUNTS.title,
    subtitle: TEST_MOCK_DISCOUNTS.subtitle,
    rulesCards: TEST_MOCK_DISCOUNTS.rulesCards,
  });
}
async function checkDiscountsPageDraftPreviewOnUiTest({
  page,
  gotoWithDraftPreviewMode,
  setViewportSize,
}: {
  page: Page;
  gotoWithDraftPreviewMode: CustomTestFixtures['gotoWithDraftPreviewMode'];
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await gotoWithDraftPreviewMode({
    slug: AppRoute.DISCOUNTS.slice(1),
  });

  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await checkDiscountsPageContent({
    page,
    title: DISCOUNTS_DRAFT_TITLE,
    subtitle: TEST_MOCK_DISCOUNTS.subtitle,
    rulesCards: TEST_MOCK_DISCOUNTS.rulesCards,
  });
}

async function checkDiscountsPageContent({
  page,
  title,
  subtitle,
  rulesCards,
}: {
  page: Page;
  title: string;
  subtitle: string;
  rulesCards: {
    text:string;
  }[];
}) {
  await expect(page.getByText(title), `Discounts page title should be visible`)
    .toBeVisible();

  await expect(page.getByText(subtitle), `Discounts page subtitle should be visible`)
    .toBeVisible();

  await expect(page.getByText(rulesCards[0].text), `Discounts page rulesCards text should be visible`)
    .toBeVisible();
}

async function updateTestDiscountsPage({
  isDraft = false,
}: {
  isDraft?: boolean;
} = {}) {
  try {
    const response = await axios.put(`${DISCOUNTS_PAGE_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        blocks: [
          {
            ...TEST_MOCK_DISCOUNTS,
            ...(isDraft ? {
              title: DISCOUNTS_DRAFT_TITLE,
            } : {}),
          },
        ],
      },
    });

    await expect(response.status, `Discounts page should be updated with status 200`)
      .toEqual(HttpStatusCode.Ok);
  } catch (error) {
    throw new Error(`Failed to update test discounts page: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestDiscountsPage() {
  try {
    const response = await axios.delete(`${DISCOUNTS_PAGE_API_ENDPOINT}`);

    await expect(response.status, `Discounts page should be deleted with status 204`)
      .toEqual(HttpStatusCode.NoContent);
  } catch (error) {
    throw new Error(`Failed to delete test discounts page: ${(error as AxiosError).message}`);
  }
}
