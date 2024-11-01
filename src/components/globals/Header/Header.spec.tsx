import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeaderComponentTests`, () => {
  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`DesktopTest`, desktopTest);
});

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

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: 768,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header-tablet.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: 1366,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header.png`);
}

function getHeaderByTestId({ page }: { page: Page }) {
  return page.getByTestId(`header`);
}
