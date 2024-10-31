import Link from "next/link";

// TODO: replace to cms api?
const MOCK_NAVIGATION = [
  {
    id: 1,
    name: `Услуги`,
  },
  {
    id: 2,
    name: `Правила посещения`,
  },
  {
    id: 3,
    name: `Адрес`,
  },
  {
    id: 4,
    name: `Льготы`,
  },
  // {
  //   id: 5,
  //   name: `Документация`,
  // },
];

export function HeaderNavigation() {
  return (
    <ul className="header-navigation">
      {MOCK_NAVIGATION.map(({ id, name }) => (
        <li
          key={id}
          className="header-navigation__item"
        >
          <Link
            href="#"
            className="caption-1 header-navigation__link"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
