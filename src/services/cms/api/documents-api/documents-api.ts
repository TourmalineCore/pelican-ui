import { Document, DocumentListResponse } from "@/src/common/api-types";
import { CategoryProps } from "@/src/common/types";
import { getDocumentsQueryParams } from "@/src/common/utils/getDocumentsQueryParams";
import { apiFetch } from "@/src/common/utils/HttpClient";
import qs from "qs";

export async function getDocuments({
  categoryDocumentId,
  isPreview,
  year,
}: {
  categoryDocumentId: CategoryProps['id'];
  isPreview: boolean;
  year?: number;
}) {
  const documents: Document[] = (await apiFetch(`/documents?${qs.stringify(getDocumentsQueryParams({
    categoryDocumentId,
    ...(year && {
      yearLessThanOrEqual: year,
      yearGreaterThanOrEqual: year,
    }),
    previewMode: isPreview ? `draft` : `published`,
  }))}`)).data;

  return mapDocuments({
    documents,
  });
}

function mapDocuments({
  documents,
}: {
  documents: Document[] | [];
}) {
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

export async function getAvailableYearsForCategory({
  category,
  currentYear,
  isPreview,
}: {
  category: Omit<CategoryProps, 'slug' | 'pageUrl'>;
  currentYear: number;
  isPreview: boolean;
}) {
  const years = Array.from({
    length: 5,
  }, (_, i) => currentYear - i);

  const results = await Promise.all(
    years
      .map(async (year) => {
        const response: DocumentListResponse = await apiFetch(`/documents?${qs.stringify(getDocumentsQueryParams({
          categoryDocumentId: category.id!,
          ...((category.hasTabs) && {
            yearLessThanOrEqual: year,
            yearGreaterThanOrEqual: year,
          }),
          pageSize: 1,
          previewMode: isPreview ? `draft` : `published`,
        }))}`);

        return response.meta?.pagination?.total ? year : null;
      }),
  );

  return results.filter((year) => year !== null)
    .sort((a, b) => b - a);
}
