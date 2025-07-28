import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { expect, Page, test } from '@/playwright-tests/custom-test';
import { ComponentName } from '@/src/common/enum';

test.describe(`HomepageHeroComponentTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.HOME_PAGE_HERO);
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
        testId: `hero`,
        breakpoint,
        breakpointName,
      });
    });
  }

  test(`HomepageheroContactLinkAttributeCheckTest`, HomepageheroContactLinkAttributeCheck);
});

async function HomepageheroContactLinkAttributeCheck({
  page,
}: {
  page: Page;
}) {
  await page.setViewportSize({
    width: 375,
    height: 768,
  });

  const contactLink = await page.locator(`a[href^="tel:"]`)
    .first();

  const expectedPhone = await contactLink.getAttribute(`href`);

  // TODO: Check why there is a build error when importing the MOCK_PHONE constant
  await expect(expectedPhone)
    .toBe(`tel:+7 (351) 263-18-64`);
}
