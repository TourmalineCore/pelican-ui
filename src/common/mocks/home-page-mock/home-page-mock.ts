import { MOCK_CONTACT_ZOO_PREVIEW } from "./blocks/contact-zoo-preview-mock";
import { HOME_MOCK_HERO } from "./blocks/home-hero-mock";
import { MOCK_MAP } from "./blocks/map-mock";
import { MOCK_SERVICES } from "./blocks/services-mock";
import { MOCK_TICKETS } from "./blocks/tickets-mock";
import { MOCK_TEXT_AND_MEDIA } from "./blocks/text-and-media-mock";
import { HomePageProps } from "../../types";

export const MOCK_HOME_PAGE: HomePageProps = {
  seo: {
    metaTitle: `Челябинский зоопарк: главная страница`,
    metaDescription: `Описание главной страницы`,
  },
  blocks: [
    HOME_MOCK_HERO,
    MOCK_TEXT_AND_MEDIA,
    MOCK_SERVICES,
    MOCK_CONTACT_ZOO_PREVIEW,
    MOCK_TICKETS,
    MOCK_MAP,
  ],
};
