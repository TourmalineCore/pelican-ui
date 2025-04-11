import { Breakpoint, BreakpointName } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideFooter,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

const TEST_ID = `not-found`;

test.describe(`NotFoundComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `/notfound`,
    });

    await hideHeader({
      page,
    });

    await hideFooter({
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
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await expect(getNotFoundByTestId({
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
    height: 807,
  });

  await expect(getNotFoundByTestId({
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
    height: 807,
  });

  await expect(getNotFoundByTestId({
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
    height: 797,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP}.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1176,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

function getNotFoundByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}
