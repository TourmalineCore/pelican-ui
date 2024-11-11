import { HomePageProps } from "../types";
import {
  HERO_IMAGE, HERO_TITLE,
  INFO_CARD_DESCRIPTION,
  INFO_CARD_TITLE,
  SCHEDULE_TIMETABLES,
  SCHEDULE_TITLE,
} from "./hero-mocks";
import {
  CONTACT_ZOO_PREVIEW_TITLE,
  CONTACT_ZOO_PREVIEW_DESCRIPTION,
  CONTACT_ZOO_PREVIEW_LARGE_IMAGE,
  CONTACT_ZOO_PREVIEW_SMALL_IMAGE,
} from "./contact-zoo-preview-mocks";

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
  },
  {
    id: 2,
    __component: `home.contact-zoo-preview`,
    title: CONTACT_ZOO_PREVIEW_TITLE,
    description: CONTACT_ZOO_PREVIEW_DESCRIPTION,
    largeImage: CONTACT_ZOO_PREVIEW_LARGE_IMAGE,
    smallImage: CONTACT_ZOO_PREVIEW_SMALL_IMAGE,
  }],
};
