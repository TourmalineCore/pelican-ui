import Link from "next/link";
import { AppRoute } from "@/src/common/enum";
import { DocumentsCategoriesProps } from "@/src/common/types";
import { IconArrow } from "./components/IconArrow/IconArrow";

export function DocumentsCategory({
  className,
  id,
  title,
}: {
  className: string,
  id: DocumentsCategoriesProps['id'],
  title: DocumentsCategoriesProps['title'],
}) {
  return (
    <li className={`${className} documents-category`}>
      <Link
        className="documents-category__wrapper"
        href={{
          pathname: `${AppRoute.DOCUMENTS}/${id}`,
        }}
        aria-label={`Перейти на страницу категории ${title}`}
        data-testid="documents-category"
      >
        <h2 className="documents-category__title">{title}</h2>
        <span className="documents-category__arrow">
          <IconArrow className="documents-category__icon-arrow" />
        </span>
      </Link>
    </li>
  );
}
