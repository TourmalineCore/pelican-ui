import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`NotFoundComponentTests`, () => {
  test.beforeEach(({
    page,
  }) => {
    hideHeader({
      page,
    });
  });

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
    path: `/not-found`,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    path: `/not-found`,
    width: Breakpoint.TABLET,
    height: 807,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    path: `/not-found`,
    width: Breakpoint.TABLET_XL,
    height: 807,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    path: `/not-found`,
    width: Breakpoint.DESKTOP,
    height: 797,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    path: `/not-found`,
    width: Breakpoint.DESKTOP_XL,
    height: 1105,
  });

  await expect(getNotFoundByTestId({
    page,
  }))
    .toHaveScreenshot(`not-found-desktop-xl.png`);
}

function getNotFoundByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`not-found`);
}
