import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

test.describe(`VisitingRulesPhotosPolicyComponentTest`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.VISITING_RULES_PHOTOS_POLICY);
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
        testId: `visiting-rules-photos-policy`,
        breakpoint,
        breakpointName,
      });
    });
  }
});
