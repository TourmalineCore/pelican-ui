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
import { E2E_UI_NAME_PREFIX, getFileIdByName } from "../helpers/cms-integration-helpers";

const DOCUMENTS_PAGE_TITLE = `${E2E_UI_NAME_PREFIX} Документы`;
const DOCUMENT_TITLE = `${E2E_UI_NAME_PREFIX} Отчет о деятельности зоопарка`;
const DOCUMENTS_CATEGORY_TITLE = `${E2E_UI_NAME_PREFIX} Отчеты`;

const DOCUMENTS_CATEGORY_API_ENDPOINT = `${getStrapiURL()}/documents-categories`;
const DOCUMENTS_API_ENDPOINT = `${getStrapiURL()}/documents`;
const DOCUMENTS_PAGE_API_ENDPOINT = `${getStrapiURL()}/documents-page`;

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
      await cleanupTestDocuments();

      await cleanupTestDocumentCategories();

      documentsCategoryId = await createTestDocumentsCategory({
        title: DOCUMENTS_CATEGORY_TITLE,
      });

      await createTestDocuments({
        documents: [
          {
            title: DOCUMENT_TITLE,
          },
        ],
      });

      await updateTestDocumentsPage({
        title: DOCUMENTS_PAGE_TITLE,
      });
    });

    test.afterEach(async () => {
      await cleanupTestDocuments();

      await cleanupTestDocumentCategories();
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
});

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

async function updateTestDocumentsPage({
  title,
}: {
  title: string;
}) {
  try {
    const response = await axios.put(`${DOCUMENTS_PAGE_API_ENDPOINT}`, {
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
  }[];
}) {
  try {
    documents.forEach(async ({
      title,
      date,
    }) => {
      const response = await axios.post(`${DOCUMENTS_API_ENDPOINT}`, {
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

async function cleanupTestDocuments() {
  try {
    const documentsResponse = (await axios.get<{ data: Document[]; }>(`${DOCUMENTS_API_ENDPOINT}?populate=*`)).data;

    const documentsToDelete = documentsResponse.data.filter(({
      title,
    }) => title.startsWith(E2E_UI_NAME_PREFIX));

    documentsToDelete.forEach(async (document) => {
      const response = await axios.delete(`${DOCUMENTS_API_ENDPOINT}/${document.documentId}`);

      await expect(response.status, `Document should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    });
  } catch (error) {
    throw new Error(`Failed to delete test document: ${(error as AxiosError).message}`);
  }
}

async function createTestDocumentsCategory({
  title,
}: {
  title: string;
}) {
  try {
    const response = await axios.post(`${DOCUMENTS_CATEGORY_API_ENDPOINT}`, {
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

async function cleanupTestDocumentCategories() {
  try {
    const documentCategoriesResponse = (await axios.get<{ data: DocumentsCategory[]; }>(`${DOCUMENTS_CATEGORY_API_ENDPOINT}?populate=*`)).data;

    const documentCategoriesToDelete = documentCategoriesResponse.data.filter(({
      title,
    }) => title.startsWith(E2E_UI_NAME_PREFIX));

    documentCategoriesToDelete.forEach(async (documentCategory) => {
      const response = await axios.delete(`${DOCUMENTS_CATEGORY_API_ENDPOINT}/${documentCategory.documentId}`);

      await expect(response.status, `Documents category should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    });
  } catch (error) {
    throw new Error(`Failed to delete test documents category: ${(error as AxiosError).message}`);
  }
}
