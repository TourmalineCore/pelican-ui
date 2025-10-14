import { BREAKPOINTS } from '@/playwright-tests/constants/breakpoints';
import { expect, test } from '@/playwright-tests/custom-test';
import { Breakpoint, BreakpointName, ComponentName } from '@/src/common/enum';

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

test.describe(`TextAndMediaWithLongTitleComponentTests`, () => {
  test.beforeEach(async ({
    goToComponentsPage,
  }) => {
    await goToComponentsPage(ComponentName.TEXT_AND_MEDIA_WITH_LONG_TITLE);
  });

  test(`DesktopXlTest`, async ({
    page,
    setViewportSize,
  }) => {
    // This is necessary so that the tests do not crop the screenshots.
    await page.addStyleTag({
      content: `html, body, #__next { height: auto !important; min-height: 100% !important; }`,
    });

    await setViewportSize({
      width: Breakpoint.DESKTOP_XL,
    });

    await expect(page.getByTestId(`text-and-media`))
      .toHaveScreenshot(`text-and-media-with-long-title-${BreakpointName.DESKTOP_XL}.png`);
  });
});
