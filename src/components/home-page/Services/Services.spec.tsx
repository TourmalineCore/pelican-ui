import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`ServicesComponentTests`, () => {
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
    height: 1783,
  });

  hideHeader({
    page,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-mobile.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET,
    height: 1012,
  });

  hideHeader({
    page,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-tablet.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1346,
  });

  hideHeader({
    page,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-tablet-xl.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP,
    height: 1386,
  });

  hideHeader({
    page,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1987,
  });

  hideHeader({
    page,
  });

  await expect(getServicesByTestId({
    page,
  }))
    .toHaveScreenshot(`services-desktop-xl.png`);
}

function getServicesByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`services`);
}
