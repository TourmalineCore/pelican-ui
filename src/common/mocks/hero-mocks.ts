import { GlobalComponentProps } from "@/src/common/types";

export const HERO_TITLE: GlobalComponentProps['heroTitle'] = `Челябинский зоопарк`;
export const SCHEDULE_TITLE: GlobalComponentProps['scheduleTitle'] = `График работы`;
export const SCHEDULE_TIMETABLES: GlobalComponentProps['scheduleTimetables'] = [
  {
    id: 0,
    days: `Понедельник - четверг`,
    time: `10:00-18:00`,
    ticketsOfficeTime: `(вход и касса 11:00-17:00)`,
  },
  {
    id: 1,
    days: `Пятница – воскресенье, праздники`,
    time: `10:00-19:00`,
    ticketsOfficeTime: `(вход и касса 11:00-18:00)`,
  },
];
export const INFO_CARD_TITLE: GlobalComponentProps['infoCardTitle'] = `29 октября зоопарк не работает`;
export const INFO_CARD_DESCRIPTION: GlobalComponentProps['infoCardDescription'] = `Каждый последний понедельник месяца санитарный день.`;
