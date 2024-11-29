import { GlobalComponentProps } from "@/src/common/types";
import Link from "next/link";
import { useRouter } from "next/router";

export function HeaderNavigation({
  className,
  navigationLinks,
}: {
  className?: string
  navigationLinks: GlobalComponentProps['navigationLinks'],
}) {
  const router = useRouter();

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
            onClick={(e) => {
              e.preventDefault();
              if (router.pathname !== link) {
                router.push(link);
              }
            }}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
