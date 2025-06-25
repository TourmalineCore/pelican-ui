import { AppRoute, Breakpoint } from "@/src/common/enum";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { HttpStatusCode, AxiosError } from "axios";
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "@/playwright-tests/custom-test";
import { TEST_MOCK_HERO } from "../cms-integration-mocks";
import { E2E_DRAFT_UI_NAME_PREFIX, getFileIdByName } from "../helpers/cms-integration-helpers";

const CONTACT_ZOO_DRAFT_HERO_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Челябинский зоопарк`;
const CONTACT_ZOO_PAGE_API_ENDPOINT = `${getStrapiURL()}/contact-zoo`;

test.describe(`Contact zoo page CMS integration tests`, () => {
  test.afterEach(async () => {
    await cleanupTestContactZooPage();
  });

  test.describe(`Main scenario integration tests`, () => {
    test.beforeEach(async () => {
      await updateTestContactZooPage();
    });

    test(
      `
        GIVEN contact zoo page without content
        WHEN call method PUT /api/contact-zoo
        AND go to contact zoo page
        SHOULD display contact zoo page content correctly
        `,
      checkContactZooPageOnUiTest,
    );
  });

  test.describe(`Draft preview tests`, () => {
    test.beforeEach(async () => {
      await updateTestContactZooPage({
        isDraft: true,
      });
    });

    test(
      `
        GIVEN contact zoo page draft without content
        WHEN call method PUT /api/contact-zoo
        AND go to contact zoo page draft
        SHOULD display contact zoo page draft content correctly
        `,
      checkContactZooPageDraftPreviewOnUiTest,
    );
  });
});

async function checkContactZooPageOnUiTest({
  page,
  goto,
  setViewportSize,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await goto({
    path: AppRoute.CONTACT_ZOO,
  });

  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await checkContactZooPageContent({
    page,
    contactZooPageHeroTitle: TEST_MOCK_HERO.title,
  });
}
async function checkContactZooPageDraftPreviewOnUiTest({
  page,
  gotoWithDraftPreviewMode,
  setViewportSize,
}: {
  page: Page;
  gotoWithDraftPreviewMode: CustomTestFixtures['gotoWithDraftPreviewMode'];
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await gotoWithDraftPreviewMode({
    slug: AppRoute.CONTACT_ZOO.slice(1),
  });

  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await checkContactZooPageContent({
    page,
    contactZooPageHeroTitle: CONTACT_ZOO_DRAFT_HERO_TITLE,
  });
}

async function checkContactZooPageContent({
  page,
  contactZooPageHeroTitle,
}: {
  page: Page;
  contactZooPageHeroTitle: string;
}) {
  await expect(page.getByText(contactZooPageHeroTitle), `Contact zoo page hero title should be visible`)
    .toBeVisible();

  await expect(page.getByText(TEST_MOCK_HERO.infoCard.title), `Contact zoo page hero info card title should be visible`)
    .toBeVisible();

  await expect(page.getByText(TEST_MOCK_HERO.scheduleCard.title), `Contact zoo page hero schedule card title should be visible`)
    .toBeVisible();
}

async function updateTestContactZooPage({
  isDraft = false,
}: {
  isDraft?: boolean;
} = {}) {
  try {
    const response = await axios.put(`${CONTACT_ZOO_PAGE_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        blocks: [
          {
            ...TEST_MOCK_HERO,
            ...(isDraft ? {
              title: CONTACT_ZOO_DRAFT_HERO_TITLE,
            } : {}),
            image: await getFileIdByName(),
          },
        ],
      },
    });

    await expect(response.status, `Contact zoo page should be updated with status 200`)
      .toEqual(HttpStatusCode.Ok);
  } catch (error) {
    throw new Error(`Failed to update test contact zoo page: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestContactZooPage() {
  try {
    const response = await axios.delete(`${CONTACT_ZOO_PAGE_API_ENDPOINT}`);

    await expect(response.status, `Contact zoo page should be deleted with status 204`)
      .toEqual(HttpStatusCode.NoContent);
  } catch (error) {
    throw new Error(`Failed to delete test contact zoo page: ${(error as AxiosError).message}`);
  }
}
