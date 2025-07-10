import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { CustomTestFixtures, Page, test } from '../custom-test';
import { axeCheckAndWriteReport } from '../global-helpers';

const PAGE_NAME = `discounts`;

test.describe(`axeCheckUp discounts page`, () => {
  test.beforeEach(async ({
    page,
    goto,
  }) => {
    await goto(AppRoute.DISCOUNTS);

    await page.addScriptTag({
      path: require.resolve(`axe-core/axe.min.js`),
    });
  });

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`DesktopTest`, desktopTest);
});

async function mobileTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.MOBILE,
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.MOBILE,
    pageName: PAGE_NAME,
  });
}

async function tabletTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.TABLET,
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.TABLET,
    pageName: PAGE_NAME,
  });
}

async function desktopTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize({
    width: Breakpoint.DESKTOP,
  });

  await axeCheckAndWriteReport({
    page,
    viewport: BreakpointName.DESKTOP,
    pageName: PAGE_NAME,
  });
}
