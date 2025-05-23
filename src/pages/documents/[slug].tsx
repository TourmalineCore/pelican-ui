import {
  Document,
  DocumentListResponse,
  DocumentsCategory,
  DocumentsCategoryListResponse,
} from "@/src/common/api-types";
import { useScrollTop } from "@/src/common/hooks/useScrollTop";
import { MOCK_DOCUMENTS_CATEGORIES } from "@/src/common/mocks/collections-mock/documents-categories-collection-mock";
import { MOCK_DOCUMENTS } from "@/src/common/mocks/collections-mock/documents-collection-mock";
import { CategoryProps, DocumentsProps, DocumentsTabsProps } from "@/src/common/types";
import { getDocumentsQueryParams } from "@/src/common/utils/getDocumentsQueryParams";
import { strapiFetch } from "@/src/common/utils/HttpClient";
import { DocumentsList } from "@/src/components/documents-page/DocumentsList/DocumentsList";
import { SeoHead } from "@/src/components/globals/SeoHead/SeoHead";
import { isAxiosError } from "axios";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import qs from "qs";
import { useEffect } from "react";

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
  const router = useRouter();

  useScrollTop();

  useEffect(() => {
    if (queryYear) {
      router.replace(
        {
          query: {
            ...router.query,
            year: queryYear,
          },
        },
        undefined,
        {
          shallow: true,
        },
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SeoHead
        metaTitle={category?.seo?.metaTitle || category.title}
        metaDescription={category?.seo?.metaDescription}
        metaKeywords={category?.seo?.metaKeywords}
      />
      <DocumentsList
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
  const currentYear = dayjs()
    .year();

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
      length: 3,
    })
      .map(async (_, i) => {
        const year = currentYear - i;
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

  const previewMode = preview ? `draft` : `published`;
  const category = await getDocumentCategory({
    previewMode,
    slug: query.slug,
  });

  if (!category) {
    return {
      notFound: true,
    };
  }

  const availableYears: number[] = [];

  await checkAvailableYearsForCategory({
    previewMode,
    availableYears,
    category,
    currentYear,
  });

  availableYears.sort((a: number, b:number) => b - a);

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
      previewMode,
      year: +query.year || lastYear,
    });
  } else {
    documents = await getDocuments({
      categoryDocumentId: category.id,
      previewMode,
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
  previewMode,
  slug,
}: {
  previewMode: string;
  slug: string;
}): Promise<Omit<CategoryProps, 'slug' | 'pageUrl'> | null> {
  try {
    const response: DocumentsCategoryListResponse = await strapiFetch(`/documents-categories?populate=*&status=${previewMode}&filters[slug][$eq]=${slug}`);

    return mapDocumentCategory({
      documentCategory: response.data![0],
    });
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }

    return null;
  }
}

function mapDocumentCategory({
  documentCategory,
}: {
  documentCategory: DocumentsCategory;
}): Omit<CategoryProps, 'slug' | 'pageUrl'> {
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

async function checkAvailableYearsForCategory({
  category,
  currentYear,
  availableYears,
  previewMode,
}: {
  category: Omit<CategoryProps, 'slug' | 'pageUrl'>;
  currentYear: number;
  availableYears: number[];
  previewMode: string;
}) {
  await Promise.all(
    Array.from({
      length: 3,
    })
      .map(async (_, i) => {
        const year = currentYear - i;
        const yearsResponse: DocumentListResponse = await strapiFetch(`/documents?${qs.stringify(getDocumentsQueryParams({
          categoryDocumentId: category.id!,
          ...((category.hasTabs) && {
            yearLessThanOrEqual: year,
            yearGreaterThanOrEqual: year,
          }),
          pageSize: 1,
          previewMode,
        }))}`);

        if (yearsResponse.meta?.pagination?.total) {
          availableYears.push(year);
        }
      }),
  );
}

async function getDocuments({
  categoryDocumentId,
  previewMode,
  year,
}: {
  categoryDocumentId: CategoryProps['id'];
  previewMode: string;
  year?: number;
}): Promise<DocumentsProps[] | []> {
  try {
    const responseData = (await strapiFetch(`/documents?${qs.stringify(getDocumentsQueryParams({
      categoryDocumentId,
      ...(year ? {
        yearLessThanOrEqual: year,
        yearGreaterThanOrEqual: year,
      } : {}),
      previewMode,
    }))}`)).data;

    return mapDocuments({
      documents: responseData,
    });
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }

    return [];
  }
}

function mapDocuments({
  documents,
}: {
  documents: Document[] | [];
}): DocumentsProps[] | [] {
  return documents
    .map((document) => ({
      id: document.id!,
      date: document!.date!,
      showDate: document!.showDate!,
      title: document!.title!,
      subtitle: document!.subtitle,
      description: document!.description,
      files: document.files ? document.files.map((file) => ({
        id: file.id!,
        name: file.name!,
        url: file.url!,
        ext: file.ext!,
      })) : [],
      category: {
        id: document!.category.documentId!,
      },
    }));
}
