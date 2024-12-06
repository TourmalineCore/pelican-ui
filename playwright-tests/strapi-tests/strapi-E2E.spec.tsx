// tests.ts
import { test } from '@playwright/test';
import {
  createNews,
  editNews,
  deleteNews,
  checkNewsDeletion,
  verifyNewsUpdated,
  register,
  authenticate,
} from '../helpers';

test.describe(`Create, Edit, and Check News`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(`http://pelican.local.tourmalinecore.internal:40110/cms/admin/`);
    await page.waitForTimeout(3000);
    const elementLocator = await page.getByText(`Credentials are only used to authenticate in Strapi. All saved data will be stored in your database.`);

    const elementExists = await elementLocator.isVisible();
    console.log(elementLocator);
    console.log(elementExists);

    if (elementExists) {
      await register({
        page,
        firstName: `Test`,
        lastName: `Testovich`,
        email: `admin@test.ru`,
        password: `Admin1234`,
        confirmPassword: `Admin1234`,
      });
    } else {
      await authenticate(page, `admin@test.ru`, `Admin1234`);
    }
  });

  test(`Create, Edit, and Verify News Deletion`, async ({
    page,
  }) => {
    await createNews(page, `Тестовый заголовок`, `На фотографии изображен амурский тигр!`, `./playwright-tests/strapi-tests/fixtures/Image_tiger1.png`);

    await verifyNewsUpdated(page, `Тестовый заголовок`, `На фотографии изображен амурский тигр!`);

    await editNews(page, `Отредактированный заголовок`, `Тут вы можете увидеть тигра амурского.`);

    await verifyNewsUpdated(page, `Отредактированный заголовок`, `Тут вы можете увидеть тигра амурского.`);

    await deleteNews(page);

    await checkNewsDeletion(page, [`Тестовый заголовок`, `Отредактированный заголовок`], [`На фотографии изображен амурский тигр!`, `Тут вы можете увидеть тигра амурского.`]);
  });
});
