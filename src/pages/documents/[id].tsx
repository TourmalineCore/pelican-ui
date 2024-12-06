import { DOCUMENTS_CATEGORIES, DocumentsCategoriesProps } from "@/src/common/mocks/documents-page-mock/documents-categories-mock";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";
import Head from "next/head";

export default function DocumentsCategories({
  documentsCategories,
}: {
  documentsCategories: DocumentsCategoriesProps
}) {
  if (!documentsCategories) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{documentsCategories.title}</title>
      </Head>
      <h1>{documentsCategories.title}</h1>
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    id: string
  }
}) {
  // TODO there will be a request in the Strapi api here
  return {
    props: {
      documentsCategories: DOCUMENTS_CATEGORIES.find(({
        id,
      }) => id === +query.id) || null,
    },
  };
}
