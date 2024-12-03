import { DocumentsCategoriesProps } from "@/src/common/mocks/documents-page-mock/documents-categories-mock";
import { DocumentsCategoriesCard } from "@/src/components/documents-page/DocumentsCategories/DocumentsCategoriesCard/DocumentsCategoriesCard";

export function DocumentsCategoriesList({
  documentsTitle,
  documentsCategories,
}: {
  documentsTitle: string,
  documentsCategories: DocumentsCategoriesProps[],
}) {
  return (
    <section
      className="documents-categories-list container"
      data-testid="documents-categories-list"
    >
      <h1 className="documents-categories-list__title">{documentsTitle}</h1>
      <ul className="documents-categories-list__list">
        {documentsCategories.map(({
          id,
          title,
        }) => (
          <DocumentsCategoriesCard
            key={id}
            className="documents-categories-list__list-item"
            data-testid="documents-category-card"
            id={id}
            title={title}
          />
        ))}
      </ul>
    </section>
  );
}
