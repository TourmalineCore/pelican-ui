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
    height: 829,
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
    height: 1600,
  });

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

  await expect(getTicketsPopupByTestId({
    page,
  }))
    .toHaveScreenshot(`tickets-popup-clicked-tablet.png`);
}

function getTicketsPopupByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`tickets-popup`);
}
