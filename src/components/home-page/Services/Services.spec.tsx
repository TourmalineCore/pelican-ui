import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

test.describe(`ServicesComponentTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HOME_SERVICES);
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
        testId: `services`,
        breakpoint,
        breakpointName,
      });
    });
  }

  test(`ServicesContactLinksAttributeCheckTest`, async ({
    checkAnchorLink,
  }) => {
    await checkAnchorLink({
      testId: `services-phone-link`,
      path: /^tel:/,
    });

    await checkAnchorLink({
      testId: `services-email-link`,
      path: /^mailto:/,
    });
  });
});
