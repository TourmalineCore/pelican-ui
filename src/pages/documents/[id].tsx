import { DocumentListResponse, DocumentsCategoryListResponse } from "@/src/common/api-types";
import { MOCK_DOCUMENTS_CATEGORIES } from "@/src/common/mocks/collections-mock/documents-categories-collection-mock";
import { MOCK_DOCUMENTS } from "@/src/common/mocks/collections-mock/documents-collection-mock";
import { CategoryProps, DocumentsProps, DocumentsTabsProps } from "@/src/common/types";
import { getDocumentsQueryParams } from "@/src/common/utils/getDocumentsQueryParams";
import { api } from "@/src/common/utils/HttpClient";
import { DocumentsList } from "@/src/components/documents-page/DocumentsList/DocumentsList";
import { NotFound } from "@/src/components/not-found-page/NotFound/NotFound";
import dayjs from "dayjs";
import Head from "next/head";
import { useRouter } from "next/router";
import qs from "qs";
import { useEffect } from "react";

export default function DocumentsCategories({
  category,
  queryYear,
  availableYears,
  documents,
}: {
  category: CategoryProps,
  queryYear: DocumentsTabsProps[`queryYear`],
  availableYears: DocumentsTabsProps[`availableYears`],
  documents: DocumentsProps[],
}) {
  const router = useRouter();

  useEffect(() => {
    if (queryYear) {
      router.replace(
        {
          query: {
            ...router.query,
            year: queryYear,
          },
        },
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        category={category}
        availableYears={availableYears}
        documents={documents}
        currentYear={+queryYear}
      />
    </>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: {
    id: string,
    year: string,
  }
}) {
  const currentYear = dayjs()
    .year();

  if (process.env.APP_ENV === `static`) {
    if (!MOCK_DOCUMENTS_CATEGORIES.find((item) => item.id === +query.id)?.hasTabs) {
      return {
        props: {
          category: MOCK_DOCUMENTS_CATEGORIES.find(({
            id,
          }) => id === +query.id) || null,
          queryYear: query.year || null,
          availableYears: [],
          documents: MOCK_DOCUMENTS.filter(({
            category,
          }) => category.id === +query.id),
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
          const isCategory = category.id === +query.id;
          const isYear = date.split(`-`)[0] === String(year);

          return isCategory && isYear;
        });

        if (documentsResponse.length) {
          availableYears.push(year);
        }
      });

    if (query.year && !availableYears.includes(+query.year)) {
      return {
        props: {
          category: null,
        },
      };
    }

    const lastYear = String(availableYears[0]);
    const filteredDocuments = MOCK_DOCUMENTS.filter(({
      date,
      category,
    }) => {
      const isCategory = category.id === +query.id;
      const isYear = date.split(`-`)[0] === (query.year || lastYear);

      return isCategory && isYear;
    });

    return {
      props: {
        category: MOCK_DOCUMENTS_CATEGORIES.find(({
          id,
        }) => id === +query.id) || null,
        queryYear: query.year || lastYear,
        availableYears,
        documents: filteredDocuments,
      },
    };
  }

  try {
    const categoryResponse: DocumentsCategoryListResponse = await api.get(`/documents-categories?filters[id][$eq]=${query.id}`);

    const availableYears: number[] = [];

    await Promise.all(
      Array.from({
        length: 3,
      })
        .map(async (_, i) => {
          const year = currentYear - i;
          const yearsResponse: DocumentListResponse = await api.get(`/documents?${qs.stringify(getDocumentsQueryParams({
            id: +query.id,
            ...((categoryResponse.data![0]!.hasTabs) && {
              yearLessThanOrEqual: year,
              yearGreaterThanOrEqual: year,
            }),
            pageSize: 1,
          }))}`);

          if (yearsResponse.meta?.pagination?.total) {
            availableYears.push(year);
          }
        }),
    );

    availableYears.sort((a: number, b:number) => b - a);

    const lastYear = availableYears[0] || currentYear;

    if (query.year && !availableYears.includes(+query.year)) {
      return {
        props: {
          category: null,
        },
      };
    }

    let documentsResponse: DocumentListResponse;

    if (categoryResponse.data![0]!.hasTabs) {
      documentsResponse = await api.get(`/documents?${qs.stringify(getDocumentsQueryParams({
        id: +query.id,
        yearLessThanOrEqual: +query.year || lastYear,
        yearGreaterThanOrEqual: +query.year || lastYear,
      }))}`);
    } else {
      documentsResponse = await api.get(`/documents?${qs.stringify(getDocumentsQueryParams({
        id: +query.id,
      }))}`);
    }

    const documents: DocumentsProps[] = documentsResponse.data!
      .map((documentsItem) => ({
        id: documentsItem.id!,
        date: documentsItem!.date!,
        showDate: documentsItem!.showDate!,
        title: documentsItem!.title!,
        subtitle: documentsItem!.subtitle,
        description: documentsItem!.description,
        files: documentsItem!.files.map((file) => ({
          id: file.id!,
          name: file.name!,
          url: file.url!,
          ext: file.ext!,
        })),
        category: {
          id: documentsItem!.category.id!,
        },
      }));

    return {
      props: {
        category: {
          id: categoryResponse.data![0].id,
          title: categoryResponse.data![0].title,
          hasTabs: categoryResponse.data![0].hasTabs,
        },
        queryYear: query.year || lastYear,
        availableYears,
        documents,
      },
    };
  } catch {
    return {
      props: {
        category: null,
      },
    };
  }
}
