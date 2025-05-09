import { BlockTypes } from "@/src/common/enum";
import { CategoriesComponentProps } from "@/src/common/types";
import { MOCK_DOCUMENTS_CATEGORIES } from "../../collections-mock/documents-categories-collection-mock";

export const MOCK_SHARED_CATEGORIES: CategoriesComponentProps = {
  id: 0,
  __component: BlockTypes.SHARED_CATEGORIES,
  categoriesTitle: `Информация о\u00A0деятельности МБУК\u00A0«Зоопарк»`,
  categories: MOCK_DOCUMENTS_CATEGORIES,
};
