import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from '@/playwright-tests/custom-test';

test.describe(`ARIA Labels`, () => {
  test(`HomePageTest`, homepageTest);
});

async function homepageTest({
  page,
  goto,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
}) {
  await goto();

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
