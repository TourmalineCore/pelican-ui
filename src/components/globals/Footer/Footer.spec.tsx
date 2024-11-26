import { AppRoute, Breakpoint } from '@/src/common/enum';
import { hideHeader, hideMap, setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`FooterTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(AppRoute.HOME);

    await hideHeader({
      page,
    });

    await hideMap({
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
