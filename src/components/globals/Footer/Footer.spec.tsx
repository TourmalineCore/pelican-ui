import { Breakpoint } from '@/src/common/enum';
import { setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`FooterTests`, () => {
  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`TabletXlTest`, tabletXlTest);

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

  await expect(getFooterByTestId({ page }))
    .toHaveScreenshot(`footer-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET,
  });

  await expect(getFooterByTestId({ page }))
    .toHaveScreenshot(`footer-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await expect(getFooterByTestId({ page }))
    .toHaveScreenshot(`footer-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP,
  });

  await expect(getFooterByTestId({ page }))
    .toHaveScreenshot(`footer-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await expect(getFooterByTestId({ page }))
    .toHaveScreenshot(`footer-desktop-xl.png`);
}

function getFooterByTestId({ page }: { page: Page }) {
  return page.getByTestId(`footer`);
}
