/* eslint-disable no-await-in-loop */
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, hideHeader, setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`DocumentsCategoriesListComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: AppRoute.DOCUMENTS,
    });

    await hideHeader({
      page,
    });
  });

  test(`RouteTest`, routeTest);

  test(`MobileTest`, mobileTest);

  test(`TabletTest`, tabletTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopXlTest`, desktopXlTest);
});

async function routeTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  const links = page.locator(`[data-testid="documents-category-card"]`);
  const count = await links.count();

  for (let id = 0; id < count; id++) {
    await links.nth(id)
      .click();

    await page.waitForURL(`**/${AppRoute.DOCUMENTS}/${id}`);
    expect(page.url())
      .toBe(`http://localhost:3000/${AppRoute.DOCUMENTS}/${id}`);

    await page.goBack();
  }

  await page.goto(`http://localhost:3000/${AppRoute.DOCUMENTS}/100`);
  await page.getByTestId(`not-found`);
}

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-list-mobile.png`);
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

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-list-tablet.png`);
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

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-list-tablet-xl.png`);
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

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-list-desktop.png`);
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

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-list-desktop-xl.png`);
}

function getDocumentsCategoriesListByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`documents-categories-list`);
}

// function getDocumentsCategoryCardByTestId({
//   page,
// }: {
//   page: Page
// }) {
//   return page.getByTestId(`documents-category-card`);
// }
