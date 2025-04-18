/* eslint-disable no-await-in-loop */
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, setViewportSize } from '@/playwright-tests/global-helpers';
import { test, Page, expect } from '@playwright/test';

test.describe(`Visible focus indicator verification`, () => {
  test(`HomePageCheckTest`, async ({
    page,
  }: {
    page: Page;
  }) => {
    await gotoPage({
      page,
      url: AppRoute.HOME,
    });

    await checkFocusVisibility({
      page,
    });
  });

  test(`NewsPageCheckTest`, async ({
    page,
  }: {
    page: Page;
  }) => {
    await gotoPage({
      page,
      url: AppRoute.NEWS,
    });

    await checkFocusVisibility({
      page,
    });
  });

  test(`DocumentsPageCheckTest`, async ({
    page,
  }: {
    page: Page;
  }) => {
    await gotoPage({
      page,
      url: AppRoute.DOCUMENTS,
    });

    await checkFocusVisibility({
      page,
    });
  });

  test(`DiscountsPageCheckTest`, async ({
    page,
  }: {
    page: Page;
  }) => {
    await gotoPage({
      page,
      url: AppRoute.DISCOUNTS,
    });

    await checkFocusVisibility({
      page,
    });
  });
});

test(`VisitingRulesPageCheckTest`, async ({
  page,
}: {
  page: Page;
}) => {
  await gotoPage({
    page,
    url: AppRoute.VISITING_RULES,
  });

  await checkFocusVisibility({
    page,
  });
});

async function checkFocusVisibility({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  const errors = [];
  const focusableSelectors = [`a`, `button`];

  for (const selector of focusableSelectors) {
    const elements = await page.$$(selector);
    for (const element of elements) {
      const hasVisibleFocus = await checkFocusIndicator({
        page,
        element,
      });

      if (!hasVisibleFocus) {
        errors.push(await element.evaluate(
          (el: any) => `The focus is not visible: <${el.tagName}>${el.text}</${el.tagName}>`,
        ));
      }
    }
  }

  await expect(errors)
    .toEqual([]);
}

async function checkFocusIndicator({
  page,
  element,
}:{
  page: Page;
  element: any;
}) {
  await element.focus();
  await page.waitForTimeout(200);

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

  const hasVisibleFocus = (styles.outlineStyle !== `none` || styles.borderStyle !== `none`)
  && parseFloat(styles.outlineWidth) > 0
  && styles.outlineColor !== `transparent`
  && !styles.outlineColor.includes(`rgba(0, 0, 0, 0)`);

  return hasVisibleFocus;
}
