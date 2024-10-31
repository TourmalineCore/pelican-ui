import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeaderComponentTests`, () => {
  test(`MobileTest`, mobileTest);

  test(`DesktopTest`, desktopTest);
});

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await page.route(`**/logo-desktop.0f1db5cc.svg`, async (route) => {
    await route.fulfill({
      contentType: `image/svg+xml`,
      path: `public/images/header/logo.svg`,
    });
  });

  await setViewportSizeAndGoToPage({
    page,
    width: 1366,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header.png`);
}

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: 375,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header-mobile.png`);
}

function getHeaderByTestId({ page }: { page: Page }) {
  return page.getByTestId(`header`);
}
