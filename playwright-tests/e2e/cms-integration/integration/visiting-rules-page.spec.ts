import { AppRoute, Breakpoint } from "@/src/common/enum";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { HttpStatusCode, AxiosError } from "axios";
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "@/playwright-tests/custom-test";
import { TEST_MOCK_EMERGENCY_PHONES } from "../cms-integration-mocks";
import { E2E_DRAFT_UI_NAME_PREFIX } from "../helpers/cms-integration-helpers";

const VISITING_RULES_DRAFT_EMERGENCY_PHONES_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Экстренные службы`;
const VISITING_RULES_PAGE_API_ENDPOINT = `${getStrapiURL()}/visiting-rules-page`;

test.describe(`Visiting rules page CMS integration tests`, () => {
  test.afterEach(async () => {
    await cleanupTestVisitingRulesPage();
  });

  test.describe(`Main scenario integration tests`, () => {
    test.beforeEach(async () => {
      await updateTestVisitingRulesPage();
    });

    test(
      `
        GIVEN visiting rules page without content
        WHEN call method PUT /api/visiting-rules
        AND go to visiting rules page
        SHOULD display visiting rules page content correctly
        `,
      checkVisitingRulesPageOnUiTest,
    );
  });

  test.describe(`Draft preview tests`, () => {
    test.beforeEach(async () => {
      await updateTestVisitingRulesPage({
        isDraft: true,
      });
    });

    test(
      `
        GIVEN visiting rules page draft without content
        WHEN call method PUT /api/visiting-rules
        AND go to visiting rules page draft
        SHOULD display visiting rules page draft content correctly
        `,
      checkVisitingRulesPageDraftPreviewOnUiTest,
    );
  });
});

async function checkVisitingRulesPageOnUiTest({
  page,
  goto,
  setViewportSize,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await goto(AppRoute.VISITING_RULES);

  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await checkVisitingRulesPageContent({
    page,
    visitingRulesPageEmergencyPhonesTitle: TEST_MOCK_EMERGENCY_PHONES.title,
  });
}
async function checkVisitingRulesPageDraftPreviewOnUiTest({
  page,
  gotoWithDraftPreviewMode,
  setViewportSize,
}: {
  page: Page;
  gotoWithDraftPreviewMode: CustomTestFixtures['gotoWithDraftPreviewMode'];
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await gotoWithDraftPreviewMode({
    slug: AppRoute.VISITING_RULES.slice(1),
  });

  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await checkVisitingRulesPageContent({
    page,
    visitingRulesPageEmergencyPhonesTitle: VISITING_RULES_DRAFT_EMERGENCY_PHONES_TITLE,
  });
}

async function checkVisitingRulesPageContent({
  page,
  visitingRulesPageEmergencyPhonesTitle,
}: {
  page: Page;
  visitingRulesPageEmergencyPhonesTitle: string;
}) {
  await expect(page.getByText(visitingRulesPageEmergencyPhonesTitle), `Visiting rules page emergency phones title should be visible`)
    .toBeVisible();

  await expect(page.getByText(TEST_MOCK_EMERGENCY_PHONES.emergencyPhonesCards[0].phone), `Visiting rules page emergency phones card phone should be visible`)
    .toBeVisible();

  await expect(page.getByText(TEST_MOCK_EMERGENCY_PHONES.emergencyPhonesCards[0].label), `Visiting rules page emergency phones card label should be visible`)
    .toBeVisible();
}

async function updateTestVisitingRulesPage({
  isDraft = false,
}: {
  isDraft?: boolean;
} = {}) {
  try {
    const response = await axios.put(`${VISITING_RULES_PAGE_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        blocks: [
          {
            ...TEST_MOCK_EMERGENCY_PHONES,
            ...(isDraft ? {
              title: VISITING_RULES_DRAFT_EMERGENCY_PHONES_TITLE,
            } : {}),
          },
        ],
      },
    });

    await expect(response.status, `Visiting rules page should be updated with status 200`)
      .toEqual(HttpStatusCode.Ok);
  } catch (error) {
    throw new Error(`Failed to update test visiting rules page: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestVisitingRulesPage() {
  try {
    const response = await axios.delete(`${VISITING_RULES_PAGE_API_ENDPOINT}`);

    await expect(response.status, `Visiting rules page should be deleted with status 204`)
      .toEqual(HttpStatusCode.NoContent);
  } catch (error) {
    throw new Error(`Failed to delete test visiting rules page: ${(error as AxiosError).message}`);
  }
}
