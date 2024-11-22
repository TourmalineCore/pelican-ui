import { AppRoute, Breakpoint } from '@/src/common/enum';
import { setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeaderComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(AppRoute.HOME);
  });

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

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

  await expect(getHeaderByTestId({
    page,
  }))
    .toHaveScreenshot(`header-mobile.png`);
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

  await expect(getHeaderByTestId({
    page,
  }))
    .toHaveScreenshot(`header-tablet.png`);
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

  await expect(getHeaderByTestId({
    page,
  }))
    .toHaveScreenshot(`header-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await expect(getHeaderByTestId({
    page,
  }))
    .toHaveScreenshot(`header-desktop-xl.png`);
}

function getHeaderByTestId({
  page,
}: { page: Page }) {
  return page.getByTestId(`header`);
}
