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
    link: `https://vk.com/chelzoopark`,
    name: `vkontakte`,
  },
  {
    id: 2,
    icon: IconTg,
    link: `https://t.me/chel_zoo`,
    name: `telegram`,
  },
  {
    id: 3,
    icon: IconOk,
    link: `https://m.ok.ru/chelzoo`,
    name: `odnoklassniki`,
  },
  {
    id: 4,
    icon: IconDzen,
    link: `https://dzen.ru/chelzoo`,
    name: `dzen`,
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
        name,
      }) => (
        <Link
          className={`${className} social-link`}
          href={link}
          key={id}
          aria-label={`Ссылка на ${name}`}
          data-testid={`social-icon-${name}`}
        >
          {React.createElement(icon)}
        </Link>
      ))}
    </>
  );
}
