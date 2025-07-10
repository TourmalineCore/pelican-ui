import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

test.describe(`TextAndMediaComponentTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.TEXT_AND_MEDIA);
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
        testId: `text-and-media`,
        breakpoint,
        breakpointName,
      });
    });
  }
});
