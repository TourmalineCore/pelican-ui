export function getDocumentsQueryParams({
  categoryDocumentId,
  yearLessThanOrEqual,
  yearGreaterThanOrEqual,
  pageSize = 100,
}: {
  categoryDocumentId: string,
  yearLessThanOrEqual?: number,
  yearGreaterThanOrEqual?: number,
  pageSize?: number,
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
    pagination: {
      pageSize,
    },
  };
}
