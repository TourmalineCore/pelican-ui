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

test.describe(`CardsComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.INTERNAL_TEST_PAGE}/${BlockTypes.SHARED_CARDS}`,
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
    height: 1640,
  });

  await expect(getCardsByTestId({
    page,
  }))
    .toHaveScreenshot(`cards-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 1115,
  });

  await expect(getCardsByTestId({
    page,
  }))
    .toHaveScreenshot(`cards-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1360,
  });

  await expect(getCardsByTestId({
    page,
  }))
    .toHaveScreenshot(`cards-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 1220,
  });

  await expect(getCardsByTestId({
    page,
  }))
    .toHaveScreenshot(`cards-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1520,
  });

  await expect(getCardsByTestId({
    page,
  }))
    .toHaveScreenshot(`cards-desktop-xl.png`);
}

function getCardsByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`cards`);
}
