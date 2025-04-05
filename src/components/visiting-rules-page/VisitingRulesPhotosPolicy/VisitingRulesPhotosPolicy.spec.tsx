import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import {
  gotoPage,
  hideCookie,
  hideHeader,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

const PAGE_ID = `visiting-rules-photos-policy`;

test.describe(`VisitingRulesPhotosPolicyComponentTest`, () => {
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

    await hideSkipLink({
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
    height: 767,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 535,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 583,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 732,
  });

  await expect(getVisitingRulesByTestId({
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
    height: 991,
  });

  await expect(getVisitingRulesByTestId({
    page,
  }))
    .toHaveScreenshot(`${PAGE_ID}-${BreakpointName.DESKTOP_XL}.png`);
}

function getVisitingRulesByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(PAGE_ID);
}
