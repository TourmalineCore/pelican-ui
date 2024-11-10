import { HomePageProps } from "../types";
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
    __component: `home.contact-zoo-preview`,
    title: CONTACT_ZOO_PREVIEW_TITLE,
    description: CONTACT_ZOO_PREVIEW_DESCRIPTION,
    largeImage: CONTACT_ZOO_PREVIEW_LARGE_IMAGE,
    smallImage: CONTACT_ZOO_PREVIEW_SMALL_IMAGE,
  }],
};
