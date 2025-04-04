import { AppRoute } from "../../enum";
import { GlobalComponentProps } from "../../types";

// TODO: maybe this applies to collections?
export const MOCK_NAVIGATION_LINKS: GlobalComponentProps['navigationLinks'] = [
  {
    id: 1,
    name: `Льготы`,
    link: AppRoute.DISCOUNTS,
  },
  // TODO: Uncomment when the page appears
  // {
  //   id: 2,
  //   name: `Правила посещения`,
  //   link: `#`,
  // },
  // {
  //   id: 3,
  //   name: `Адрес`,
  //   link: `#`,
  // },
  // {
  //   id: 4,
  //   name: `Услуги`,
  //   link: `#`,
  // },
  {
    id: 5,
    name: `Документы`,
    link: AppRoute.DOCUMENTS,
  },
  {
    id: 6,
    name: `Новости`,
    link: AppRoute.NEWS,
  },
];
