import { Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideFooter,
  hideHeader,
  SCROLLBAR_WIDTH,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`NotFoundComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `/notfound`,
    });

    await hideHeader({
      page,
    });

    await hideFooter({
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
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 807,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 807,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP + SCROLLBAR_WIDTH,
    height: 797,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL + SCROLLBAR_WIDTH,
    height: 1176,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-desktop-xl.png`);
}

function getNotFoundByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`not-found`);
}
