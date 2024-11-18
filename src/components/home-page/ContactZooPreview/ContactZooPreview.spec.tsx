import { Breakpoint } from '@/src/common/enum';
import { hideHeader, setViewportSizeAndGoToPage } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`ContactZooComponentTests`, () => {
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
});

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSizeAndGoToPage({
    page,
  });

  await expect(getContactZooByTestId({
    page,
  }))
    .toHaveScreenshot(`contact-zoo-mobile.png`);
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

  await expect(getContactZooByTestId({
    page,
  }))
    .toHaveScreenshot(`contact-zoo-tablet.png`);
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

  await expect(getContactZooByTestId({
    page,
  }))
    .toHaveScreenshot(`contact-zoo-tablet-xl.png`);
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

  await expect(getContactZooByTestId({
    page,
  }))
    .toHaveScreenshot(`contact-zoo-desktop.png`);
}

function getContactZooByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`contact-zoo`);
}
