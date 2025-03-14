import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  hideMap,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`FooterTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.HOME,
    });

    await hideHeader({
      page,
    });

    await hideMap({
      page,
    });

    await hideSkipLink({
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
    height: 840,
  });

  await expect(getFooterByTestId({
    page,
  }))
    .toHaveScreenshot(`footer-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 460,
  });

  await expect(getFooterByTestId({
    page,
  }))
    .toHaveScreenshot(`footer-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 509,
  });

  await expect(getFooterByTestId({
    page,
  }))
    .toHaveScreenshot(`footer-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 578,
  });

  await expect(getFooterByTestId({
    page,
  }))
    .toHaveScreenshot(`footer-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 898,
  });

  await expect(getFooterByTestId({
    page,
  }))
    .toHaveScreenshot(`footer-desktop-xl.png`);
}

function getFooterByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`footer`);
}
