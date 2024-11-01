import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeaderComponentTests`, () => {
  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopXlTest`, desktopXlTest);
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
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
    .toHaveScreenshot(`header-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: 1920,
  });

  await expect(getHeaderByTestId({ page }))
    .toHaveScreenshot(`header-desktop-xl.png`);
}

function getHeaderByTestId({ page }: { page: Page }) {
  return page.getByTestId(`header`);
}
