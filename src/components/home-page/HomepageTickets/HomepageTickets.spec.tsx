
import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

test.describe(`HomepageTicketsComponentTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HOME_TICKETS);
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
        testId: `tickets`,
        breakpoint,
        breakpointName,
      });
    });
  }
});
