export function getDocumentsQueryParams({
  categoryDocumentId,
  yearLessThanOrEqual,
  yearGreaterThanOrEqual,
  pageSize = 100,
  previewMode,
}: {
  categoryDocumentId: string | number;
  yearLessThanOrEqual?: number;
  yearGreaterThanOrEqual?: number;
  pageSize?: number;
  previewMode: string;
}) {
  return {
    populate: [`files`, `category`],
    filters: {
      ...((yearLessThanOrEqual || yearGreaterThanOrEqual) && {
        date: {
          $lte: `${yearLessThanOrEqual}-12-31`,
          $gte: `${yearGreaterThanOrEqual}-01-01`,
        },
      }),
      category: {
        documentId: {
          $eq: categoryDocumentId,
        },
      },
    },
    sort: {
      date: `desc`,
      title: `desc`,
    },
    pagination: {
      pageSize,
    },
    status: previewMode,
  };
}
