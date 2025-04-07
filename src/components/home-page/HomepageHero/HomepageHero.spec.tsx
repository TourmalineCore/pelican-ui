import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  SCROLLBAR_WIDTH,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HomepageHeroComponentTests`, () => {
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
    width: 378,
  });

  await expect(getHeroByTestId({
    page,
  }))
    .toHaveScreenshot(`hero-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 437,
  });

  await expect(getHeroByTestId({
    page,
  }))
    .toHaveScreenshot(`hero-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 556,
  });

  await expect(getHeroByTestId({
    page,
  }))
    .toHaveScreenshot(`hero-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP + SCROLLBAR_WIDTH,
  });

  await expect(getHeroByTestId({
    page,
  }))
    .toHaveScreenshot(`hero-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL + SCROLLBAR_WIDTH,
    height: 955,
  });

  await expect(getHeroByTestId({
    page,
  }))
    .toHaveScreenshot(`hero-desktop-xl.png`);
}

function getHeroByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`hero`);
}
