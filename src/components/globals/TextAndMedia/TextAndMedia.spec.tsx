import {
  AppRoute,
  BlockTypes,
  Breakpoint,
  BreakpointName,
} from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

const PAGE_ID = `text-and-media`;

test.describe(`TextAndMediaComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.INTERNAL_TEST_PAGE}/${BlockTypes.SHARED_TEXT_AND_MEDIA}`,
      useNetworkidle: false,
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
  });

  await expect(getTextAndMediaByTestId({
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.TABLET}.png`);
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
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.TABLET_XL}.png`);
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

function getTextAndMediaByTestId({
  page,
}: {
  page: Page,
}) {
  return page.getByTestId(PAGE_ID);
}
