import Link from "next/link";
import { AppRoute } from "@/src/common/enum";
import { IconArrow } from "./IconArrow/IconArrow";

export function DocumentsCategoriesCard({
  className,
  id,
  title,
}: {
  className: string,
  id: number,
  title: string,
}) {
  return (
    <Link
      className={`${className} documents-categories-card`}
      href={`${AppRoute.DOCUMENTS}/${id}`}
    >
      <li className="documents-categories-card__wrapper">
        <h2 className="documents-categories-card__title">{title}</h2>
        <span className="documents-categories-card__arrow">
          <IconArrow className="documents-categories-card__icon-arrow" />
        </span>
      </li>
    </Link>
  );
}
