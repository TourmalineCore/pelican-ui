import { test, expect } from '@playwright/test';
import { gotoPage } from '../helpers';

test.describe(`Create a news via admin panel and check its creation via API response`, () => {
  test.beforeEach(async ({
    page,
  }) => {
    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/`,
    });
  });

  test(`Create a news`, async ({
    page,
  }) => {
    await page
      .getByRole(`textbox`, {
        name: `email`,
      })
      .fill(`admin@test.ru`);

    await page.getByRole(`textbox`, {
      name: `password`,
    })
      .fill(`Admin1234`);

    await page.getByText(`Remember me`)
      .click();

    await page.getByText(`Login`)
      .click();

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
      .fill(`Тестовый заголовок`);

    await page.locator(`#description`)
      .fill(`На фотографии изображен амурский тигр!`);

    await page.getByText(`Click to add an asset or drag and drop one in this area`)
      .click();

    await page.getByRole(`button`, {
      name: `Add new assets`,
    })
      .click();

    await page.getByRole(`textbox`, {
      name: `files`,
    })
      .setInputFiles(`./playwright-tests/strapi-tests/fixtures/Image_tiger1.png`);

    await page.getByText(`Upload 1 asset to the library`)
      .click();

    await page.getByText(`Finish`)
      .click();

    await page.locator(`.ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline ck-blurred`)
      .fill(`На фотографии изображен амурский тигр!`);

    await page.getByText(`Save`)
      .click();

    await page.getByText(`Publish`)
      .click();

    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/news?pageSize=6`,
    });

    const newsCards = await page.$$(`li.news-list_card`);

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
      .toBe(`Тестовый заголовок`);

    const description = await firstNewsCard.$(`.card_description`);
    expect(await description.textContent())
      .toBe(`На фотографии изображен амурский тигр!`);

    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/content-manager/collection-types/api::news-collection.news-collection?page=1&pageSize=10&sort=title:ASC`,
    });

    await page.locator(`#main-content > div.sc-bdvvtL.fKbxvN > div > div.sc-bdvvtL.sc-hGPBjI.ljJTtL.jGwKXo > div > div > table > tbody > tr > td:nth-child(8) > div > span:nth-child(1) > a`)
      .click();

    await page.getByRole(`textbox`, {
      name: `title`,
    })
      .fill(`Отредактированный заголовок`);

    await page.locator(`#description`)
      .fill(`Тут вы можете увидеть тигра амурского.`);

    await page.getByText(`Save`)
      .click();

    await page.getByText(`Publish`)
      .click();

    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/news?pageSize=6`,
    });

    const newsCards = await page.$$(`li.news-list_card`);

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
      .toBe(`Отредактированный заголовок`);

    const description = await firstNewsCard.$(`.card_description`);
    expect(await description.textContent())
      .toBe(`Тут вы можете увидеть тигра амурского.`);

    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/cms/admin/content-manager/collection-types/api::news-collection.news-collection?page=1&pageSize=10&sort=title:ASC`,
    });

    await page.check(`//*[@id="main-content"]/div[3]/div/div[2]/div/div/table/tbody/tr/td[1]/div/input`);

    await page.getByText(`Delete`)
      .click();
    await page.getByText(`Confirm`)
      .click();

    await gotoPage({
      page,
      url: `http://pelican.local.tourmalinecore.internal:40110/news?pageSize=6`,
    });

    // Выполняем GET запрос на нужный URL
    const response = await page.goto(`
http://pelican.local.tourmalinecore.internal:40110/_next/data/J96IRHdXP1_K0yksdS1tA/news.json?pageSize=12`); // Укажите сюда ваш URL
    const jsonResponse = await response.json();

    // Проверяем карточки новостей
    const {
      cards,
    } = jsonResponse.news;

    // Условия проверки
    const invalidTitles = [`Тестовый заголовок`, `Отредактированный заголовок`];
    const invalidDescriptions = [`На фотографии изображен амурский тигр!`, `Тут вы можете увидеть тигра амурского.`];

    const titleCheck = cards.every((card) => !invalidTitles.includes(card.title));
    const descriptionCheck = cards.every((card) => !invalidDescriptions.includes(card.description));

    // Выводим результат
    if (titleCheck && descriptionCheck) {
      console.log(`Все проверки прошли успешно. Новости не содержат удаленных заголовков или описаний.`);
    } else {
      console.log(`Некоторые новости содержат удаленные заголовки или описания.`);
    }
  });
});
