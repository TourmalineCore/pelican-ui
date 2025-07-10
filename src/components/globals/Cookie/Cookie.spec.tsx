import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

const TEST_ID = `cookie`;

test.describe(`CookieTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.COOKIE);
  });

  test(`ActionTest`, actionTest);

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: TEST_ID,
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

  await page.getByTestId(`cookie-button`)
    .click();

  await expect(page.getByTestId(TEST_ID))
    .toBeHidden();
}
