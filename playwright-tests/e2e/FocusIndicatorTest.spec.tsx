import { AppRoute } from '@/src/common/enum';
import { gotoPage, hideTextAndMedia, setViewportSize } from '@/playwright-tests/helpers';
import { test, Page } from '@playwright/test';
import { assert } from 'console';

test.describe(`Visible focus indicator verification`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.HOME,
    });

    await hideTextAndMedia({
      page,
    });
  });

  test(`MobileTest`, mobileTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await hideTextAndMedia({
    page,
  });

  const focusableSelectors = [`a`, `button`];

  async function checkFocusIndicator(element: any) {
    await element.focus();

    const styles = await element.evaluate((el: any) => {
      const computedStyles = window.getComputedStyle(el);
      return {
        outlineWidth: computedStyles.outlineWidth,
        outlineStyle: computedStyles.outlineStyle,
        outlineColor: computedStyles.outlineColor,
        borderWidth: computedStyles.borderWidth,
        borderStyle: computedStyles.borderStyle,
        borderColor: computedStyles.borderColor,
      };
    });

    const isOutlineVisible = styles.outlineStyle !== `none`
  && parseFloat(styles.outlineWidth) > 0
  && styles.outlineColor !== `transparent`
  && !styles.outlineColor.includes(`rgba(0, 0, 0, 0)`);

    const isBorderVisible = styles.borderStyle !== `none`
  && parseFloat(styles.borderWidth) > 0
  && styles.borderColor !== `transparent`
  && !styles.borderColor.includes(`rgba(0, 0, 0, 0)`);

    const hasVisibleFocus = isOutlineVisible || isBorderVisible;

    assert(
      hasVisibleFocus,
      `Element ${await element.evaluate(
        (el: any) => el.tagName,
      )} does not have a visible focus indicator.`,
    );
  }

  for (const selector of focusableSelectors) {
    const elements = await page.$$(selector);
    for (const element of elements) {
      await checkFocusIndicator(element);
    }
  }
}
