
import { Page } from "@playwright/test";

const EMAIL = `admin@test.ru`;
const PASSWORD = `Admin1234`;

export async function register({
  page,
}: {
  page: Page
}) {
  await page.getByRole(`textbox`, {
    name: `First name`,
  })
    .fill(`Test`);

  await fillEmailInput({
    page,
  });

  await getPasswordInput({
    page,
  })
    .first()
    .fill(PASSWORD);

  await (getPasswordInput({
    page,
  }))
    .last()
    .fill(PASSWORD);

  await page.getByRole(`button`, {
    name: `Let's start`,
  })
    .click();
}

export async function authenticate({
  page,
}: {
  page: Page,
}) {
  await fillEmailInput({
    page,
  });

  await getPasswordInput({
    page,
  })
    .fill(PASSWORD);

  await page.getByText(`Login`)
    .click();
}

function getPasswordInput({
  page,
}: {
  page: Page
}) {
  return page.getByRole(`textbox`, {
    name: `password`,
  });
}

async function fillEmailInput({
  page,
}: {
  page: Page
}) {
  await page.getByRole(`textbox`, {
    name: `email`,
  })
    .fill(EMAIL);
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
