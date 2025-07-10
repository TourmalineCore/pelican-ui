import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from '@/playwright-tests/custom-test';
import { AppRoute, Breakpoint, ComponentName } from '@/src/common/enum';

const TEST_ID = `header-popup`;

test.describe(`HeaderPopupTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HEADER_POPUP);
  });

  test(`ActionTest`, actionTest);

  test(`NavigationTest`, navigationTest);

  const breakpoints = BREAKPOINTS.filter(
    (breakpoint) => breakpoint.breakpoint !== Breakpoint.DESKTOP && breakpoint.breakpoint !== Breakpoint.DESKTOP_XL,
  );

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of breakpoints) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: `header-popup`,
        breakpoint,
        breakpointName,
      });
    });
  }
});

async function actionTest({
  page,
  setViewportSize,
}: {
  page: Page;
  setViewportSize: CustomTestFixtures['setViewportSize'];
}) {
  await setViewportSize();

  await expect(getHeaderPopupByTestId({
    page,
  }))
    .toContainText(`Льготы`);
}

async function navigationTest({
  page,
  goto,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
}) {
  await goto(AppRoute.NEWS);

  await page.locator(`.header-logo`)
    .click();

  await expect(getHeaderPopupByTestId({
    page,
  }))
    .toBeHidden();

  await expect(page)
    .toHaveURL(AppRoute.HOME);
}

function getHeaderPopupByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(TEST_ID);
}
