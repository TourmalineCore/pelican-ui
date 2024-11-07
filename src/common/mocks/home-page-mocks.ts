import { HomePageProps } from "../types";
import {
  HERO_IMAGE, HERO_TITLE,
  INFO_CARD_DESCRIPTION,
  INFO_CARD_TITLE,
  SCHEDULE_TIMETABLES,
  SCHEDULE_TITLE,
} from "./hero-mocks";

export const HOME_PAGE: HomePageProps = {
  id: 1,
  title: `Домашняя страница`,
  blocks: [{
    id: 1,
    __component: `home.hero`,
    title: HERO_TITLE,
    image: HERO_IMAGE,
    scheduleTitle: SCHEDULE_TITLE,
    scheduleTimetables: SCHEDULE_TIMETABLES,
    infoCardTitle: INFO_CARD_TITLE,
    infoCardDescription: INFO_CARD_DESCRIPTION,
  }],

};
