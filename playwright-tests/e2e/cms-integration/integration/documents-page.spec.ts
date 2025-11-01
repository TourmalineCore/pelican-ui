import { AppRoute } from "@/src/common/enum";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { DocumentsCategory, Document } from "@/src/common/api-types";
import {
  CustomTestFixtures,
  expect,
  Page,
  test,
} from "@/playwright-tests/custom-test";
import dayjs from 'dayjs';
import { E2E_DRAFT_UI_NAME_PREFIX, E2E_UI_NAME_PREFIX, getFileIdByName } from "../helpers/cms-integration-helpers";

const DOCUMENTS_PAGE_TITLE = `${E2E_UI_NAME_PREFIX} Документы`;
const DOCUMENT_TITLE = `${E2E_UI_NAME_PREFIX} Отчет о деятельности зоопарка`;
const DOCUMENTS_CATEGORY_TITLE = `${E2E_UI_NAME_PREFIX} Отчеты`;

const DOCUMENTS_DRAFT_PAGE_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Документы`;
const DOCUMENT_DRAFT_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Отчет о деятельности зоопарка`;
const DOCUMENTS_DRAFT_CATEGORY_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Отчеты`;

const DOCUMENTS_CATEGORY_API_ENDPOINT = `${getStrapiURL()}/documents-categories`;
const DOCUMENTS_API_ENDPOINT = `${getStrapiURL()}/documents`;
const DOCUMENTS_PAGE_API_ENDPOINT = `${getStrapiURL()}/documents-page`;

const CURRENT_YEAR = dayjs()
  .year();

let documentsCategoryId: number;

test.describe(`Documents page CMS integration tests`, () => {
  test.beforeEach(async () => {
    await cleanupTestDocumentsPage();
  });

  test.afterEach(async () => {
    await cleanupTestDocumentsPage();
  });

  test.describe(`Main scenario tests`, () => {
    test.beforeEach(async () => {
      await cleanupAfterDocumentsPageTest({
        documentTitle: DOCUMENT_TITLE,
        documentsCategoryTitle: DOCUMENTS_CATEGORY_TITLE,
      });

      await setupBeforeDocumentsPageTest({
        documentPageTitle: DOCUMENTS_PAGE_TITLE,
        documentsCategoryTitle: DOCUMENTS_CATEGORY_TITLE,
        documentTitle: DOCUMENT_TITLE,
      });
    });

    test.afterEach(async () => {
      await cleanupAfterDocumentsPageTest({
        documentTitle: DOCUMENT_TITLE,
        documentsCategoryTitle: DOCUMENTS_CATEGORY_TITLE,
      });
    });

    test(
      `
        GIVEN documents page without content
        WHEN call method PUT /api/documents-page
        AND call method POST /api/documents-category
        AND call method POST /api/documents
        AND go to documents page
        SHOULD display documents page content correctly
        AND document category is displayed correctly
        AND document is displayed correctly
      `,
      checkDocumentsPageOnUiTest,
    );
  });

  test.describe(`Draft preview tests`, () => {
    test.beforeEach(async () => {
      await cleanupAfterDocumentsPageTest({
        documentTitle: DOCUMENT_DRAFT_TITLE,
        documentsCategoryTitle: DOCUMENTS_DRAFT_CATEGORY_TITLE,
      });

      await setupBeforeDocumentsPageTest({
        documentPageTitle: DOCUMENTS_DRAFT_PAGE_TITLE,
        documentsCategoryTitle: DOCUMENTS_DRAFT_CATEGORY_TITLE,
        documentTitle: DOCUMENT_DRAFT_TITLE,
        isDraft: true,
      });
    });

    test.afterEach(async () => {
      await cleanupAfterDocumentsPageTest({
        documentTitle: DOCUMENT_DRAFT_TITLE,
        documentsCategoryTitle: DOCUMENTS_DRAFT_CATEGORY_TITLE,
      });
    });

    test(
      `
        GIVEN documents page draft without content
        WHEN call method PUT /api/documents-page
        AND call method POST /api/documents-category
        AND call method POST /api/documents
        AND go to documents page draft
        SHOULD display documents page draft content correctly
        AND document category is displayed correctly
        AND document is displayed correctly
      `,
      checkDocumentsPageDraftPreviewTest,
    );
  });

  test.describe(`Check document sorting test`, () => {
    const firstDocumentTitle = `Отчет`;
    const secondDocumentTitle = `Отчет 1`;

    test.beforeEach(async () => {
      await cleanupTestDocumentCategoryByTitle({
        title: DOCUMENTS_CATEGORY_TITLE,
      });

      await cleanupTestDocuments({
        documentsTitle: [firstDocumentTitle, secondDocumentTitle],
      });

      documentsCategoryId = await createTestDocumentsCategory({
        title: DOCUMENTS_CATEGORY_TITLE,
      });

      await createTestDocuments({
        documents: [
          {
            title: firstDocumentTitle,
            date: `${CURRENT_YEAR}-01-16`,
          },
          {
            title: secondDocumentTitle,
            date: `${CURRENT_YEAR}-01-17`,
          },
        ],
      });
    });

    test.afterEach(async () => {
      await cleanupTestDocumentCategoryByTitle({
        title: DOCUMENTS_CATEGORY_TITLE,
      });

      await cleanupTestDocuments({
        documentsTitle: [firstDocumentTitle, secondDocumentTitle],
      });
    });

    test(
      `
        GIVEN documents page
        WHEN  call method POST /api/documents-category
        AND call method POST /api/documents
        AND go to documents category
        AND documents are sorted correctly
      `,
      checkDocumentSortingTest,
    );
  });

  test.describe(`Check that the documents are displayed only for 5 years`, () => {
    const firstDocumentTitle = `Отчет`;
    const secondDocumentTitle = `Отчет 1`;
    const thirdDocumentTitle = `Отчет 2`;
    const fourthDocumentTitle = `Отчет 3`;
    const fifthDocumentTitle = `Отчет 4`;
    const sixthDocumentTitle = `Отчет 5`;

    test.beforeEach(async () => {
      await cleanupTestDocumentCategoryByTitle({
        title: DOCUMENTS_CATEGORY_TITLE,
      });

      await cleanupTestDocuments({
        documentsTitle: [
          firstDocumentTitle,
          secondDocumentTitle,
          thirdDocumentTitle,
          fourthDocumentTitle,
          fifthDocumentTitle,
          sixthDocumentTitle,
        ],
      });

      documentsCategoryId = await createTestDocumentsCategory({
        title: DOCUMENTS_CATEGORY_TITLE,
      });

      await createTestDocuments({
        documents: [
          {
            title: firstDocumentTitle,
            date: `${CURRENT_YEAR - 5}-01-16`,
          },
          {
            title: secondDocumentTitle,
            date: `${CURRENT_YEAR - 4}-01-17`,
          },
          {
            title: thirdDocumentTitle,
            date: `${CURRENT_YEAR - 3}-01-17`,
          },
          {
            title: fourthDocumentTitle,
            date: `${CURRENT_YEAR - 2}-01-17`,
          },
          {
            title: fifthDocumentTitle,
            date: `${CURRENT_YEAR - 1}-01-17`,
          },
          {
            title: sixthDocumentTitle,
            date: `${CURRENT_YEAR}-01-17`,
          },
        ],
      });
    });

    test.afterEach(async () => {
      await cleanupTestDocumentCategoryByTitle({
        title: DOCUMENTS_CATEGORY_TITLE,
      });

      await cleanupTestDocuments({
        documentsTitle: [
          firstDocumentTitle,
          secondDocumentTitle,
          thirdDocumentTitle,
          fourthDocumentTitle,
          fifthDocumentTitle,
          sixthDocumentTitle,
        ],
      });
    });

    test(
      `
        GIVEN documents page
        WHEN call method POST /api/documents-category
        AND call method POST /api/documents
        AND go to documents category
        AND documents are filtering correctly
      `,
      checkDocumentFilteringByYearTest,
    );
  });
});

async function checkDocumentFilteringByYearTest({
  page,
  goto,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
}) {
  await goto(AppRoute.DOCUMENTS);

  await page.getByText(DOCUMENTS_CATEGORY_TITLE)
    .click();

  await page.waitForURL(`${AppRoute.DOCUMENTS}/**`);

  for (let i = 0; i < 5; i++) {
    // eslint-disable-next-line no-await-in-loop
    await expect(page.locator(`body`))
      .toContainText(String(CURRENT_YEAR - i));
  }

  await expect(page.locator(`body`))
    .not
    .toContainText(String(CURRENT_YEAR - 5));
}

async function checkDocumentSortingTest({
  page,
  goto,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
}) {
  await goto(AppRoute.DOCUMENTS);

  await page.getByText(DOCUMENTS_CATEGORY_TITLE)
    .click();

  await page.waitForURL(`${AppRoute.DOCUMENTS}/**`);

  await expect(page.getByTestId(`document-card`)
    .first())
    .toContainText(`17.01.${CURRENT_YEAR}`);
}

async function checkDocumentsPageDraftPreviewTest({
  page,
  gotoWithDraftPreviewMode,
}: {
  page: Page;
  gotoWithDraftPreviewMode: CustomTestFixtures['gotoWithDraftPreviewMode'];
}) {
  await gotoWithDraftPreviewMode({
    slug: AppRoute.DOCUMENTS.slice(1),
  });

  await checkDocumentPageContent({
    page,
    documentsPageTitle: DOCUMENTS_DRAFT_PAGE_TITLE,
    documentsCategoryTitle: DOCUMENTS_DRAFT_CATEGORY_TITLE,
    documentsTitle: DOCUMENT_DRAFT_TITLE,
  });
}

async function checkDocumentsPageOnUiTest({
  page,
  goto,
}: {
  page: Page;
  goto: CustomTestFixtures['goto'];
}) {
  await goto(AppRoute.DOCUMENTS);

  await checkDocumentPageContent({
    page,
    documentsPageTitle: DOCUMENTS_PAGE_TITLE,
    documentsCategoryTitle: DOCUMENTS_CATEGORY_TITLE,
    documentsTitle: DOCUMENT_TITLE,
  });
}

async function checkDocumentPageContent({
  page,
  documentsPageTitle,
  documentsCategoryTitle,
  documentsTitle,
}: {
  page: Page;
  documentsPageTitle: string;
  documentsCategoryTitle: string;
  documentsTitle: string;
}) {
  await expect(page.getByText(documentsPageTitle), `Documents page title should be visible`)
    .toBeVisible();

  await expect(page.getByText(documentsCategoryTitle), `Documents category title should be visible`)
    .toBeVisible();

  await page.getByText(documentsCategoryTitle)
    .click();

  await page.waitForURL(`${AppRoute.DOCUMENTS}/**`);

  await expect(page.getByText(documentsTitle), `Document title should be visible`)
    .toBeVisible();
}

async function setupBeforeDocumentsPageTest({
  documentsCategoryTitle,
  documentTitle,
  documentPageTitle,
  isDraft = false,
}: {
  documentsCategoryTitle: string;
  documentTitle: string;
  documentPageTitle: string;
  isDraft?: boolean;
}) {
  documentsCategoryId = await createTestDocumentsCategory({
    title: documentsCategoryTitle,
    isDraft,
  });

  await createTestDocuments({
    documents: [
      {
        title: documentTitle,
        isDraft,
      },
    ],
  });

  await updateTestDocumentsPage({
    title: documentPageTitle,
    isDraft,
  });
}

async function cleanupAfterDocumentsPageTest({
  documentTitle,
  documentsCategoryTitle,
}: {
  documentTitle: string;
  documentsCategoryTitle: string;
}) {
  await cleanupTestDocuments({
    documentsTitle: [documentTitle],
  });

  await cleanupTestDocumentCategoryByTitle({
    title: documentsCategoryTitle,
  });
}

async function updateTestDocumentsPage({
  title,
  isDraft = false,
}: {
  title: string;
  isDraft?: boolean;
}) {
  try {
    const response = await axios.put(`${DOCUMENTS_PAGE_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        title,
      },
    });

    await expect(response.status, `Documents page should be updated with status 200`)
      .toEqual(HttpStatusCode.Ok);
  } catch (error) {
    throw new Error(`Failed to update test documents page: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestDocumentsPage() {
  try {
    const response = await axios.delete(`${DOCUMENTS_PAGE_API_ENDPOINT}`);

    await expect(response.status, `Documents page should be deleted with status 204`)
      .toEqual(HttpStatusCode.NoContent);
  } catch (error) {
    throw new Error(`Failed to delete test documents page: ${(error as AxiosError).message}`);
  }
}

async function createTestDocuments({
  documents,
}: {
  documents: {
    title: string;
    date?: string;
    isDraft?: boolean;
  }[];
}) {
  try {
    documents.forEach(async ({
      title,
      date,
      isDraft,
    }) => {
      const response = await axios.post(`${DOCUMENTS_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
        data: {
          title,
          ...(date && {
            date,
          }),
          files: [
            await getFileIdByName(
              {
                name: `[E2E-SMOKE]-new-document.pdf`,
              },
            ),
          ],
          category: documentsCategoryId,
        },
      });

      await expect(response.status, `Document should be created with status 201`)
        .toEqual(HttpStatusCode.Created);
    });
  } catch (error) {
    throw new Error(`Failed to create test document: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestDocuments({
  documentsTitle,
}: {
  documentsTitle: string[];
}) {
  try {
    const documentsResponse = (await axios.get(`${DOCUMENTS_API_ENDPOINT}?populate=*&status=draft`)).data;

    documentsTitle.forEach(async (documentTitle) => {
      const testDocument = documentsResponse.data
        .find((item: Document) => item.title === documentTitle);

      if (testDocument) {
        const response = await axios.delete(`${DOCUMENTS_API_ENDPOINT}/${testDocument.documentId}`);

        await expect(response.status, `Document should be deleted with status 204`)
          .toEqual(HttpStatusCode.NoContent);
      }
    });
  } catch (error) {
    throw new Error(`Failed to delete test document: ${(error as AxiosError).message}`);
  }
}

async function createTestDocumentsCategory({
  title,
  isDraft = false,
}: {
  title: string;
  isDraft?: boolean;
}) {
  try {
    const response = await axios.post(`${DOCUMENTS_CATEGORY_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        title,
      },
    });

    await expect(response.status, `Document category should be created with status 201`)
      .toEqual(HttpStatusCode.Created);

    return response.data.data.id;
  } catch (error) {
    throw new Error(`Failed to create test document category: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestDocumentCategoryByTitle({
  title,
}: {
  title: string;
}) {
  try {
    const documentsCategoriesResponse = (await axios.get(`${DOCUMENTS_CATEGORY_API_ENDPOINT}?populate=*&status=draft`)).data;

    const testDocumentsCategory = documentsCategoriesResponse.data
      .find((item: DocumentsCategory) => item.title === title);

    if (testDocumentsCategory) {
      const response = await axios.delete(`${DOCUMENTS_CATEGORY_API_ENDPOINT}/${testDocumentsCategory.documentId}`);

      await expect(response.status, `Documents category should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    }
  } catch (error) {
    throw new Error(`Failed to delete test documents category: ${(error as AxiosError).message}`);
  }
}
