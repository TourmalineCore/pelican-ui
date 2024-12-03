import { test } from '@playwright/test';
import { gotoPage } from '../helpers';

test.describe(`Create a news via admin panel and check its creation via API response`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal/cms/admin/`,
    });
  });

  test(`Create a news`, async ({
    page,
  }) => {
    await page
      .getByRole(`textbox`, {
        name: `email`,
      })
      .fill(`admin@test.ru`);

    await page.getByRole(`textbox`, {
      name: `password`,
    })
      .fill(`Admin1234`);

    await page.getByText(`Remember me`)
      .click();

    await page.getByText(`Login`)
      .click();

    await page.getByText(`Content Manager`)
      .click();

    await page.getByText(`Новости`)
      .click();

    await page.getByText(`Create new entry`)
      .first()
      .click();

    await page.getByRole(`textbox`, {
      name: `title`,
    })
      .fill(`Тестовый заголовок`);

    await page.locator(`#description`)
      .fill(`Тестовый заголовок`);

    await page.getByText(`Save`)
      .click();

    await page.getByText(`Publish`)
      .click();

    // await page.getByText(`Click to add an asset`)
    //   .click();

    // await page.getByRole(`button`, {
    //   name: `Add new assets`,
    // })
    //   .click();

    // await page.getByRole(`textbox`, {
    //   name: `files`,
    // })
    //   .setInputFiles(path.join(__dirname, `employee.png`));
  });
});
