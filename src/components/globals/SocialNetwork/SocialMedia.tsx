import Link from "next/link";
import React from "react";
import { IconVk } from "./components/IconVk/IconVk";
import { IconTg } from "./components/IconTg/IconTg";
import { IconOk } from "./components/IconOk/IconOk";
import { IconDzen } from "./components/IconDzen/IconDzen";

// TODO: get link from api
const ICONS = [
  {
    id: 1,
    icon: IconVk,
    link: `#`,
  },
  {
    id: 2,
    icon: IconTg,
    link: `#`,
  },
  {
    id: 3,
    icon: IconOk,
    link: `#`,
  },
  {
    id: 4,
    icon: IconDzen,
    link: `#`,
  },
];

export function SocialMedia({
  className,
}: {
  className: string,
}) {
  return (
    <>
      {ICONS.map(({
        id,
        icon,
        link,
      }) => (
        <Link
          className={`${className}`}
          href={link}
          key={id}
        >
          {React.createElement(icon)}
        </Link>
      ))}
    </>
  );
}
