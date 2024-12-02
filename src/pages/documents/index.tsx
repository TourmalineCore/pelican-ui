import Head from 'next/head';
import { NotFound } from '@/src/components/not-found-page/NotFound/NotFound';
import { DOCUMENTS_PAGE, DocumentsPageProps } from '@/src/common/mocks/documents-page-mock/documents-page-mock';
import { DocumentsCategoriesList } from '@/src/components/documents-page/DocumentsCategories/DocumentsCategoriesList';

export default function DocumentsPage({
  pageData,
}: {
  pageData: DocumentsPageProps,
}) {
  if (!pageData) {
    return <NotFound />;
  }

  const {
    title,
    documentsTitle,
    documentCategories,
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
      <DocumentsCategoriesList
        documentsTitle={documentsTitle}
        documentsCategories={documentCategories}
      />
    </>
  );
}

export async function getServerSideProps() {
  // TODO Uncomment when the api appears, there will be static data here
  // if (process.env.APP_ENV === `test`) {
  //   return {
  //     props: {
  //       navigationLinks: NAVIGATION_LINKS,
  //     },
  //   };
  // }

  // TODO there will be a request in the Strapi api here
  return {
    props: {
      pageData: DOCUMENTS_PAGE,
    },
  };
}
