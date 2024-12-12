
import { Page } from "@playwright/test";

export async function authenticate({
  page,
}: {
  page: Page,
}) {
  await page.getByRole(`textbox`, {
    name: `email`,
  })
    .fill(`admin@init-strapi-admin.strapi.io`);

  await page.getByRole(`textbox`, {
    name: `password`,
  })
    .fill(`admin`);

  await page.getByText(`Login`)
    .click();
}

export async function enableApi({
  page,
}: {
  page: Page
}) {
  await page.goto(`http://pelican.local.tourmalinecore.internal:40110/cms/admin/settings/users-permissions/roles/2`);

  await page.getByText(`News-collection`)
    .first()
    .click();

  await page.getByText(`find`, {
    exact: true,
  })
    .check();

  await page.getByText(`findOne`, {
    exact: true,
  })
    .check();

  await page.getByText(`Save`)
    .click();
}

export async function uploadImage({
  page,
  imagePath,
}: {
  page: Page
  imagePath: string,
}) {
  await page.getByText(`Click to add an asset or drag and drop one in this area`)
    .click();

  await page.getByRole(`button`, {
    name: `Add more assets`,
  })
    .click();

  await page.getByRole(`textbox`, {
    name: `files`,
  })
    .setInputFiles(imagePath);

  await page.getByText(`Upload 1 asset to the library`)
    .click();

  await page.getByRole(`button`, {
    name: `Finish`,
  })
    .click();
}

export async function deleteImages({
  page,
}: {
  page: Page
}) {
  await page.goto(`http://pelican.local.tourmalinecore.internal:40110/cms/admin/plugins/upload`);

  await clickByCheckboxAndDeleteWithConfirm({
    page,
  });
}

export async function clickByCheckboxAndDeleteWithConfirm({
  page,
}: {
  page: Page
}) {
  await page.getByRole(`checkbox`)
    .first()
    .check();

  await page.getByRole(`button`, {
    name: `Delete`,
  })
    .first()
    .click();

  await page.getByRole(`button`, {
    name: `Confirm`,
  })
    .click();
}
