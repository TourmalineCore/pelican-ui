/* eslint-disable no-await-in-loop */
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { gotoPage, hideHeader, setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`DocumentsListComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.DOCUMENTS}/3`,
    });

    await hideHeader({
      page,
    });
  });

  test(`MobileTest`, mobileTest);

  test(`MobileClickedTest`, mobileClickedTest);

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
  await setViewportSize({
    page,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-mobile.png`);
}

async function mobileClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  openDocumentsListPopupAccordions({
    page,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-mobile-clicked.png`);
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

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-tablet.png`);
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

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-tablet-xl.png`);
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

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-desktop.png`);
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

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-desktop-xl.png`);
}

function getDocumentsListByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`documents-list`);
}

async function openDocumentsListPopupAccordions({
  page,
}: {
  page: Page
}) {
  // for (.filter({hasText: `Подробнее`,})

  await page.getByTestId(`accordion-trigger`)
    .filter({
      hasText: `Подробнее`,
    })
    .first()
    .click();
}
