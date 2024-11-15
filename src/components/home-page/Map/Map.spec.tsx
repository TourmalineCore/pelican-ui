import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`MapComponentTests`, () => {
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

  hideHeader({
    page,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-mobile.png`);
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

  hideHeader({
    page,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-tablet.png`);
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

  hideHeader({
    page,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-tablet-xl.png`);
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

  hideHeader({
    page,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-desktop.png`);
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

  hideHeader({
    page,
  });

  await expect(getMapByTestId({
    page,
  }))
    .toHaveScreenshot(`map-desktop-xl.png`);
}

function getMapByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`map`);
}
