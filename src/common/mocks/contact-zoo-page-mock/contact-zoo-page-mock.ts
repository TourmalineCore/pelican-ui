import { MOCK_CONTACT_ZOO_HERO } from "./blocks/hero-mock";
import { MOCK_CONTACT_ZOO_TICKETS } from "./blocks/tickets-mock";
import { ContactZooPageProps } from "../../types";

export const MOCK_CONTACT_ZOO_PAGE: ContactZooPageProps = {
  seo: {
    metaTitle: `Челябинский зоопарк: контактный зоопарк`,
    metaDescription: `Описание страницы контактного зоопарка`,
  },
  blocks: [MOCK_CONTACT_ZOO_HERO, MOCK_CONTACT_ZOO_TICKETS],
};
