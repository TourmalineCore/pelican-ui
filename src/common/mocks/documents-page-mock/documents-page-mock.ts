import { DOCUMENTS_CATEGORIES, DocumentsCategoriesProps } from "./documents-categories-mock";

export type DocumentsPageProps = {
  id: number,
  title: string,
  documentsTitle: string;
  documentCategories: DocumentsCategoriesProps[];
};

export const DOCUMENTS_PAGE: DocumentsPageProps = {
  id: 1,
  title: `Документы`,
  documentsTitle: `Информация о деятельности МБУК «Зоопарк»`,
  documentCategories: DOCUMENTS_CATEGORIES,
};
