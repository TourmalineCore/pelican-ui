import { HomePageProps } from "../types";
import { CONTACT_ZOO_PREVIEW } from "./contact-zoo-preview-mocks";
import { HERO } from "./hero-mocks";
import { TEXT_AND_MEDIA } from "./text-and-media-mocks";

export const HOME_PAGE: HomePageProps = {
  id: 1,
  title: `Домашняя страница`,
  blocks: [
    HERO,
    TEXT_AND_MEDIA,
    CONTACT_ZOO_PREVIEW,
  ],
};
