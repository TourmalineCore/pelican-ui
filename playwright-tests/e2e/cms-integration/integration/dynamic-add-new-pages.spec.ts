import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "@/playwright-tests/custom-test";
import { OtherPage } from "@/src/common/api-types";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { E2E_UI_NAME_PREFIX } from "../helpers/cms-integration-helpers";

const OTHER_PAGE_API_ENDPOINT = `${getStrapiURL()}/other-pages`;
const OTHER_PAGE_TITLE = `${E2E_UI_NAME_PREFIX} Услуги`;

test.describe(`Dynamic addition of new pages`, () => {
  test.afterEach(async () => {
    await cleanupOtherPageByTitle({
      title: OTHER_PAGE_TITLE,
    });
  });

  test(`Dynamic addition of new pages`, async ({
    goto,
    page,
  }: {
    page: Page;
    goto: CustomTestFixtures['goto'];
  }) => {
    await page.goto(process.env.API_URL || `http://localhost:1337`);

    await page.locator(`input[name=email]`)
      .fill(`admin@init-strapi-admin.strapi.io`);

    await page.locator(`input[name=password]`)
      .fill(`admin`);

    await page.getByText(`Login`)
      .click();

    await page.getByText(`Content Manager`)
      .click();

    await page.getByRole(`link`, {
      name: `Другие страницы`,
    })
      .click();

    await page.getByText(`Create new entry`)
      .first()
      .click();

    await page.locator(`input[name=title]`)
      .fill(OTHER_PAGE_TITLE);

    await page.getByRole(`button`, {
      name: `Add a component to blocks`,
    })
      .click();

    await page.getByRole(`button`, {
      name: `Категории`,
      exact: true,
    })
      .click();

    await page.getByText(`Категории`, {
      exact: true,
    })
      .click();

    await page.locator(`input[name='blocks.0.title']`)
      .fill(`Test category`);

    await page.getByRole(`button`, {
      name: `Publish`,
    })
      .click();

    await page.waitForTimeout(1500);

    await goto(`/other`);

    await page.getByText(OTHER_PAGE_TITLE)
      .click();

    await page.getByText(`Test category`)
      .isVisible();
  });
});

async function cleanupOtherPageByTitle({
  title,
}: {
  title: string;
}) {
  try {
    const otherPageResponse = (await axios.get(`${OTHER_PAGE_API_ENDPOINT}?populate=*`)).data;

    const testOtherPage = otherPageResponse.data.find((item: OtherPage) => item.title === title);

    if (testOtherPage) {
      const response = await axios.delete(`${OTHER_PAGE_API_ENDPOINT}/${testOtherPage.documentId}`);

      await expect(response.status, `Other page should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    }
  } catch (error) {
    throw new Error(`Failed to delete test other page: ${(error as AxiosError).message}`);
  }
}
