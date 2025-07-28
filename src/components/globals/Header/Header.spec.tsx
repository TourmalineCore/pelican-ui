import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { expect, Page, test } from '@/playwright-tests/custom-test';
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

  test(`HeaderContactLinkAttributeCheckTest`, HeaderContactLinkAttributeCheck);
});

async function HeaderContactLinkAttributeCheck({
  page,
}: {
  page: Page;
}) {
  await page.setViewportSize({
    width: 1366,
    height: 768,
  });

  const contactLink = await page.locator(`a[href^="mailto:"]`)
    .first();

  const expectedEmail = await contactLink.getAttribute(`href`);

  // TODO: Check why there is a build error when importing the MOCK_EMAIL constant
  await expect(expectedEmail)
    .toBe(`mailto:metodist@chelzoo.ru`);
}
