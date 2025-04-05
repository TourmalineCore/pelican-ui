import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { gotoPage, setViewportSize } from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

const PAGE_ID = `header`;

test.describe(`HeaderComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.INTERNAL_TEST_PAGE,
    });
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
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.MOBILE}.png`);
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
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.TABLET}.png`);
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
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.DESKTOP}.png`);
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
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

function getHeaderByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(PAGE_ID);
}
