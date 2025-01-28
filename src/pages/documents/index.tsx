import Head from 'next/head';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { MOCK_DOCUMENTS_PAGE } from '@/src/common/mocks/documents-page-mock/documents-page-mock';
import { api } from '@/src/common/utils/HttpClient';
import { DocumentListResponse, DocumentsCategoryListResponse } from '@/src/common/api-types';
import qs from 'qs';
import dayjs from 'dayjs';
import { getDocumentsCategoriesQueryParams } from '@/src/common/utils/getDocumentsQueryParams';
import { DocumentsCategories } from '@/src/components/documents-page/DocumentsCategories/DocumentsCategories';
import { MOCK_DOCUMENTS_CATEGORIES } from '@/src/common/mocks/collections-mock/documents-categories-collection-mock';
import { DocumentsCategoriesProps, DocumentsPageProps } from '@/src/common/types';

export default function DocumentsPage({
  pageData,
  documentCategories,
}: {
  pageData: DocumentsPageProps,
  documentCategories: DocumentsCategoriesProps[],
}) {
  if (!pageData || !documentCategories) {
    return <NotFound />;
  }

  const {
    title,
    documentsTitle,
  } = pageData;

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{title}</title>
      </Head>
      <DocumentsCategories
        documentsTitle={documentsTitle}
        documentsCategories={documentCategories}
      />
    </>
  );
}

export async function getServerSideProps() {
  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: MOCK_DOCUMENTS_PAGE,
        documentCategories: MOCK_DOCUMENTS_CATEGORIES,
      },
    };
  }

  try {
    const documentsCategoriesResponse: DocumentsCategoryListResponse = await api.get(`/documents-categories`);

    const year = dayjs()
      .year();

    const documentsCategories: DocumentsCategoriesProps[] = (await Promise.all(
      documentsCategoriesResponse.data!
        .map(async (documentsCategoriesItem) => {
          const documentsResponse: DocumentListResponse = await api.get(`/documents?${qs.stringify(getDocumentsCategoriesQueryParams({
            id: documentsCategoriesItem.id!,
            year,
            pageSize: 1,
          }))}`);

          if (documentsResponse.meta?.pagination?.total) {
            return ({
              id: documentsCategoriesItem.id!,
              title: documentsCategoriesItem.attributes!.title,
            });
          }
          return null;
        }),
    )).filter((item): item is DocumentsCategoriesProps => item !== null);

    return {
      props: {
        pageData: MOCK_DOCUMENTS_PAGE,
        documentCategories: documentsCategories,
      },
    };
  } catch {
    return {
      props: {
        documentCategories: null,
      },
    };
  }
}
