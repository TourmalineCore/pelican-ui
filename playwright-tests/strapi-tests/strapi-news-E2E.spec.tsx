import { expect, Page, test } from '@playwright/test';
import {
  authenticate,
  clickByCheckboxAndDeleteWithConfirm,
  deleteImage,
  enableApi,
  register,
  uploadImage,
} from '../strapi-helpers';
import { gotoPage } from '../helpers';

test.describe(`News E2E tests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/`,
    });

    const isRegistrationPage = await page.getByRole(`textbox`, {
      name: `First name`,
    })
      .isVisible();

    if (isRegistrationPage) {
      await register({
        page,
      });
    } else {
      await authenticate({
        page,
      });
    }

    await enableApi({
      page,
    });
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

  test(`
    GIVEN strapi admin panel and frontend UI without news
    WHEN user creates and publishes a news item
    SHOULD news is displayed on the frontend UI with all fields
    `, async ({
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
  await gotoPage({
    page,
    url: `http://localhost:3000/news`,
  });

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
  await gotoPage({
    page,
    url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/content-manager/collection-types/api::news-collection.news-collection`,
  });

  await clickByCheckboxAndDeleteWithConfirm({
    page,
  });
}
