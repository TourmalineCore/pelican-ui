import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

const TEST_ID = `image-with-button-grid`;

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
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.MOBILE}.png`);
}

async function tabletTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET}.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.TABLET_XL}.png`);
}

async function desktopTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await expect(getImageWithButtonGridByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP}.png`);
}

function getImageWithButtonGridByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}
