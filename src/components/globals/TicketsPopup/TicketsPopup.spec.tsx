import { AppRoute } from '@/src/common/enum';
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

function getTicketsPopupByTestId({
  page,
}: {
  page: Page
}) {
  return page.getByTestId(`tickets-popup`);
}
