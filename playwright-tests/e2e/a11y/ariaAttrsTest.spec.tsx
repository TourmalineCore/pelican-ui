import { AppRoute } from '@/src/common/enum';
import { gotoPage } from '@/playwright-tests/global-helpers';
import { test, Page, expect } from '@playwright/test';

test.describe(`ARIA Labels`, () => {
  test(`HomePageTest`, HomepageTest);
});

async function HomepageTest({
  page,
}: {
  page: Page;
}) {
  await gotoPage({
    page,
    url: AppRoute.HOME,
  });

  await expect(page.getByTestId(`header-popup-button`))
    .toHaveAttribute(`aria-label`, `Открыть меню`);

  await page.getByTestId(`header-popup-button`)
    .click();

  await expect(page.getByTestId(`header-popup-button`))
    .toHaveAttribute(`aria-label`, `Закрыть меню`);

  await page.getByTestId(`header-popup-ticket-button`)
    .click();

  await expect(page.getByTestId(`tickets-popup-close-button`))
    .toHaveAttribute(`aria-label`, `Закрыть модальное окно с билетами`);
}
