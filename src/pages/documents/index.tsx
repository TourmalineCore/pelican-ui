import Head from 'next/head';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { DOCUMENTS_PAGE, DocumentsPageProps } from '@/src/common/mocks/documents-page-mock/documents-page-mock';
import { api } from '@/src/common/utils/HttpClient';
import { Meta } from '@/src/common/types';
import { DOCUMENTS_CATEGORIES, DocumentsCategoriesProps } from '@/src/common/mocks/documents-page-mock/documents-categories-mock';
import { DocumentsCategories } from '@/src/components/documents-page/DocumentsCategories/DocumentsCategories';

export default function DocumentsPage({
  pageData,
  documentCategories,
}: {
  pageData: DocumentsPageProps,
  documentCategories: DocumentsCategoriesProps[],
}) {
  if (!pageData) {
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

type DocumentsCategoriesResponse = {
  data: DocumentsCategoriesProps[];
  meta: Meta;
};

export async function getServerSideProps() {
  if (process.env.APP_ENV === `static`) {
    return {
      props: {
        pageData: DOCUMENTS_PAGE,
        categories: DOCUMENTS_CATEGORIES,
      },
    };
  }

  const documentsCategories: DocumentsCategoriesResponse = await api.get(`/documents-categories`);

  return {
    props: {
      pageData: DOCUMENTS_PAGE,
      documentCategories: documentsCategories.data,
    },
  };
}
