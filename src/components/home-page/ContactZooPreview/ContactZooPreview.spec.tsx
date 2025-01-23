import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideHeader,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`ContactZooComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.HOME,
    });

    await hideHeader({
      page,
    });

    await hideSkipLink({
      page,
    });

    const largeImage = page.getByTestId(`contact-zoo-large-image`);

    await largeImage.scrollIntoViewIfNeeded();

    await expect(largeImage)
      .not
      .toHaveJSProperty(`naturalWidth`, 0);
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
  await setViewportSize({
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
  await setViewportSize({
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
  await setViewportSize({
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
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await expect(page.getByTestId(`contact-zoo-small-image`))
    .not
    .toHaveJSProperty(`naturalWidth`, 0);

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
