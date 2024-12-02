import { test } from '@playwright/test';
import { gotoPage } from '../helpers';

test.describe(`Create a post via admin panel and check its creation via API response`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal/cms/admin/`,
    });
  });

  test(`Create a post`, async ({
    page,
  }) => {
    await page
      .getByRole(`textbox`, {
        name: `email`,
      })
      .fill(`sbagdasaryan@tourmalinecore.com`);

    await page.getByRole(`textbox`, {
      name: `password`,
    })
      .fill(`Admin123`);
    await page.getByText(`Remember me`)
      .click();
    await page.getByText(`Login`)
      .click();
  });
});
