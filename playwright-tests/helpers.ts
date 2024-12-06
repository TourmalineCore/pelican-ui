import { Breakpoint } from "@/src/common/enum";
import { Page, expect } from "@playwright/test";

export async function gotoPage({
  page,
  url,
}: {
  page: Page,
  url: string
}) {
  await page.goto(url, {
    waitUntil: `networkidle`,
  });
}

export async function setViewportSize({
  page,
  width = Breakpoint.MOBILE,
  height = 768,
}: {
  page: Page,
  width?: number,
  height?: number,
}) {
  await page.setViewportSize({
    width,
    height,
  });
}

export async function hideHeader({
  page,
}: {
  page: Page,
}) {
  await page.getByTestId(`header`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideFooter({
  page,
}: {
  page: Page,
}) {
  await page.getByTestId(`footer`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideTickets({
  page,
}: {
  page: Page,
}) {
  await page.getByTestId(`tickets`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideMap({
  page,
}: {
  page: Page,
}) {
  await page.getByTestId(`map`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function hideTextAndMedia({
  page,
}: {
  page: Page,
}) {
  await page.getByTestId(`text-and-media`)
    .evaluate((element) => element.style.visibility = `hidden`);
}

export async function register({
  page,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}:{
  page: Page
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
}) {
  await page.getByRole(`textbox`, {
    name: `First name`,
  })
    .fill(firstName);

  await page.getByRole(`textbox`, {
    name: `Last name`,
  })
    .fill(lastName);
  await page.getByRole(`textbox`, {
    name: `email`,
  })
    .fill(email);

  await page.getByRole(`textbox`, {
    name: `Password`,
  })
    .fill(password);

  await page.getByRole(`textbox`, {
    name: `Confirm password`,
  })
    .fill(confirmPassword);

  await page.getByText(`Let's start`)
    .click();
}

export async function authenticate(page: Page, email: string, password: string) {
  await page.getByRole(`textbox`, {
    name: `email`,
  })
    .fill(email);
  await page.getByRole(`textbox`, {
    name: `password`,
  })
    .fill(password);
  await page.getByText(`Remember me`)
    .click();
  await page.getByText(`Login`)
    .click();
}

export async function createNews(
  page: Page,
  title: string,
  description: string,
  imagePath: string,
) {
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
  await page.getByText(`Finish`)
    .click();

  await page.getByText(`Save`)
    .click();
  await page.getByText(`Publish`)
    .click();
}

export async function editNews(page: Page, newTitle: string, newDescription: string) {
  await gotoNewsList(page);

  const newsItem = await page.locator(`selector-for-news-item`);
  await newsItem.click();

  await page.getByRole(`textbox`, {
    name: `title`,
  })
    .fill(newTitle);
  await page.locator(`#description`)
    .fill(newDescription);

  await page.getByText(`Save`)
    .click();
  await page.getByText(`Publish`)
    .click();
}

export async function deleteNews(page: Page) {
  await gotoNewsList(page);

  await page.check(`selector-for-checkbox`);
  await page.getByText(`Delete`)
    .click();
  await page.getByText(`Confirm`)
    .click();
}
export async function verifyNewsUpdated(
  page: Page,
  expectedTitle: string,
  expectedDescription: string,
) {
  await gotoNewsList(page);

  const newsCards = await page.$$(`.li.news-list_card`);
  expect(newsCards.length)
    .toBeGreaterThan(0);

  const firstNewsCard = newsCards[0];

  const imageWrapper = await firstNewsCard.$(`.card_image-wrapper`);
  const img = await imageWrapper.$(`img`);
  expect(img)
    .toBeTruthy();
  expect(await img.getAttribute(`src`)).not.toBeNull();

  const title = await firstNewsCard.$(`.card_title`);
  expect(await title.textContent())
    .toBe(expectedTitle);

  const description = await firstNewsCard.$(`.card_description`);
  expect(await description.textContent())
    .toBe(expectedDescription);
}

export async function checkNewsDeletion(page: Page, invalidTitles: string[], invalidDescriptions: string[]) {
  await gotoNewsList(page);

  const response = await page.goto(`http://pelican.local.tourmalinecore.internal:40110/_next/data/J96IRHdXP1_K0yksdS1tA/news.json?pageSize=12`);
  const jsonResponse = await response.json();

  const {
    cards,
  } = jsonResponse.news;

  const titleCheck = cards.every((card) => !invalidTitles.includes(card.title));
  const descriptionCheck = cards.every((card) => !invalidDescriptions.includes(card.description));

  if (titleCheck && descriptionCheck) {
    console.log(`Все проверки прошли успешно. Новости не содержат удаленных заголовков или описаний.`);
  } else {
    console.log(`Некоторые новости содержат удаленные заголовки или описания.`);
  }
}

async function gotoNewsList(page: Page) {
  await page.goto(`http://pelican.local.tourmalinecore.internal:40110/cms/admin/content-manager/collection-types/api::news-collection.news-collection?page=1&pageSize=10&sort=title:ASC`);
}
