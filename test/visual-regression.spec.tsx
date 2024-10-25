import { test, expect, Page } from '@playwright/test';

test.describe(`VisualRegressionTests`, () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
      width: 1366,
      height: 768,
    });
    await page.goto(`http://localhost:3000`);
  });

  test.describe(`FullpageTests`, () => {
    test(`HomePage`, HomePageTest);
  });
});

async function HomePageTest({
  page,
}: {
  page: Page,
}) {
  await expect(page).toHaveScreenshot(`home-page.png`, {
    fullPage: true,
    timeout: 10000,
  });
}
