import { AppRoute, BlockTypes, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideFooter,
  hideHeader,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeroComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.INTERNAL_TEST_PAGE}/${BlockTypes.SHARED_HERO}`,
    });

    await hideHeader({
      page,
    });

    await hideFooter({
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
    width: 378,
    height: 672,
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
    height: 501,
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
    height: 594,
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
    width: Breakpoint.DESKTOP,
    height: 700,
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
    width: Breakpoint.DESKTOP_XL,
    height: 1043,
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
