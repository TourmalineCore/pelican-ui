import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  hideFooter,
  hideHeader,
  hideTickets,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`MapComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(AppRoute.HOME);

    await hideHeader({
      page,
    });

    await hideFooter({
      page,
    });

    await hideTickets({
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

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-mobile.png`);
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

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 923,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 881,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1219,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-desktop-xl.png`);
}

function getMapByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`map`);
}
