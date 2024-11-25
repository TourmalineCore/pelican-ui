import { GlobalComponentProps } from "../types";
import iconAdministration1 from '../../../public/images/footer/adm1.png';
import iconAdministration2 from '../../../public/images/footer/adm2.png';
import { AppRoute } from "../enum";

export const EMAIL = `metodist@chelzoo.ru`;
export const PHONE = `+7 (351) 263-18-64`;
export const POPUP_TICKET_BUY_TEXT = `Билеты`;
export const FOOTER_NAV_TITLE_LEFT = `Посетителям`;
export const FOOTER_NAV_TITLE_RIGHT = `О зоопарке`;

export const NAVIGATION_LINKS: GlobalComponentProps['navigationLinks'] = [
  {
    id: 1,
    name: `Льготы`,
    link: `#`,
  },
  {
    id: 2,
    name: `Правила посещения`,
    link: `#`,
  },
  {
    id: 3,
    name: `Адрес`,
    link: `#`,
  },
  {
    id: 4,
    name: `Услуги`,
    link: `#`,
  },
  {
    id: 5,
    name: `Документы`,
    link: `#`,
  },
];

export const FOOTER_USER_LINKS: GlobalComponentProps['footerUserLinks'] = [
  {
    id: 1,
    name: `Услуги`,
    link: `#`,
  },
  {
    id: 2,
    name: `Билеты`,
    link: `#`,
  },
  {
    id: 3,
    name: `Льготы`,
    link: `#`,
  },
];

export const FOOTER_ABOUT_LINKS: GlobalComponentProps['footerAboutLinks'] = [
  {
    id: 1,
    name: `Новости`,
    link: AppRoute.NEWS,
  },
  {
    id: 2,
    name: `Документы`,
    link: `#`,
  },
  {
    id: 3,
    name: `Правила посещения`,
    link: `#`,
  },
  {
    id: 4,
    name: `Оставить отзыв`,
    link: `https://docs.google.com/forms/d/11AMCo0nMCon6-_VX07lrWRhniSAd0Dei-gl1m_DS1Y0/viewform?hl=ru&hl=ru&edit_requested=true`,
  },
];

export const OFFICIAL_LINKS: GlobalComponentProps['officialLinks'] = [
  {
    id: 1,
    name: `Управление культуры администрации\u00A0г.\u00A0Челябинска`,
    link: `#`,
    icon: iconAdministration1,
    alt: `Иконка`,
  },
  {
    id: 2,
    name: `Министерство культуры Челябинской области`,
    link: `#`,
    icon: iconAdministration2,
    alt: `Иконка`,
  },
  {
    id: 3,
    name: `Администрация г.\u00A0Челябинска`,
    link: `#`,
    icon: iconAdministration1,
    alt: `Иконка`,
  },
];
