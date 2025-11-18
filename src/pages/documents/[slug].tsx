import { DocumentsCategory, DocumentsCategoryListResponse } from "@/src/common/api-types";
import { useSetYearInQuery } from "@/src/common/hooks/useSetYearInQuery";
import { useScrollTop } from "@/src/common/hooks/useScrollTop";
import { MOCK_DOCUMENTS_CATEGORIES } from "@/src/common/mocks/collections-mock/documents-categories-collection-mock";
import { MOCK_DOCUMENTS } from "@/src/common/mocks/collections-mock/documents-collection-mock";
import { CategoryProps, DocumentsProps, DocumentsTabsProps } from "@/src/common/types";
import { apiFetch } from "@/src/common/utils/HttpClient";
import { Documents } from "@/src/components/documents-page/Documents/Documents";
import { SeoHead } from "@/src/components/globals/SeoHead/SeoHead";
import dayjs from "dayjs";
import { getAvailableYearsForCategory, getDocuments } from "@/src/services/cms/api/documents-api/documents-api";

export default function DocumentsCategories({
  category,
  queryYear,
  availableYears,
  documents,
}: {
  category: CategoryProps;
  queryYear: DocumentsTabsProps[`queryYear`];
  availableYears: DocumentsTabsProps[`availableYears`];
  documents: DocumentsProps[];
}) {
  useScrollTop();

  useSetYearInQuery({
    year: queryYear,
  });

  return (
    <>
      <SeoHead
        metaTitle={category?.seo?.metaTitle || category.title}
        metaDescription={category?.seo?.metaDescription}
        metaKeywords={category?.seo?.metaKeywords}
      />
      <Documents
        category={category}
        availableYears={availableYears}
        documents={documents}
        currentYear={+queryYear}
      />
    </>
  );
}

export async function getServerSideProps({
  preview = false,
  query,
}: {
  preview: boolean;
  query: {
    slug: string;
    year: string;
  };
}) {
  if (process.env.APP_ENV === `static`) {
    const documentCategory = MOCK_DOCUMENTS_CATEGORIES.find(({
      slug,
    }) => slug === query.slug) || null;

    if (!documentCategory) {
      return {
        notFound: true,
      };
    }

    if (!documentCategory?.hasTabs) {
      return {
        props: {
          category: documentCategory,
          queryYear: query.year || null,
          availableYears: [],
          documents: MOCK_DOCUMENTS.filter(({
            category,
          }) => category.id === documentCategory?.id),
        },
      };
    }

    const availableYears: number[] = [];

    Array.from({
      length: 5,
    })
      .map(async (_, i) => {
        const year = 2025 - i;
        const documentsResponse = MOCK_DOCUMENTS.filter(({
          date,
          category,
        }) => {
          const isCategory = category.id === documentCategory?.id;
          const isYear = date.split(`-`)[0] === String(year);

          return isCategory && isYear;
        });

        if (documentsResponse.length) {
          availableYears.push(year);
        }
      });

    const lastYear = String(availableYears[0]);
    const filteredDocuments = MOCK_DOCUMENTS.filter(({
      date,
      category,
    }) => {
      const isCategory = category.id === documentCategory.id;
      const isYear = date.split(`-`)[0] === (query.year || lastYear);

      return isCategory && isYear;
    });

    return {
      props: {
        category: documentCategory,
        queryYear: query.year || lastYear,
        availableYears,
        documents: filteredDocuments,
      },
    };
  }

  const category = await getDocumentCategory({
    isPreview: preview,
    slug: query.slug,
  });

  if (!category) {
    return {
      notFound: true,
    };
  }

  const currentYear = dayjs()
    .year();

  const availableYears = await getAvailableYearsForCategory({
    isPreview: preview,
    category,
    currentYear,
  });

  const lastYear = availableYears[0] || currentYear;

  if (query.year && !availableYears.includes(+query.year)) {
    return {
      props: {
        category,
        availableYears,
        documents: [],
      },
    };
  }

  let documents: DocumentsProps[] | [];

  if (category.hasTabs) {
    documents = await getDocuments({
      categoryDocumentId: category.id,
      isPreview: preview,
      year: +query.year || lastYear,
    });
  } else {
    documents = await getDocuments({
      categoryDocumentId: category.id,
      isPreview: preview,
    });
  }

  return {
    props: {
      category,
      queryYear: query.year || lastYear,
      availableYears,
      documents,
    },
  };
}

async function getDocumentCategory({
  isPreview,
  slug,
}: {
  isPreview: boolean;
  slug: string;
}) {
  const response: DocumentsCategoryListResponse = await apiFetch(`/documents-categories?populate=*&status=${isPreview ? `draft` : `published`}&filters[slug][$eq]=${slug}`);

  return mapDocumentCategory({
    documentCategory: response.data![0],
  });
}

function mapDocumentCategory({
  documentCategory,
}: {
  documentCategory: DocumentsCategory;
}) {
  return {
    id: documentCategory.documentId!,
    title: documentCategory.title!,
    hasTabs: documentCategory.hasTabs!,
    ...(documentCategory?.seo && {
      seo: {
        metaTitle: documentCategory.seo.metaTitle!,
        metaDescription: documentCategory.seo?.metaDescription,
        metaKeywords: documentCategory.seo?.keywords,
      },
    }),
  };
}
