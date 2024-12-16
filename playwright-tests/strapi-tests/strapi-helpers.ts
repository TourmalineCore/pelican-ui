
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
  await page.getByText(`Media Library`)
    .click();

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
