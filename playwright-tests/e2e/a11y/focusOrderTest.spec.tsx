/* eslint-disable no-await-in-loop */
import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideTextAndMedia,
  setViewportSize,
} from '@/playwright-tests/global-helpers';
import { test, expect, Page } from '@playwright/test';

const expectedMobileHeaderFocusOrder = [
  `skip-link`,
  `header-logo`,
  `header-popup-button`,
];

const expectedDesktopHeaderFocusOrder = [
  `skip-link`,
  `header-logo`,
  ...generateTestIdDuplicates({
    count: 4,
    string: `header-navigation-link`,
  }),
  `header-contact-button`,
  `header-tickets-popup-button`,
];

const expectedMobileFooterFocusOrder = [
  `footer-tickets-popup-button`,
  ...generateTestIdDuplicates({
    count: 4,
    string: `footer-nav-link`,
  }),
  `footer-tel-link`,
  `footer-email-link`,
  `social-icon-vkontakte`,
  `social-icon-telegram`,
  `social-icon-odnoklassniki`,
  `social-icon-dzen`,
  `footer-copyright-link`,
  ...generateTestIdDuplicates({
    count: 3,
    string: `footer-official-link`,
  }),
];

const expectedDesktopFooterFocusOrder = [
  `footer-tickets-popup-button`,
  ...generateTestIdDuplicates({
    count: 4,
    string: `footer-nav-link`,
  }),
  `footer-tel-link`,
  `footer-email-link`,
  `footer-copyright-link`,
  `social-icon-vkontakte`,
  `social-icon-telegram`,
  `social-icon-odnoklassniki`,
  `social-icon-dzen`,
  ...generateTestIdDuplicates({
    count: 3,
    string: `footer-official-link`,
  }),
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

      await hideCookie({
        page,
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

      await hideCookie({
        page,
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

  test.describe(`Discounts page check`, () => {
    test.beforeEach(async ({
      page,
    }) => {
      await gotoPage({
        page,
        url: AppRoute.DISCOUNTS,
      });
    });

    test(`DiscountsPageMobileTest`, discountsPageMobileTest);

    test(`DiscountsPageDesktopTest`, discountsPageDesktopTest);
  });

  test.describe(`Visiting rules page check`, () => {
    test.beforeEach(async ({
      page,
    }) => {
      await gotoPage({
        page,
        url: AppRoute.VISITING_RULES,
      });
    });

    test(`VisitingRulesPageMobileTest`, visitingRulesPageMobileTest);

    test(`VisitingRulesPageDesktopTest`, visitingRulesPageDesktopTest);
  });
});

async function homePageMobileTest({
  page,
}: {
  page: Page;
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
    ...generateTestIdDuplicates({
      count: 3,
      string: `ticket-card-link`,
    }),
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
  page: Page;
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
    ...generateTestIdDuplicates({
      count: 3,
      string: `ticket-card-link`,
    }),
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
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await page.getByTestId(`header-popup-button`)
    .click();

  const expectedFocusOrder = [
    `header-popup-ticket-button`,
    ...generateTestIdDuplicates({
      count: 4,
      string: `header-navigation-link`,
    }),
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
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await page.getByTestId(`header-tickets-popup-button`)
    .click();

  const expectedFocusOrder = [
    ...generateTestIdDuplicates({
      count: 3,
      string: `tickets-popup-card-link`,
    }),
    ...generateTestIdDuplicates({
      count: 3,
      string: `accordion-trigger`,
    }),
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
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  const expectedFocusOrder = [
    ...expectedMobileHeaderFocusOrder,
    ...generateTestIdDuplicates({
      count: 6,
      string: `cards-card`,
    }),
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
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  const expectedFocusOrder = [
    ...expectedDesktopHeaderFocusOrder,
    ...generateTestIdDuplicates({
      count: 6,
      string: `cards-card`,
    }),
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
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  const expectedFocusOrder = [
    ...expectedMobileHeaderFocusOrder,
    ...generateTestIdDuplicates({
      count: 8,
      string: `category`,
    }),
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
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  const expectedFocusOrder = [
    ...expectedDesktopHeaderFocusOrder,
    ...generateTestIdDuplicates({
      count: 8,
      string: `category`,
    }),
    ...expectedDesktopFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function discountsPageMobileTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  const expectedFocusOrder = [
    ...expectedMobileHeaderFocusOrder,
    ...generateTestIdDuplicates({
      count: 21,
      string: `discounts-link`,
    }),
    `discounts-remark-link`,
    ...expectedMobileFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function discountsPageDesktopTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  const expectedFocusOrder = [
    ...expectedDesktopHeaderFocusOrder,
    ...generateTestIdDuplicates({
      count: 21,
      string: `discounts-link`,
    }),
    `discounts-remark-link`,
    ...expectedDesktopFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function visitingRulesPageMobileTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  const expectedFocusOrder = [
    ...expectedMobileHeaderFocusOrder,
    `visiting-rules-document-link`,
    ...generateTestIdDuplicates({
      count: 4,
      string: `visiting-rules-emergency-phone-link`,
    }),
    ...expectedMobileFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

async function visitingRulesPageDesktopTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  const expectedFocusOrder = [
    ...expectedDesktopHeaderFocusOrder,
    `visiting-rules-document-link`,
    ...generateTestIdDuplicates({
      count: 4,
      string: `visiting-rules-emergency-phone-link`,
    }),
    ...expectedDesktopFooterFocusOrder,
  ];

  await checkNavigationUsingTab({
    page,
    expectedFocusOrder,
  });
}

function generateTestIdDuplicates({
  count,
  string,
}: {
  count: number;
  string: string;
}) : string[] {
  return Array(count)
    .fill(string);
}

async function checkNavigationUsingTab({
  page,
  expectedFocusOrder,
}: {
  page: Page;
  expectedFocusOrder: string[];
}) {
  for (const element of expectedFocusOrder) {
    await page.keyboard.press(`Tab`);
    await page.waitForTimeout(200);
    await expect(page.locator(`:focus`))
      .toHaveAttribute(`data-testid`, `${element}`);
  }
}
