import { MOCK_DOCUMENTS_PAGE } from '@/src/common/mocks/documents-page-mock/documents-page-mock';
import { api } from '@/src/common/utils/HttpClient';
import { DocumentListResponse, DocumentsCategoryListResponse, DocumentsPageResponse } from '@/src/common/api-types';
import qs from 'qs';
import { Categories } from '@/src/components/globals/Categories/Categories';
import { CategoryProps, DocumentsPageProps } from '@/src/common/types';
import { getDocumentsQueryParams } from '@/src/common/utils/getDocumentsQueryParams';
import { MOCK_DOCUMENTS } from '@/src/common/mocks/collections-mock/documents-collection-mock';
import dayjs from 'dayjs';
import { SeoHead } from '@/src/components/globals/SeoHead/SeoHead';
import { AppRoute } from '@/src/common/enum';
import { MOCK_DOCUMENTS_CATEGORIES } from '@/src/common/mocks/collections-mock/documents-categories-collection-mock';
import { useEffect } from 'react';

export default function DocumentsPage({
  pageData,
  categories,
}: {
  pageData: DocumentsPageProps;
  categories: Omit<CategoryProps, 'hasTabs'>[];
}) {
  const {
    seo,
    documentsTitle,
  } = pageData;

  useEffect(() => {
    document.body.scroll({
      top: 0,
    });
  }, []);

  return (
    <>
      <SeoHead
        metaTitle={seo?.metaTitle || `Документы`}
        metaDescription={seo?.metaDescription}
        metaKeywords={seo?.metaKeywords}
      />
      <Categories
        categoriesTitle={documentsTitle}
        categories={categories}
      />
    </>
  );
}

export async function getServerSideProps({
  preview = false,
}: {
  preview: boolean;
}) {
  const currentYear = dayjs()
    .year();

  if (process.env.APP_ENV === `static`) {
    const documentsCategories = MOCK_DOCUMENTS_CATEGORIES.filter(({
      id,
      hasTabs,
    }) => {
      for (let i = 0; i < 3; i++) {
        const year = currentYear - i;
        const documents = MOCK_DOCUMENTS.filter(({
          date,
          category,
        }) => {
          const isCategory = category.id === id;
          const isYear = date.split(`-`)[0] === String(year);

          if (isCategory && !hasTabs) {
            return isCategory;
          }

          return isCategory && isYear;
        });

        if (documents.length) {
          return true;
        }
      }

      return false;
    });

    return {
      props: {
        pageData: MOCK_DOCUMENTS_PAGE,
        categories: documentsCategories,
      },
    };
  }

  const previewMode = preview ? `draft` : `published`;
  const documentPageData = await getDocumentsPageData({
    previewMode,
  });

  const documentsCategories = await getDocumentsCategories({
    previewMode,
    currentYear,
  });

  return {
    props: {
      pageData: documentPageData,
      categories: documentsCategories,
    },
  };
}

async function getDocumentsPageData({
  previewMode,
}: {
  previewMode: string;
}) {
  try {
    const documentsPageResponse: DocumentsPageResponse = await api.get(`/documents-page?populate=*&status=${previewMode}`);

    return {
      documentsTitle: documentsPageResponse.data?.title,
      ...(documentsPageResponse.data?.seo && {
        seo: {
          metaTitle: documentsPageResponse.data?.seo?.metaTitle,
          metaDescription: documentsPageResponse.data?.seo?.metaDescription,
          metaKeywords: documentsPageResponse.data?.seo?.keywords,
        },
      }),
    };
  } catch {
    return {};
  }
}

async function getDocumentsCategories({
  previewMode,
  currentYear,
}: {
  previewMode: string;
  currentYear: number;
}) {
  try {
    const response: DocumentsCategoryListResponse = await api.get(`/documents-categories?status=${previewMode}`);

    return (await Promise.all(
      response.data!
        .map(async (documentsCategoriesItem) => {
          const documentsResponse: DocumentListResponse = await api.get(`/documents?${qs.stringify(getDocumentsQueryParams({
            categoryDocumentId: documentsCategoriesItem.documentId!,
            ...((documentsCategoriesItem?.hasTabs) && {
              yearLessThanOrEqual: currentYear,
              yearGreaterThanOrEqual: currentYear - 2,
            }),
            pageSize: 1,
            previewMode,
          }))}`);

          if (documentsResponse.meta?.pagination?.total) {
            return ({
              id: documentsCategoriesItem.id!,
              slug: documentsCategoriesItem.slug!,
              title: documentsCategoriesItem!.title,
              pageUrl: `${AppRoute.DOCUMENTS}`,
            });
          }
          return null;
        }),
    )).filter((item) => item !== null);
  } catch {
    return [];
  }
}
