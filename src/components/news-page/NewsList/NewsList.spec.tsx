import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, hideHeader, setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`ContactZooComponentTests`, () => {
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
  page: Page,
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
  page: Page,
}) {
  await setViewportSize({
    page,
    height: 2434,
  });

  await expect(getNewsListByTestId({
    page,
  }))
    .toHaveScreenshot(`news-list-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 1319,
  });

  await expect(getNewsListByTestId({
    page,
  }))
    .toHaveScreenshot(`news-list-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1760,
  });

  await expect(getNewsListByTestId({
    page,
  }))
    .toHaveScreenshot(`news-list-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 1314,
  });

  await expect(getNewsListByTestId({
    page,
  }))
    .toHaveScreenshot(`news-list-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1695,
  });

  await expect(getNewsListByTestId({
    page,
  }))
    .toHaveScreenshot(`news-list-desktop-xl.png`);
}

function getNewsListByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`news-list`);
}

function getNewsCardByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`news-list-card`);
}
