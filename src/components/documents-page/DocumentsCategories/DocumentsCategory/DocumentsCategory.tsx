import Link from "next/link";
import { AppRoute } from "@/src/common/enum";
import { IconArrow } from "./IconArrow/IconArrow";

export function DocumentsCategory({
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
      className={`${className} documents-category`}
      href={`${AppRoute.DOCUMENTS}/${id}`}
    >
      <li className="documents-category__wrapper">
        <h2 className="documents-category__title">{title}</h2>
        <span className="documents-category__arrow">
          <IconArrow className="documents-category__icon-arrow" />
        </span>
      </li>
    </Link>
  );
}
