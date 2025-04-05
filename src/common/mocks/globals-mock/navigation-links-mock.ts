import { AppRoute } from "../../enum";
import { GlobalComponentProps } from "../../types";

// TODO: maybe this applies to collections?
export const MOCK_NAVIGATION_LINKS: GlobalComponentProps['navigationLinks'] = [
  {
    id: 1,
    name: `Льготы`,
    link: `https://vk.com/topic-71671982_48253263`,
  },
  // TODO: Uncomment when the page appears
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
    id: 4,
    name: `Документы`,
    link: AppRoute.DOCUMENTS,
  },
  {
    id: 5,
    name: `Новости`,
    link: AppRoute.NEWS,
  },
  {
    id: 6,
    name: `Правила посещения`,
    link: AppRoute.VISITING_RULES,
  },
];
