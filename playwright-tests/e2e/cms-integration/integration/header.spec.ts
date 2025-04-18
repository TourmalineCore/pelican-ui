import { gotoPage, setViewportSize } from "@/playwright-tests/global-helpers";
import { AppRoute, Breakpoint } from "@/src/common/enum";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import test, { expect, Page } from "@playwright/test";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { E2E_DRAFT_UI_NAME_PREFIX, getFileIdByName, gotoWithDraftPreviewMode } from "../helpers/cms-integration-helpers";
import { TEST_MOCK_HEADER } from "../cms-integration-mocks";

const HEADER_API_ENDPOINT = `${getStrapiURL()}/header`;

const TICKET_POPUP_DRAFT_BUY_TICKETS_BUTTON_LABEL = `${E2E_DRAFT_UI_NAME_PREFIX} Купить билет`;

test.describe(`Header CMS integration tests`, () => {
  test.afterEach(async () => {
    await cleanupTestHeader();
  });

  test.describe(`Main scenario tests`, () => {
    test.beforeEach(async () => {
      await updateTestHeader();
    });

    test(
      `
        GIVEN ticket popup without content
        WHEN call method PUT /api/header
        AND click on ticket button
        SHOULD display ticket popup content correctly
        `,
      checkTicketsPopupOnUiTest,
    );
  });

  test.describe(`Draft preview tests`, () => {
    test.beforeEach(async () => {
      await updateTestHeader({
        isDraft: true,
      });
    });

    test(
      `
        GIVEN ticket popup without content
        WHEN call method PUT /api/header
        AND click on ticket button
        SHOULD display ticket popup content correctly
        `,
      checkTicketsPopupDraftPreviewTest,
    );
  });
});

async function checkTicketsPopupOnUiTest({
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

  await checkTicketsPopupContent({
    page,
    ticketsPopupBuyTicketsButtonLabel: TEST_MOCK_HEADER.ticketsPopup.buyTicketsButton.label,
  });
}

async function checkTicketsPopupDraftPreviewTest({
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

  await checkTicketsPopupContent({
    page,
    ticketsPopupBuyTicketsButtonLabel: TICKET_POPUP_DRAFT_BUY_TICKETS_BUTTON_LABEL,
  });
}

async function checkTicketsPopupContent({
  page,
  ticketsPopupBuyTicketsButtonLabel,
}: {
  page: Page;
  ticketsPopupBuyTicketsButtonLabel: string;
}) {
  await page.getByTestId(`header-tickets-popup-button`)
    .click();

  await expect(page.getByText(TEST_MOCK_HEADER.ticketsPopup.generalTickets[0].category), `The general ticket category should be visible in the ticket popup.`)
    .toBeVisible();

  await expect(page.getByText(TEST_MOCK_HEADER.ticketsPopup.subsidizedTicket.category), `The subsidized ticket category should be visible in the ticket popup.`)
    .toBeVisible();

  await expect(page.getByText(ticketsPopupBuyTicketsButtonLabel), `The buy ticket button label should be visible in the ticket popup.`)
    .toBeVisible();
}

async function updateTestHeader({
  isDraft = false,
}: {
  isDraft?: boolean;
} = {}) {
  try {
    const response = await axios.put(`${HEADER_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        ticketsPopup: {
          ...TEST_MOCK_HEADER.ticketsPopup,
          ...(isDraft ? {
            buyTicketsButton: {
              ...TEST_MOCK_HEADER.ticketsPopup.buyTicketsButton,
              label: TICKET_POPUP_DRAFT_BUY_TICKETS_BUTTON_LABEL,
            },
          } : {}),
          visitingRulesAccordion: {
            button: TEST_MOCK_HEADER.ticketsPopup.visitingRulesAccordion.button,
            images: [
              {
                id: await getFileIdByName(),
              },
            ],
          },
        },
      },
    });

    await expect(response.status, `Header content should be updated with status 200`)
      .toEqual(HttpStatusCode.Ok);
  } catch (error) {
    throw new Error(`Failed to update test header: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestHeader() {
  try {
    const response = await axios.delete(`${HEADER_API_ENDPOINT}`);

    await expect(response.status, `Header content should be deleted with status 204`)
      .toEqual(HttpStatusCode.NoContent);
  } catch (error) {
    throw new Error(`Failed to delete test header: ${(error as AxiosError).message}`);
  }
}
