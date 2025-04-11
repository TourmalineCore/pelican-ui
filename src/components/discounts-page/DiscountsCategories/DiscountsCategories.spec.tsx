import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { test, expect, Page } from '@playwright/test';

const TEST_ID = `discounts-categories`;

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
  page: Page;
}) {
  await setViewportSize({
    page,
    height: 14604,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.MOBILE}.png`);
}

async function tabletTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 9623,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET}.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 13073,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET_XL}.png`);
}

async function desktopTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 12259,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP}.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 18218,
  });

  await expect(getDiscountsCategoriesByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

function getDiscountsCategoriesByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}
