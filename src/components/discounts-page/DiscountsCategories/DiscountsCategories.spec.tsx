import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { test, expect, Page } from '@playwright/test';

test.describe(`DiscountsCategoriesTests`, () => {
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
    height: 14604,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-categories-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 9623,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-categories-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 13073,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-categories-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 12259,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-categories-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 18218,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`discounts-categories-desktop-xl.png`);
}

function getDiscountsCategoriesByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`discounts-categories`);
}
