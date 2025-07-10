import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

test.describe(`DiscountsCategoriesTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.DISCOUNTS_CATEGORIES);
  });

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: `discounts-categories`,
        breakpoint,
        breakpointName,
      });
    });
  }
});
