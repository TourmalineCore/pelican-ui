import { DOCUMENTS_CATEGORIES, DocumentsCategoriesProps } from "@/src/common/mocks/documents-page-mock/documents-categories-mock";
import { DOCUMENTS_LIST, DocumentsListComponentProps } from "@/src/common/mocks/documents-page-mock/documents-list-mock";
import { Meta } from "@/src/common/types";
import { api } from "@/src/common/utils/HttpClient";
import { DocumentsList } from "@/src/components/documents-page/DocumentsList/DocumentsList";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";
import Head from "next/head";
import qs from "qs";

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

type CategoryResponse = {
  data: DocumentsCategoriesProps[];
  meta: Meta;
};

type DocumentsResponse = {
  data: DocumentsListComponentProps[];
  meta: Meta;
};

export async function getServerSideProps({
  query,
}: {
  query: {
    id: string
  }
}) {
  if (process.env.APP_ENV === `static`) {
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

  const categoryQueryParams = {
    filters: {
      id: {
        $eq: query.id,
      },
    },
  };

  const documentsQueryParams = {
    populate: [`files`, `category`],
  };

  const category: CategoryResponse = await api.get(`/documents-categories?${qs.stringify(categoryQueryParams)}`);
  const documents: DocumentsResponse = await api.get(`/documents?${qs.stringify(documentsQueryParams)}`);

  return {
    props: {
      category: category.data[0].title,
      documents: documents.data,
    },
  };
}
