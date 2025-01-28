import { gotoPage, hideHeader, setViewportSize } from '@/playwright-tests/helpers';
import { AppRoute, Breakpoint } from '@/src/common/enum';
import { test, expect, Page } from '@playwright/test';

test.describe(`DocumentsListComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.DOCUMENTS}/1`,
    });

    await hideHeader({
      page,
    });
  });

  test(`TabActionTest`, tabAction);

  test(`MobileTest`, mobileTest);

  test(`MobileClickedTest`, mobileClickedTest);

  test(`TabletTest`, tabletTest);

  test(`TabletClickedTest`, tabletClickedTest);

  test(`TabletXlTest`, tabletXlTest);

  test(`TabletXlClickedTest`, tabletXlClickedTest);

  test(`DesktopTest`, desktopTest);

  test(`DesktopClickedTest`, desktopClickedTest);

  test(`DesktopXlTest`, desktopXlTest);

  test(`DesktopXlClickedTest`, desktopXlClickedTest);
});

async function tabAction({
  page,
}: {
  page: Page,
}) {
  await page.locator(`li`, {
    hasText: `2024`,
  })
    .click();

  await expect(page.locator(`li`, {
    hasText: `Протокол закупки №7731263`,
  }))
    .toBeVisible();
}

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    height: 850,
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
    height: 1854,
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
    height: 822,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-tablet.png`);
}

async function tabletClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 1446,
  });

  openDocumentsListPopupAccordions({
    page,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-tablet-clicked.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1040,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-tablet-xl.png`);
}

async function tabletXlClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1715,
  });

  openDocumentsListPopupAccordions({
    page,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-tablet-xl-clicked.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 999,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-desktop.png`);
}

async function desktopClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 1767,
  });

  openDocumentsListPopupAccordions({
    page,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-desktop-clicked.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1408,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-desktop-xl.png`);
}

async function desktopXlClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 2452,
  });

  openDocumentsListPopupAccordions({
    page,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-desktop-xl-clicked.png`);
}

function getDocumentsListByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`documents`);
}

async function openDocumentsListPopupAccordions({
  page,
}: {
  page: Page
}) {
  const allAccordions = await page.getByTestId(`accordion-trigger`)
    .all();

  for (const button of allAccordions) {
    // eslint-disable-next-line no-await-in-loop
    await button.click();
  }
}
