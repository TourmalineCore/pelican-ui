import { gotoPage } from "@/playwright-tests/global-helpers";
import { AppRoute } from "@/src/common/enum";
import { getStrapiURL } from "@/src/common/utils/getStrapiURL";
import test, { expect, Page } from "@playwright/test";
import axios, { AxiosError, HttpStatusCode } from "axios";
import { DocumentsCategory, Document } from "@/src/common/api-types";
import {
  E2E_DRAFT_UI_NAME_PREFIX,
  E2E_UI_NAME_PREFIX,
  getFileIdByName,
  gotoWithDraftPreviewMode,
} from "../helpers/cms-integration-helpers";

const DOCUMENTS_PAGE_TITLE = `${E2E_UI_NAME_PREFIX} Документы`;
const DOCUMENT_TITLE = `${E2E_UI_NAME_PREFIX} Отчет о деятельности зоопарка`;
const DOCUMENTS_CATEGORY_TITLE = `${E2E_UI_NAME_PREFIX} Отчеты`;

const DOCUMENTS_DRAFT_PAGE_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Документы`;
const DOCUMENT_DRAFT_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Отчет о деятельности зоопарка`;
const DOCUMENTS_DRAFT_CATEGORY_TITLE = `${E2E_DRAFT_UI_NAME_PREFIX} Отчеты`;

const DOCUMENTS_CATEGORY_API_ENDPOINT = `${getStrapiURL()}/documents-categories`;
const DOCUMENTS_API_ENDPOINT = `${getStrapiURL()}/documents`;
const DOCUMENTS_PAGE_API_ENDPOINT = `${getStrapiURL()}/documents-page`;

let documentsCategoryId: number;

test.describe(`Documents page CMS integration tests`, () => {
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
        GIVEN documents page without content
        WHEN call method PUT /api/documents-page
        AND call method POST /api/documents-category
        AND call method POST /api/documents
        AND go to documents page
        SHOULD display documents page content correctly
        AND document category is displayed correctly
        AND document is displayed correctly
      `,
      checkDocumentsPageDraftPreviewTest,
    );
  });
});

async function checkDocumentsPageDraftPreviewTest({
  page,
}: {
  page: Page;
}) {
  await gotoWithDraftPreviewMode({
    page,
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
}: {
  page: Page;
}) {
  await gotoPage({
    page,
    url: AppRoute.DOCUMENTS,
  });

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

  await createTestDocument({
    title: documentTitle,
    isDraft,
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
  await cleanupTestDocumentByTitle({
    title: documentTitle,
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

async function createTestDocument({
  title,
  isDraft = false,
}: {
  title: string;
  isDraft?: boolean;
}) {
  try {
    const response = await axios.post(`${DOCUMENTS_API_ENDPOINT}?status=${isDraft ? `draft` : `published`}`, {
      data: {
        title,
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

    await expect(response.status, `News should be created with status 201`)
      .toEqual(HttpStatusCode.Created);
  } catch (error) {
    throw new Error(`Failed to create test news: ${(error as AxiosError).message}`);
  }
}

async function cleanupTestDocumentByTitle({
  title,
}: {
  title: string;
}) {
  try {
    const documentsResponse = (await axios.get(`${DOCUMENTS_API_ENDPOINT}?populate=*&status=draft`)).data;

    const testDocument = documentsResponse.data
      .find((item: Document) => item.title === title);

    if (testDocument) {
      const response = await axios.delete(`${DOCUMENTS_API_ENDPOINT}/${testDocument.documentId}`);

      await expect(response.status, `Document should be deleted with status 204`)
        .toEqual(HttpStatusCode.NoContent);
    }
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
