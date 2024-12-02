import Link from "next/link";
import { IconArrow } from "./IconArrow/IconArrow";

export function DocumentsCategoriesCard({
  className,
  link,
  title,
}: {
  className: string,
  link: string,
  title: string,
}) {
  return (
    <Link
      className={`${className} documents-categories-card`}
      href={link}
    >
      <li className="documents-categories-card__wrapper">
        <h2 className="documents-categories-card__title">{title}</h2>
        <span className="documents-categories-card__arrow">
          <IconArrow />
        </span>
      </li>
    </Link>
  );
}
