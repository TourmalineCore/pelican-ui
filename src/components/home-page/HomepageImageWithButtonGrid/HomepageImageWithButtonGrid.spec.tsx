import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { Breakpoint, ComponentName } from '@/src/common/enum';

test.describe(`HomepageImageWithButtonGridTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HOME_IMAGE_WITH_BUTTON_GRID);
  });

  const breakpoints = BREAKPOINTS.filter((breakpoint) => breakpoint.breakpoint !== Breakpoint.DESKTOP_XL);

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of breakpoints) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: `image-with-button-grid`,
        breakpoint,
        breakpointName,
      });
    });
  }
});
