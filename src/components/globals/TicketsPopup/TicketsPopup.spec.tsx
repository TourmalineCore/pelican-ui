import { AppRoute, Breakpoint } from '@/src/common/enum';
import { setViewportSize } from '@/test/helpers';
import { test, expect, Page } from '@playwright/test';

test.describe(`TicketsPopupComponentTests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(AppRoute.HOME);

    await page.getByTestId(`footer-tickets-popup-button`)
      .click();
  });

  test(`ActionTest`, actionTest);

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

async function actionTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toContainText(`Билеты`);

  await page.getByTestId(`tickets-popup-close-button`)
    .click();

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toBeHidden;
}

async function mobileTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    height: 812,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-mobile.png`);
}

async function mobileClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    height: 1780,
  });

  openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-mobile-clicked.png`);
}

async function tabletTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 781,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-tablet.png`);
}

async function tabletClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET,
    height: 1556,
  });

  openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-tablet-clicked.png`);
}

async function tabletXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 809,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-tablet-xl.png`);
}

async function tabletXlClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.TABLET_XL,
    height: 1747,
  });

  openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-tablet-xl-clicked.png`);
}

async function desktopTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 787,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-desktop.png`);
}

async function desktopClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP,
    height: 1704,
  });

  openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-desktop-clicked.png`);
}

async function desktopXlTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 1080,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-desktop-xl.png`);
}

async function desktopXlClickedTest({
  page,
}: {
  page: Page,
}) {
  await setViewportSize({
    page,
    width: Breakpoint.DESKTOP_XL,
    height: 2170,
  });

  openTicketsPopupAccordions({
    page,
  });

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-desktop-xl-clicked.png`);
}

function getTicketsPopupByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`tickets-popup`);
}

async function openTicketsPopupAccordions({
  page,
}: {
  page: Page
}) {
  await page.getByTestId(`accordion-trigger`)
    .filter({
      hasText: `Подробнее`,
    })
    .click();

  await page.getByTestId(`accordion-trigger`)
    .filter({
      hasText: `Правила посещения`,
    })
    .click();

  await page.getByTestId(`accordion-trigger`)
    .filter({
      hasText: `Возврат билетов`,
    })
    .click();
}
