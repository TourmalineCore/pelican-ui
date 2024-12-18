import { expect, Page, test } from '@playwright/test';
import { authenticate, clickByCheckboxAndDeleteWithConfirm } from './strapi-helpers';
import { gotoPage } from '../helpers';

// Todo skipped because it is not configured in the pipeline
test.describe.skip(`Documents Categories integration tests`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/`,
    });

    await authenticate({
      page,
    });
  });

  test.afterEach(async ({
    page,
  }) => {
    await deleteDocumentsCategories({
      page,
    });
  });

  test(
    `
    GIVEN strapi admin panel without user
    WHEN user creates and publishes a documents category item
    SHOULD display news on the frontend UI with all fields
    `,
    newsIntegrationTest,
  );
});

async function newsIntegrationTest({
  page,
}: {
  page: Page
}) {
  const title = `Тестовая категория`;

  await createDocumentsCategory({
    page,
    title,
  });

  await checkDocumentsCategoriesPageOnFront({
    page,
    title,
  });
}

async function createDocumentsCategory({
  page,
  title,
}: {
  page: Page,
  title: string,
}) {
  await page.getByText(`Content Manager`)
    .click();

  await page.getByText(`Категории документов`)
    .click();

  await page.getByText(`Create new entry`)
    .first()
    .click();

  await page.getByRole(`textbox`, {
    name: `title`,
  })
    .fill(title);

  await page.getByText(`Save`)
    .click();

  await page.getByText(`Publish`)
    .click();
}

async function checkDocumentsCategoriesPageOnFront({
  page,
  title,
}: {
  page: Page,
  title: string,
}) {
  await gotoPage({
    page,
    url: `http://localhost:3000/documents`,
  });

  await expect(page.getByText(title))
    .toBeVisible();
}

async function deleteDocumentsCategories({
  page,
}: {
  page: Page
}) {
  await gotoPage({
    page,
    url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/content-manager/collection-types/api::documents-categories.documents-categories`,
  });

  await clickByCheckboxAndDeleteWithConfirm({
    page,
  });
}
