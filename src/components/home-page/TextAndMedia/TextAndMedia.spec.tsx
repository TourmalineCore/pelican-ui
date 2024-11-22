import { AppRoute, Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`TextAndMediaComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(AppRoute.HOME);

    await hideHeader({
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-mobile.png`);
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-tablet.png`);
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-tablet-xl.png`);
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-desktop.png`);
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-desktop-xl.png`);
}

function getTextAndMediaByTestId({
  page,
}: {
  page: Page,
}) {
  return page.getByTestId(`text-and-media`);
}
