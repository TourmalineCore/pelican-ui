import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { test } from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

test.describe(`FooterTests`, () => {
  test.beforeEach(async ({
    page,
    goToComponentsPage,
  }) => {
    await page.route(`https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2.svg`, async (route) => route.fulfill({
      contentType: `image/svg+xml`,
      path: `./playwright-tests/fixtures/banner-fluid-bg-2.svg`,
    }));

    await page.route(`https://pos.gosuslugi.ru/bin/banner-fluid/2/banner-fluid-bg-2-small.svg`, async (route) => route.fulfill({
      contentType: `image/svg+xml`,
      path: `./playwright-tests/fixtures/banner-fluid-bg-2-small.svg`,
    }));

    await goToComponentsPage(ComponentName.FOOTER);
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
        testId: `footer`,
        breakpoint,
        breakpointName,
      });
    });
  }
});
