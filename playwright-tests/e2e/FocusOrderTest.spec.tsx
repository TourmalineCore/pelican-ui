/* eslint-disable no-await-in-loop */
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, hideTextAndMedia, setViewportSize } from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

const expectedMobileHeaderFocusOrder = [
  `skip-link`,
  `header-logo`,
  `header-popup-button`,
];

const expectedDesktopHeaderFocusOrder = [
  `skip-link`,
  `header-logo`,
  `header-navigation-link`,
  `header-navigation-link`,
  `header-navigation-link`,
  `header-navigation-link`,
  `header-contact-button`,
  `header-tickets-popup-button`,
];

const expectedMobileFooterFocusOrder = [
  `footer-tickets-popup-button`,
  `footer-nav-link`,
  `footer-nav-link`,
  `footer-nav-link`,
  `footer-nav-link`,
  `footer-tel-link`,
  `footer-email-link`,
  `social-icon-vkontakte`,
  `social-icon-telegram`,
  `social-icon-odnoklassniki`,
  `social-icon-dzen`,
  `footer-copyright-link`,
  `footer-official-link`,
  `footer-official-link`,
  `footer-official-link`,
];

const expectedDesktopFooterFocusOrder = [
  `footer-tickets-popup-button`,
  `footer-nav-link`,
  `footer-nav-link`,
  `footer-nav-link`,
  `footer-nav-link`,
  `footer-tel-link`,
  `footer-email-link`,
  `footer-copyright-link`,
  `social-icon-vkontakte`,
  `social-icon-telegram`,
  `social-icon-odnoklassniki`,
  `social-icon-dzen`,
  `footer-official-link`,
  `footer-official-link`,
  `footer-official-link`,
];

test.describe(`Logical focus order verification`, () => {
  test.describe(`Home page check`, () => {
    test.beforeEach(async ({
      page,
    }) => {
      await gotoPage({
        page,
        url: AppRoute.HOME,
      });
    });

    test(`HomePageMobileTest`, homePageMobileTest);

    test(`HomePageDesktopTest`, homePageDesktopTest);
  });

  test.describe(`Mobile menu and tickets popup check`, () => {
    test.beforeEach(async ({
      page,
    }) => {
      await gotoPage({
        page,
        url: AppRoute.HOME,
      });
    });

    test(`MobileMenuOpenTest`, mobileMenuOpenTest);

    test(`TicketsPopupOpenTest`, ticketsPopupOpenTest);
  });

  test.describe(`News page check`, () => {
    test.beforeEach(async ({
      page,
    }) => {
      await gotoPage({
        page,
        url: AppRoute.NEWS,
      });
    });

    test(`NewsPageMobileTest`, newsPageMobileTest);

    test(`NewsPageDesktopTest`, newsPageDesktopTest);
  });

  test.describe(`Documents page check`, () => {
    test.beforeEach(async ({
      page,
    }) => {
      await gotoPage({
        page,
        url: AppRoute.DOCUMENTS,
      });
    });

    test(`DocumentsPageMobileTest`, documentsPageMobileTest);

    test(`DocumentsPageDesktopTest`, documentsPageDesktopTest);
  });
});

async function homePageMobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  const expectedFocusOrder = [
    ...expectedMobileHeaderFocusOrder,
    `hero-contact-button`,
    `hero-tickets-popup-button`,
    `services-phone-link`,
    `services-email-link`,
    `image-grid-btn`,
    `ticket-card-link`,
    `ticket-card-link`,
    `ticket-card-link`,
    `tickets-buy-button`,
    `tickets-all-discounts`,
    `text-link`,
    ...expectedMobileFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function homePageDesktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await hideTextAndMedia({
    page,
  });

  const expectedFocusOrder = [
    ...expectedDesktopHeaderFocusOrder,
    `services-phone-link`,
    `services-email-link`,
    `image-grid-btn`,
    `ticket-card-link`,
    `ticket-card-link`,
    `ticket-card-link`,
    `tickets-discounts-link`,
    `text-link`,
    ...expectedDesktopFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function mobileMenuOpenTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await page.getByTestId(`header-popup-button`)
    .click();

  const expectedFocusOrder = [
    `header-popup-ticket-button`,
    `header-navigation-link`,
    `header-navigation-link`,
    `header-navigation-link`,
    `header-navigation-link`,
    `header-popup-phone`,
    `header-popup-email`,
    `social-icon-vkontakte`,
    `social-icon-telegram`,
    `social-icon-odnoklassniki`,
    `social-icon-dzen`,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function ticketsPopupOpenTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await page.getByTestId(`header-tickets-popup-button`)
    .click();

  const expectedFocusOrder = [
    `tickets-popup-card-link`,
    `tickets-popup-card-link`,
    `tickets-popup-card-link`,
    `accordion-trigger`,
    `accordion-trigger`,
    `accordion-trigger`,
    `tickets-popup-buy-button`,
    `tickets-popup-close-button`,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function newsPageMobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  const expectedFocusOrder = [
    ...expectedMobileHeaderFocusOrder,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `news-list-button`,
    ...expectedMobileFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function newsPageDesktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  const expectedFocusOrder = [
    ...expectedDesktopHeaderFocusOrder,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `cards-card`,
    `news-list-button`,
    ...expectedDesktopFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function documentsPageMobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  const expectedFocusOrder = [
    ...expectedMobileHeaderFocusOrder,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    ...expectedMobileFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function documentsPageDesktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  const expectedFocusOrder = [
    ...expectedDesktopHeaderFocusOrder,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    `category`,
    ...expectedDesktopFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function checkNavigationUsingTab({
  page,
  expectedFocusOrder,
}: {
  page: Page,
  expectedFocusOrder: string[]
}) {
  for (const element of expectedFocusOrder) {
    await page.keyboard.press(`Tab`);
    await page.waitForTimeout(200);
    await expect(page.locator(`:focus`))
      .toHaveAttribute(`data-testid`, `${element}`);
  }
}
