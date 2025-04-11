import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

const TEST_ID = `visiting-rules-main`;

test.describe(`VisitingRulesMainComponentTest`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.VISITING_RULES,
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
  page: Page;
}) {
  await setViewportSize({
    page,
    height: 1389,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 844,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 939,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 1074,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 1195,
  });

  await expect(getVisitingRulesByTestId({
    page,
  }))
    .toHaveScreenshot(`${TEST_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

function getVisitingRulesByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}
