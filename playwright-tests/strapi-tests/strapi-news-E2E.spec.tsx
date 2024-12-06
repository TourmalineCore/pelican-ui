import { expect, Page, test } from '@playwright/test';
import {
  authenticate,
  clickByCheckboxAndDeleteWithConfirm,
  deleteImage,
  register,
  uploadImage,
} from '../strapi-helpers';

test.describe(`Create, Edit, and Check News`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await page.goto(`http://pelican.local.tourmalinecore.internal:40110/cms/admin/`);

    const registrationTitle = await page.getByText(`Credentials are only used to authenticate in Strapi. All saved data will be stored in your database.`);

    const isRegistrationPage = await registrationTitle.isVisible();

    if (isRegistrationPage) {
      await register({
        page,
      });
    } else {
      await authenticate({
        page,
      });
    }
  });

  test.afterEach(async ({
    page,
  }) => {
    await deleteNews({
      page,
    });

    await deleteImage({
      page,
    });
  });

  test(`Create, Edit, and Verify News Deletion`, async ({
    page,
  }) => {
    const title = `В зоопарке появился амурский тигр`;
    const description = `На фотографии изображен амурский тигр!`;
    const innerContent = `В зоопарке появился амурский тигр, приходите посмотреть!`;

    await createNews({
      page,
      title,
      description,
      innerContent,
      imagePath: `./playwright-tests/strapi-tests/fixtures/tiger.png`,
    });

    await checkNewsPageOnFront({
      page,
      title,
      description,
      innerContent,
    });

    // await verifyNewsUpdated(page, `Тестовый заголовок`, `На фотографии изображен амурский тигр!`);

    // await editNews({
    //   page,
    //   newTitle: `Отредактированный заголовок`,
    //   newDescription: `Тут вы можете увидеть тигра амурского.`,
    // });

    // await verifyNewsUpdated(page, `Отредактированный заголовок`, `Тут вы можете увидеть тигра амурского.`);

    // await checkNewsDeletion(page, [`Тестовый заголовок`, `Отредактированный заголовок`], [`На фотографии изображен амурский тигр!`, `Тут вы можете увидеть тигра амурского.`]);
  });
});

async function createNews({
  page,
  title,
  description,
  innerContent,
  imagePath,
}: {
  page: Page,
  title: string,
  description: string,
  innerContent: string,
  imagePath: string
}) {
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
    .fill(title);

  await page.locator(`#description`)
    .fill(description);

  await uploadImage({
    page,
    imagePath,
  });

  await page.locator(`.ck-content`)
    .fill(innerContent);

  await page.getByText(`Save`)
    .click();

  await page.getByText(`Publish`)
    .click();
}

async function checkNewsPageOnFront({
  page,
  title,
  description,
  innerContent,
}: {
  page: Page,
  title: string,
  description: string,
  innerContent: string
}) {
  await page.goto(`http://localhost:3000/news`);

  await expect(page.getByText(title))
    .toBeVisible();

  await expect(page.getByText(description))
    .toBeVisible();

  await page.getByTestId(`news-list-card`)
    .first()
    .click();

  await expect(page.getByText(innerContent))
    .toBeVisible();
}

async function deleteNews({
  page,
}: {
  page: Page
}) {
  await page.goto(
    `http://pelican.local.tourmalinecore.internal:40110/cms/admin/content-manager/collection-types/api::news-collection.news-collection`,
  );

  await clickByCheckboxAndDeleteWithConfirm({
    page,
  });
}
