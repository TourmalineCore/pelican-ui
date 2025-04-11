import Link from "next/link";
import { CategoryProps } from "@/src/common/types";
import { IconArrow } from "./components/IconArrow/IconArrow";

export function Category({
  className,
  slug,
  pageUrl,
  title,
}: {
  className: string;
  slug: CategoryProps['slug'];
  pageUrl: CategoryProps['pageUrl'];
  title: CategoryProps['title'];
}) {
  return (
    <li className={`${className} category`}>
      <Link
        className="category__wrapper"
        href={{
          pathname: `${pageUrl}/${slug}`,
        }}
        aria-label={`Перейти на страницу категории ${title}`}
        data-testid="category"
      >
        <h2 className="category__title">{title}</h2>
        <span className="category__arrow">
          <IconArrow className="category__icon-arrow" />
        </span>
      </Link>
    </li>
  );
}
