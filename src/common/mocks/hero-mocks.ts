import { GlobalComponentProps } from "@/src/common/types";

export const HERO_TITLE: GlobalComponentProps['heroTitle'] = `Челябинский зоопарк`;
export const SCHEDULE_TITLE: GlobalComponentProps['scheduleTitle'] = `График работы`;
export const SCHEDULE_TIMETABLE: GlobalComponentProps['scheduleTimetable'] = [
  {
    days: `Понедельник - четверг`,
    time: `10:00-18:00`,
    ticketsOfficeTime: `(вход и касса 11:00-17:00)`,
  },
  {
    days: `Пятница – воскресенье, праздники`,
    time: `10:00-19:00`,
    ticketsOfficeTime: `(вход и касса 11:00-18:00)`,
  },
];
export const CLEANUP_TITLE: GlobalComponentProps['cleanupTitle'] = `29 октября зоопарк не работает`;
export const CLEANUP_DESCRIPTION: GlobalComponentProps['cleanupDescription'] = `Каждый последний понедельник месяца санитарный день.`;
