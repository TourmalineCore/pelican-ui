import { AppRoute } from '@/src/common/enum';
import { gotoPage, setViewportSize } from '@/playwright-tests/global-helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`SkipLinkTest`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.INTERNAL_TEST_PAGE,
    });
  });

  test(`MobileTest`, mobileTest);
});

async function mobileTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await page.keyboard.press(`Tab`);

  await page.getByTestId(`skip-link`)
    .click();

  await expect(
    page.getByTestId(`main-content`),
  )
    .toBeFocused;
}
