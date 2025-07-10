import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { Breakpoint, ComponentName } from '@/src/common/enum';

test.describe(`HeaderComponentTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HEADER);
  });

  const breakpoints = BREAKPOINTS.filter((breakpoint) => breakpoint.breakpoint !== Breakpoint.TABLET_XL);

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of breakpoints) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: `header`,
        breakpoint,
        breakpointName,
      });
    });
  }
});
