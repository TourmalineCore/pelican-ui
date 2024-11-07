import { HeroComponentProps } from "@/src/common/types";
import heroImage from '../../../public/images/hero/hero-main-page.png';

export const HERO_TITLE: HeroComponentProps['title'] = `Челябинский зоопарк`;
export const SCHEDULE_TITLE: HeroComponentProps['scheduleTitle'] = `График работы`;
export const SCHEDULE_TIMETABLES: HeroComponentProps['scheduleTimetables'] = [
  {
    id: 0,
    days: `Понедельник - четверг`,
    time: `10:00-18:00`,
    ticketsOfficeTime: `(вход и касса до 17:00)`,
  },
  {
    id: 1,
    days: `Пятница – воскресенье, праздники`,
    time: `10:00-19:00`,
    ticketsOfficeTime: `(вход и касса до 18:00)`,
  },
];
export const INFO_CARD_TITLE: HeroComponentProps['infoCardTitle'] = `29 июля зоопарк не работает`;
export const INFO_CARD_DESCRIPTION: HeroComponentProps['infoCardDescription'] = `Каждый последний понедельник месяца санитарный день.`;
export const HERO_IMAGE: HeroComponentProps['image'] = {
  url: heroImage,
  alt: `Изображение львов`,
};
