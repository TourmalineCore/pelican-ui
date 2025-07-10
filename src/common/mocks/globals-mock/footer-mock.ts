import iconAdministration1 from '@/public/images/footer/chelyabinsk-coat-of-arms.png';
import iconAdministration2 from '@/public/images/footer/chelyabinsk-coat-of-arms-2.png';
import iconAdministration3 from '@/public/images/footer/chelyabinsk-coat-of-arms-3.png';
import iconAdministration4 from '@/public/images/footer/russia-coat-of-arms.png';
import iconAdministration5 from '@/public/images/footer/default-icon.png';
import { AppRoute } from '../../enum';
import { GlobalComponentProps } from '../../types';

export const MOCK_FOOTER_NAV_TITLE_LEFT = `Посетителям`;
export const MOCK_FOOTER_NAV_TITLE_RIGHT = `О зоопарке`;

export const MOCK_FOOTER_USER_LINKS: GlobalComponentProps['footerUserLinks'] = [
  {
    id: 1,
    name: `Льготы`,
    link: AppRoute.DISCOUNTS,
  },
  {
    id: 2,
    name: `Правила посещения`,
    link: AppRoute.VISITING_RULES,
  },
  // TODO: Uncomment when the page appears
  // {
  //   id: 2,
  //   name: `Услуги`,
  //   link: `#`,
  // },
];

export const MOCK_FOOTER_ABOUT_LINKS: GlobalComponentProps['footerAboutLinks'] = [
  {
    id: 1,
    name: `Новости`,
    link: AppRoute.NEWS,
  },
  {
    id: 2,
    name: `Документы`,
    link: AppRoute.DOCUMENTS,
  },
];

export const MOCK_OFFICIAL_LINKS: GlobalComponentProps['officialLinks'] = [
  {
    id: 1,
    name: `Управление культуры администрации\u00A0г.\u00A0Челябинска`,
    link: `https://kultura174.ru/`,
    icon: iconAdministration1,
    alt: ``,
  },
  {
    id: 2,
    name: `Министерство культуры Челябинской области`,
    link: `https://mincult.gov74.ru/`,
    icon: iconAdministration2,
    alt: ``,
  },
  {
    id: 3,
    name: `Администрация г.\u00A0Челябинска`,
    link: `https://cheladmin.gov74.ru/`,
    icon: iconAdministration1,
    alt: ``,
  },
  {
    id: 4,
    name: `Губернатор Челябинской\u00A0области`,
    link: `https://gubernator74.ru/`,
    icon: iconAdministration3,
    alt: ``,
  },
  {
    id: 5,
    name: `Правительство Челябинской\u00A0области`,
    link: `https://pravmin.gov74.ru/`,
    icon: iconAdministration2,
    alt: ``,
  },
  {
    id: 6,
    name: `Министерство культуры Российской Федерации`,
    link: `https://culture.gov.ru/`,
    icon: iconAdministration4,
    alt: ``,
  },
  {
    id: 7,
    name: `Портал Культура.РФ`,
    link: `https://www.culture.ru/`,
    icon: iconAdministration5,
    alt: ``,
  },
];
