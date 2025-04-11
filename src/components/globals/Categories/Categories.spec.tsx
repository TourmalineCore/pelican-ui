/* eslint-disable no-await-in-loop */
import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import {
  AppRoute,
  BlockTypes,
  Breakpoint,
  BreakpointName,
} from '@/src/common/enum';
import { MOCK_DOCUMENTS_CATEGORIES } from '@/src/common/mocks/collections-mock/documents-categories-collection-mock';
import { test, expect, Page } from '@playwright/test';

test.describe(`CategoriesListComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.INTERNAL_TEST_PAGE}/${BlockTypes.SHARED_CATEGORIES}`,
    });

    await hideHeader({
      page,
    });

    await hideCookie({
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
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await page.getByTestId(`category`)
    .nth(0)
    .click();

  await page.waitForURL(`**${AppRoute.DOCUMENTS}/${MOCK_DOCUMENTS_CATEGORIES[0].slug}`);

  expect(page.url())
    .toBe(`http://localhost:3000${AppRoute.DOCUMENTS}/${MOCK_DOCUMENTS_CATEGORIES[0].slug}`);

  await page.goBack();

  await gotoPage({
    page,
    url: `${AppRoute.DOCUMENTS}/100`,
  });
  await page.getByTestId(`not-found`);
}

async function mobileTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
  });

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-${BreakpointName.MOBILE}.png`);
}

async function tabletTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
  });

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-${BreakpointName.TABLET}.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
  });

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-${BreakpointName.TABLET_XL}.png`);
}

async function desktopTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
  });

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-${BreakpointName.DESKTOP}.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
  });

  await expect(getDocumentsCategoriesListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-categories-${BreakpointName.DESKTOP_XL}.png`);
}

function getDocumentsCategoriesListByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(`categories`);
}
