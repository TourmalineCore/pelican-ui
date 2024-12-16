import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, setViewportSize } from '@/playwright-tests/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`HeaderPopupTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(AppRoute.HOME);
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
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await getHeaderPopupButtonByTestId({
    page,
  })
    .then((button) => button.click());

  await expect(page.getByTestId(`header-popup`))
    .toContainText(`Услуги`);
}

async function navigationTest({
  page,
}: {
  page: Page,
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
  page: Page,
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
    .toHaveScreenshot(`header-mobile-popup.png`);
}

async function tabletPopupTest({
  page,
}: {
  page: Page,
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
    .toHaveScreenshot(`header-tablet-popup.png`);
}

async function tabletXlPopupTest({
  page,
}: {
  page: Page,
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
    .toHaveScreenshot(`header-tablet-xl-popup.png`);
}

async function getHeaderPopupButtonByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`header-popup-button`);
}

function getHeaderPopupByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`header-popup`);
}
