import { GlobalComponentProps } from "../types";
import iconAdministration1 from '../../../public/images/footer/adm1.png';
import iconAdministration2 from '../../../public/images/footer/adm2.png';
import noFoodImage from '../../../public/images/tickets-popup/no-food.png';
import noBreakingImage from '../../../public/images/tickets-popup/no-breaking.png';
import noClimbingImage from '../../../public/images/tickets-popup/no-climbing.png';
import noPetsImage from '../../../public/images/tickets-popup/no-pets.png';
import noScooterImage from '../../../public/images/tickets-popup/no-scooter.png';
import noSmokingImage from '../../../public/images/tickets-popup/no-smoking.png';
import noTouchingImage from '../../../public/images/tickets-popup/no-touching.png';
import noTeasingImage from '../../../public/images/tickets-popup/no-teasing.png';

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
    name: `Льготы`,
    link: `#`,
  },
  {
    id: 2,
    name: `Услуги`,
    link: `#`,
  },
];

export const FOOTER_ABOUT_LINKS: GlobalComponentProps['footerAboutLinks'] = [
  {
    id: 1,
    name: `Новости`,
    link: `#`,
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

export const TICKETS_POPUP_GENERAL: GlobalComponentProps['ticketsPopupGeneral'] = [
  {
    id: 0,
    category: `Взрослые, дети\u00A0от\u00A014\u00A0лет`,
    price: `400  ₽ / чел`,
  },
  {
    id: 1,
    category: `Дети от 5 до 13 лет`,
    description: ` Требуется оригинал документа`,
    price: `200  ₽ / чел`,
  },
  {
    id: 2,
    category: `Дети до 4 лет`,
    description: `Требуется оригинал документа`,
    price: `Бесплатно`,
  },
];

export const TICKETS_POPUP_SUBSIDIZED: GlobalComponentProps['ticketsPopupSubsidized'] = [
  {
    id: 0,
    category: `Студенты`,
    price: `200  ₽ / чел`,
  },
  {
    id: 1,
    category: `Пенсионеры`,
    price: `200  ₽ / чел`,
  },
  {
    id: 2,
    category: `Многодетные семьи (1 раз в месяц)`,
    price: `Бесплатно`,
  },
  {
    id: 3,
    category: `Инвалиды I группы с сопровождающим`,
    price: `Бесплатно`,
  },
  {
    id: 4,
    category: `Инвалиды II группы`,
    price: `Бесплатно`,
  },
];

export const TICKETS_POPUP_RULES_IMAGES: GlobalComponentProps['ticketsPopupRulesImages'] = [
  {
    url: noFoodImage,
    alt: `Нельзя кормить животных`,
  },
  {
    url: noPetsImage,
    alt: `Нельзя с домашними животными`,
  },
  {
    url: noSmokingImage,
    alt: `Нельзя курить`,
  },
  {
    url: noScooterImage,
    alt: `Нельзя ездить на самокате`,
  },
  {
    url: noClimbingImage,
    alt: `Нельзя перелезать через ограждение`,
  },
  {
    url: noTouchingImage,
    alt: `Нельзя трогать животных`,
  },
  {
    url: noTeasingImage,
    alt: `Нельзя дразнить животных`,
  },
  {
    url: noBreakingImage,
    alt: `Нельзя ломать деревья`,
  },
];
