import { AppRoute, Breakpoint } from '@/src/common/enum';
import {
  gotoPage,
  hideHeader,
  hideSkipLink,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`CookieTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.INTERNAL_TEST_PAGE,
    });

    await hideHeader({
      page,
    });

    await hideSkipLink({
      page,
    });
  });

  test(`ActionTest`, actionTest);

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopXlTest`, desktopXlTest);
});

async function actionTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await page.getByTestId(`cookie-button`)
    .click();

  await expect(page.getByTestId(`cookie`))
    .toBeHidden;

  await page.reload();

  await expect(page.getByTestId(`cookie`))
    .toBeHidden;
}

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await expect(getCookieByTestId({
    page,
  }))
    .toHaveScreenshot(`cookie-mobile.png`);
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

  await expect(getCookieByTestId({
    page,
  }))
    .toHaveScreenshot(`cookie-tablet.png`);
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

  await expect(getCookieByTestId({
    page,
  }))
    .toHaveScreenshot(`cookie-tablet-xl.png`);
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

  await expect(getCookieByTestId({
    page,
  }))
    .toHaveScreenshot(`cookie-desktop.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await expect(getCookieByTestId({
    page,
  }))
    .toHaveScreenshot(`cookie-desktop-xl.png`);
}

function getCookieByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`cookie`);
}
