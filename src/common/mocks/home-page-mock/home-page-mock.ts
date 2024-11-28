import { HomePageProps } from "../../types";
import { CONTACT_ZOO_PREVIEW } from "./contact-zoo-preview-mock";
import { HERO } from "./hero-mock";
import { MAP } from "./map-mock";
import { SERVICES } from "./services-mock";
import { TICKETS } from "./tickets-mock";
import { TEXT_AND_MEDIA } from "./text-and-media-mock";

export const HOME_PAGE: HomePageProps = {
  id: 1,
  title: `Домашняя страница`,
  blocks: [
    HERO,
    TEXT_AND_MEDIA,
    SERVICES,
    CONTACT_ZOO_PREVIEW,
    TICKETS,
    MAP,
  ],
};
