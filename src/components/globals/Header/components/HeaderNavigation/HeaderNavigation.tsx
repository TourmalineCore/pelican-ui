import { GlobalComponentProps } from "@/src/types";
import Link from "next/link";

export function HeaderNavigation({
  navigationLinks,
}: {
  navigationLinks: GlobalComponentProps['navigationLinks']
}) {
  return (
    <ul className="header-navigation">
      {navigationLinks.map(({
        id,
        name,
        link,
      }) => (
        <li
          key={id}
          className="header-navigation__item"
        >
          <Link
            href={link}
            className="caption-1 header-navigation__link"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
