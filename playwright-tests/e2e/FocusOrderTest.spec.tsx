import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, hideTextAndMedia, setViewportSize } from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`Logical focus order verification`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.HOME,
    });
  });

  test(`MobileTest`, mobileTest);

  test(`MobileMenuOpenTest`, mobileMenuOpenTest);

  test(`TabletTest`, desktopTest);

  test(`TicketsPopupOpenTest`, ticketsPopupOpenTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await hideTextAndMedia({
    page,
  });

  const expectedFocusOrder = [
    `header-logo`,
    `header-popup-button`,
    `hero-contact-button`,
    `hero-tickets-popup-button`,
    `services-phone-link`,
    `services-email-link`,
    `contact-zoo-btn`,
    `ticket-card-link`,
    `ticket-card-link`,
    `ticket-card-link`,
    `tickets-buy-button`,
    `tickets-all-discounts`,
    `map-address-link`,
    `footer-tickets-popup-button`,
    `footer-nav-link`,
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

  for (const element of expectedFocusOrder) {
    await page.keyboard.press(`Tab`);
    await page.waitForTimeout(500);
    await expect(page.locator(`:focus`))
      .toHaveAttribute(`data-testid`, `${element}`);
  }
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
    `header-navigation-link`,
    `header-popup-phone`,
    `header-popup-email`,
    `social-icon-vkontakte`,
    `social-icon-telegram`,
    `social-icon-odnoklassniki`,
    `social-icon-dzen`,
    // `header-logo`,
    // `header-popup-button`,
  ];

  for (const element of expectedFocusOrder) {
    await page.keyboard.press(`Tab`);
    await page.waitForTimeout(500);
    await expect(page.locator(`:focus`))
      .toHaveAttribute(`data-testid`, `${element}`);
  }
}

async function desktopTest({
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
    `header-logo`,
    `header-navigation-link`,
    `header-navigation-link`,
    `header-navigation-link`,
    `header-navigation-link`,
    `header-navigation-link`,
    `header-contact-button`,
    `header-tickets-popup-button`,
    `services-phone-link`,
    `services-email-link`,
    `contact-zoo-btn`,
    `ticket-card-link`,
    `ticket-card-link`,
    `ticket-card-link`,
    `tickets-discounts-link`,
    `map-address-link`,
    `footer-tickets-popup-button`,
    `footer-nav-link`,
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

  for (const element of expectedFocusOrder) {
    await page.keyboard.press(`Tab`);
    await page.waitForTimeout(500);
    await expect(page.locator(`:focus`))
      .toHaveAttribute(`data-testid`, `${element}`);
  }
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

  for (const element of expectedFocusOrder) {
    await page.keyboard.press(`Tab`);
    await page.waitForTimeout(500);
    await expect(page.locator(`:focus`))
      .toHaveAttribute(`data-testid`, `${element}`);
  }
}
