import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideHeader,
  hideTextAndMedia,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`ServicesComponentTests`, () => {
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

    await hideTextAndMedia({
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
    height: 1783,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 1012,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1346,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 1218,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1628,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-desktop-xl.png`);
}

function getServicesByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`services`);
}
