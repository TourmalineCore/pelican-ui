import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { DocumentsCategoriesProps } from "@/src/common/mocks/documents-page-mock/documents-categories-mock";
import Link from "next/link";

export function DocumentsCategoriesList({
  documentsTitle,
  documentsCategories,
}: {
  documentsTitle: string,
  documentsCategories: DocumentsCategoriesProps[],
}) {
  const windowWidth = useWindowWidth();

  if (windowWidth === 0) {
    return null;
  }

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
          link,
        }) => (
          <Link
            key={id}
            href={link}
          >
            <li className="documents-categories-list__list-item">
              <span>{title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
