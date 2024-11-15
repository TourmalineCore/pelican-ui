import { HomePageProps } from "../types";
import { CONTACT_ZOO_PREVIEW } from "./contact-zoo-preview-mocks";
import { HERO } from "./hero-mocks";
import { SERVICES } from "./services-mocks";

export const HOME_PAGE: HomePageProps = {
  id: 1,
  title: `Домашняя страница`,
  blocks: [
    HERO,
    SERVICES,
    CONTACT_ZOO_PREVIEW,
  ],
};
