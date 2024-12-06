
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

  await page.getByRole(`textbox`, {
    name: `email`,
  })
    .fill(EMAIL);

  await page.getByRole(`textbox`, {
    name: `Password`,
  })
    .fill(PASSWORD);

  await page.getByRole(`textbox`, {
    name: `Confirm password`,
  })
    .fill(PASSWORD);

  await page.getByText(`Let's start`)
    .click();
}

export async function authenticate({
  page,
}: {
  page: Page,
}) {
  await page.getByRole(`textbox`, {
    name: `email`,
  })
    .fill(EMAIL);

  await page.getByRole(`textbox`, {
    name: `password`,
  })
    .fill(PASSWORD);

  await page.getByText(`Remember me`)
    .click();

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
    name: `Add new assets`,
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

export async function deleteImage({
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

// export async function editNews({
//   page,
//   newTitle,
//   newDescription,
// }: {
//   page: Page,
//   newTitle: string,
//   newDescription: string
// }) {
//   await gotoNewsList(page);

//   const newsItem = await page.locator(`selector-for-news-item`);
//   await newsItem.click();

//   await page.getByRole(`textbox`, {
//     name: `title`,
//   })
//     .fill(newTitle);

//   await page.locator(`#description`)
//     .fill(newDescription);

//   await page.getByText(`Save`)
//     .click();

//   await page.getByText(`Publish`)
//     .click();
// }

// export async function verifyNewsUpdated(
//   page: Page,
//   expectedTitle: string,
//   expectedDescription: string,
// ) {
//   await gotoNewsList(page);

//   const newsCards = await page.$$(`.li.news-list_card`);
//   expect(newsCards.length)
//     .toBeGreaterThan(0);

//   const firstNewsCard = newsCards[0];

//   const imageWrapper = await firstNewsCard.$(`.card_image-wrapper`);
//   const img = await imageWrapper.$(`img`);
//   expect(img)
//     .toBeTruthy();
//   expect(await img.getAttribute(`src`)).not.toBeNull();

//   const title = await firstNewsCard.$(`.card_title`);
//   expect(await title.textContent())
//     .toBe(expectedTitle);

//   const description = await firstNewsCard.$(`.card_description`);
//   expect(await description.textContent())
//     .toBe(expectedDescription);
// }

// export async function checkNewsDeletion(page: Page, invalidTitles: string[], invalidDescriptions: string[]) {
//   await gotoNewsList(page);

//   const response = await page.goto(`http://pelican.local.tourmalinecore.internal:40110/_next/data/J96IRHdXP1_K0yksdS1tA/news.json?pageSize=12`);
//   const jsonResponse = await response.json();

//   const {
//     cards,
//   } = jsonResponse.news;

//   const titleCheck = cards.every((card) => !invalidTitles.includes(card.title));
//   const descriptionCheck = cards.every((card) => !invalidDescriptions.includes(card.description));

//   if (titleCheck && descriptionCheck) {
//     console.log(`Все проверки прошли успешно. Новости не содержат удаленных заголовков или описаний.`);
//   } else {
//     console.log(`Некоторые новости содержат удаленные заголовки или описания.`);
//   }
// }
