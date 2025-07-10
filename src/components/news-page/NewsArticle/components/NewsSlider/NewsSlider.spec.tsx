import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { expect, Page, test } from '@/playwright-tests/custom-test';
import { AppRoute, ComponentName } from '@/src/common/enum';

test.describe(`NewsSliderComponentTest`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.NEWS_SLIDER);
  });

  test(`NavigationTest`, navigationTest);

  for (const {
    name,
    breakpoint,
    breakpointName,
  } of BREAKPOINTS) {
    test(name, async ({
      testScreenshotAtBreakpoint,
    }) => {
      await testScreenshotAtBreakpoint({
        testId: `news-slider`,
        breakpoint,
        breakpointName,
      });
    });
  }
});

async function navigationTest({
  page,
}: {
  page: Page;
}) {
  await page.getByTestId(`slider-card`)
    .first()
    .click();

  await expect(page)
    .toHaveURL(`${AppRoute.NEWS}/2024/09/29/amurskii-tigr-i-kakie-u-nego-yest-problemi`);
}
