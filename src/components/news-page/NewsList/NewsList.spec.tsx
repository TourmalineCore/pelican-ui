import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/global-helpers';
import { test, expect, Page } from '@playwright/test';

const TEST_ID = `news-list`;

test.describe(`NewsListComponentTest`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.NEWS,
    });

    await hideHeader({
      page,
    });

    await hideCookie({
      page,
    });
  });

  test(`PaginationTest`, paginationTest);

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopXlTest`, desktopXlTest);
});

async function paginationTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await expect(getNewsCardByTestId({
    page,
  }))
    .toHaveCount(6);

  await page.getByTestId(`news-list-button`)
    .click();

  await expect(getNewsCardByTestId({
    page,
  }))
    .toHaveCount(7);
}

async function mobileTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    height: 2434,
  });

  await expect(getNewsListByTestId({
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
    height: 1319,
  });

  await expect(getNewsListByTestId({
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
    height: 1760,
  });

  await expect(getNewsListByTestId({
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
    height: 1314,
  });

  await expect(getNewsListByTestId({
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
    height: 1695,
  });

  await expect(getNewsListByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

function getNewsListByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}

function getNewsCardByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(`cards-card`);
}
