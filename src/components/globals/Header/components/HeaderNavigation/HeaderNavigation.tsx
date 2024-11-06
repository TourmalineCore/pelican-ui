import { GlobalComponentProps } from "@/src/common/types";
import Link from "next/link";

export function HeaderNavigation({
  className,
  navigationLinks,
}: {
  className?: string
  navigationLinks: GlobalComponentProps['navigationLinks'],
}) {
  return (
    <ul className={className || `header-navigation`}>
      {navigationLinks.map(({
        id,
        name,
        link,
      }) => (
        <li
          key={id}
          className={`${className || `header-navigation`}__item`}
        >
          <Link
            href={link}
            className={`${className || `header-navigation`}__link`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
