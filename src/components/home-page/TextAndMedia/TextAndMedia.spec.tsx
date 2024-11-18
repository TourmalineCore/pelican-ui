import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`TextAndMediaComponentTests`, () => {
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-mobile.png`, {
      timeout: 10000,
    });
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-tablet.png`, {
      timeout: 10000,
    });
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-tablet-xl.png`, {
      timeout: 10000,
    });
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-desktop.png`, {
      timeout: 10000,
    });
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

  await expect(getTextAndMediaByTestId({
    page,
  }))
    .toHaveScreenshot(`text-and-media-desktop-xl.png`, {
      timeout: 10000,
    });
}

function getTextAndMediaByTestId({
  page,
}: { page: Page }) {
  return page.getByTestId(`text-and-media`);
}
