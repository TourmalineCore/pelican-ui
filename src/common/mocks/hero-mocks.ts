import heroImage from '../../../public/images/hero/hero-main-page.png';
import { BlockTypes } from "../enum";
import { HeroComponentProps } from '../types';

export const HERO: HeroComponentProps = {
  id: 1,
  __component: BlockTypes.HERO,
  title: `Челябинский зоопарк`,
  image: {
    url: heroImage,
    alt: `Изображение львов`,
  },
  scheduleTitle: `График работы`,
  scheduleTimetables: [
    {
      id: 0,
      days: `Понедельник - четверг`,
      time: `10:00-18:00`,
      ticketsOfficeTime: `(вход и касса 10:00-17:00)`,
    },
    {
      id: 1,
      days: `Пятница – воскресенье, праздники`,
      time: `10:00-19:00`,
      ticketsOfficeTime: `(вход и касса 10:00-18:00)`,
    },
  ],
  infoCardTitle: `29 октября зоопарк не работает`,
  infoCardDescription: `Каждый последний понедельник месяца санитарный день.`,
};