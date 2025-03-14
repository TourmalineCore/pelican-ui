import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HomepageImageWithButtonGridTests`, () => {
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
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`image-with-button-grid-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`image-with-button-grid-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`image-with-button-grid-tablet-xl.png`);
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

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`image-with-button-grid-desktop.png`);
}

function getImageWithButtonGridByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`image-with-button-grid`);
}
