import Head from 'next/head';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { MOCK_DOCUMENTS_PAGE } from '@/src/common/mocks/documents-page-mock/documents-page-mock';
import { api } from '@/src/common/utils/HttpClient';
import { DocumentListResponse, DocumentsCategoryListResponse } from '@/src/common/api-types';
import qs from 'qs';
import { Categories } from '@/src/components/globals/Categories/Categories';
import { MOCK_DOCUMENTS_CATEGORIES } from '@/src/common/mocks/collections-mock/documents-categories-collection-mock';
import { CategoryProps, DocumentsPageProps } from '@/src/common/types';
import { getDocumentsQueryParams } from '@/src/common/utils/getDocumentsQueryParams';
import { MOCK_DOCUMENTS } from '@/src/common/mocks/collections-mock/documents-collection-mock';
import dayjs from 'dayjs';

export default function DocumentsPage({
  pageData,
  categories,
}: {
  pageData: DocumentsPageProps,
  categories: Omit<CategoryProps, 'hasTabs'>[],
}) {
  if (!pageData || !categories) {
    return <NotFound />;
  }

  const {
    pageTitle,
    documentsTitle,
  } = pageData;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{pageTitle}</title>
      </Head>
      <Categories
        categoriesTitle={documentsTitle}
        categories={categories}
      />
    </>
  );
}

export async function getServerSideProps() {
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

  try {
    const documentsCategoriesResponse: DocumentsCategoryListResponse = await api.get(`/documents-categories`);

    const documentsCategories: Omit<CategoryProps, 'hasTabs'>[] = (await Promise.all(
      documentsCategoriesResponse.data!
        .map(async (documentsCategoriesItem) => {
          const documentsResponse: DocumentListResponse = await api.get(`/documents?${qs.stringify(getDocumentsQueryParams({
            categoryDocumentId: documentsCategoriesItem.documentId!,
            ...((documentsCategoriesItem?.hasTabs) && {
              yearLessThanOrEqual: currentYear,
              yearGreaterThanOrEqual: currentYear - 2,
            }),
            pageSize: 1,
          }))}`);

          if (documentsResponse.meta?.pagination?.total) {
            return ({
              id: documentsCategoriesItem.id!,
              slug: documentsCategoriesItem.slug!,
              title: documentsCategoriesItem!.title,
              pageUrl: `documents`,
            });
          }
          return null;
        }),
    )).filter((item) => item !== null);

    return {
      props: {
        pageData: MOCK_DOCUMENTS_PAGE,
        categories: documentsCategories,
      },
    };
  } catch {
    return {
      props: {
        categories: null,
      },
    };
  }
}
