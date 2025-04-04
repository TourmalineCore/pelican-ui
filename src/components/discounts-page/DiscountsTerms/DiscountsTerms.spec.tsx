import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { test, expect, Page } from '@playwright/test';

test.describe(`DiscountsTermsTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.DISCOUNTS,
    });

    await hideHeader({
      page,
    });

    await hideCookie({
      page,
    });
  });

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopXlTest`, desktopXlTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    height: 850,
  });

  await expect(getDiscountsTermsByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-terms-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 822,
  });

  await expect(getDiscountsTermsByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-terms-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1040,
  });

  await expect(getDiscountsTermsByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-terms-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 999,
  });

  await expect(getDiscountsTermsByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-terms-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1408,
  });

  await expect(getDiscountsTermsByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-terms-desktop-xl.png`);
}

function getDiscountsTermsByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`discounts-terms`);
}
