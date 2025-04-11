import {
  gotoPage,
  hideCookie,
  hideHeader,
  setViewportSize,
} from '@/playwright-tests/helpers';
import { AppRoute, Breakpoint, BreakpointName } from '@/src/common/enum';
import { MOCK_DOCUMENTS_CATEGORIES } from '@/src/common/mocks/collections-mock/documents-categories-collection-mock';
import { test, expect, Page } from '@playwright/test';

test.describe(`DocumentsListComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `${AppRoute.DOCUMENTS}/${MOCK_DOCUMENTS_CATEGORIES[0].slug}`,
    });

    await hideHeader({
      page,
    });

    await hideCookie({
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
  page: Page;
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
  page: Page;
}) {
  await setViewportSize({
    page,
    height: 850,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-${BreakpointName.MOBILE}.png`);
}

async function mobileClickedTest({
  page,
}: {
  page: Page;
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
    .toHaveScreenshot(`documents-list-${BreakpointName.MOBILE}-clicked.png`);
}

async function tabletTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 822,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-${BreakpointName.TABLET}.png`);
}

async function tabletClickedTest({
  page,
}: {
  page: Page;
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
    .toHaveScreenshot(`documents-list-${BreakpointName.TABLET}-clicked.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1040,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-${BreakpointName.TABLET_XL}.png`);
}

async function tabletXlClickedTest({
  page,
}: {
  page: Page;
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
    .toHaveScreenshot(`documents-list-${BreakpointName.TABLET_XL}-clicked.png`);
}

async function desktopTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 999,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-${BreakpointName.DESKTOP}.png`);
}

async function desktopClickedTest({
  page,
}: {
  page: Page;
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
    .toHaveScreenshot(`documents-list-${BreakpointName.DESKTOP}-clicked.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page;
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1408,
  });

  await expect(getDocumentsListByTestId({
    page,
  }))
    .toHaveScreenshot(`documents-list-${BreakpointName.DESKTOP_XL}.png`);
}

async function desktopXlClickedTest({
  page,
}: {
  page: Page;
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
    .toHaveScreenshot(`documents-list-${BreakpointName.DESKTOP_XL}-clicked.png`);
}

function getDocumentsListByTestId({
  page,
}: {
  page: Page;
}) {
  return page.getByTestId(`documents`);
}

async function openDocumentsListPopupAccordions({
  page,
}: {
  page: Page;
}) {
  const allAccordions = await page.getByTestId(`accordion-trigger`)
    .all();

  for (const button of allAccordions) {
    // eslint-disable-next-line no-await-in-loop
    await button.click();
  }
}
