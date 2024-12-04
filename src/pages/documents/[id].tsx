import { DOCUMENTS_CATEGORIES, DocumentsCategoriesProps } from "@/src/common/mocks/documents-page-mock/documents-categories-mock";
import { DOCUMENTS_LIST, DocumentsListComponentProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { DocumentsList } from "@/src/components/documents-page/DocumentsList/DocumentsList";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";
import Head from "next/head";

export default function DocumentsCategories({
  category,
  documents,
}: {
  category: DocumentsCategoriesProps,
  documents: DocumentsListComponentProps[],
}) {
  if (!category) {
    return <NotFound />;
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Сайт зоопарка"
        />
        <title>{category.title}</title>
      </Head>
      <DocumentsList
        categoryTitle={category.title}
        documents={documents}
      />
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
      category: DOCUMENTS_CATEGORIES.find(({
        id,
      }) => id === +query.id) || null,
      documents: DOCUMENTS_LIST.filter(({
        category,
      }) => category.id === +query.id),
    },
  };
}
