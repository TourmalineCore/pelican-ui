import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { gotoPage, setViewportSize } from '@/playwright-tests/global-helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeaderPopupTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.HOME,
    });
  });

  test(`ActionTest`, actionTest);

  test(`NavigationTest`, navigationTest);

  test(`MobilePopupTest`, mobilePopupTest);

  test(`TabletPopupTest`, tabletPopupTest);

  test(`TabletXlPopupTest`, tabletXlPopupTest);
});

async function actionTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await expect(page.getByTestId(`header-popup`))
    .toContainText(`Льготы`);
}

async function navigationTest({
  page,
}: {
  page: Page;
}) {
  await gotoPage({
    page,
    url: AppRoute.NEWS,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await page.locator(`.header-logo`)
    .click();

  await expect(getHeaderPopupByTestId({
    page,
  }))
    .toBeHidden();

  await expect(page)
    .toHaveURL(AppRoute.HOME);
}

async function mobilePopupTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await expect(getHeaderPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`header-popup-${BreakpointName.MOBILE}.png`);
}

async function tabletPopupTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await expect(getHeaderPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`header-popup-${BreakpointName.TABLET}.png`);
}

async function tabletXlPopupTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await expect(getHeaderPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`header-popup-${BreakpointName.TABLET_XL}.png`);
}

async function getHeaderPopupButtonByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(`header-popup-button`);
}

function getHeaderPopupByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(`header-popup`);
}
