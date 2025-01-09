import Head from 'next/head';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { DOCUMENTS_PAGE, DocumentsPageProps } from '@/src/common/mocks/documents-page-mock/documents-page-mock';
import { api } from '@/src/common/utils/HttpClient';
import { DOCUMENTS_CATEGORIES, DocumentsCategoriesProps } from '@/src/common/mocks/documents-page-mock/documents-categories-mock';
import { DocumentsCategories } from '@/src/components/documents-page/DocumentsCategories/DocumentsCategories';
import { DocumentsCategoryListResponse } from '@/src/common/api-types';

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
        pageData: DOCUMENTS_PAGE,
        documentCategories: DOCUMENTS_CATEGORIES,
      },
    };
  }

  try {
    const documentsCategoriesResponse: DocumentsCategoryListResponse = await api.get(`/documents-categories`);

    const documentsCategories: DocumentsCategoriesProps[] = documentsCategoriesResponse.data!
      .map((documentsCategoriesItem) => ({
        id: documentsCategoriesItem.id!,
        title: documentsCategoriesItem.attributes!.title,
      }));

    return {
      props: {
        pageData: DOCUMENTS_PAGE,
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
