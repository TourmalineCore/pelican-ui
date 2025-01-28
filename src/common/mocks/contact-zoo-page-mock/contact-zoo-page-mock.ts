import { MOCK_CONTACT_ZOO_HERO } from "./blocks/hero-mock";
import { MOCK_CONTACT_ZOO_TICKETS } from "./blocks/tickets-mock";
import { ContactZooProps } from "../../types";

export const MOCK_CONTACT_ZOO_PAGE: ContactZooProps = {
  id: 1,
  title: `Челябинский зоопарк: контактный зоопарк`,
  blocks: [MOCK_CONTACT_ZOO_HERO, MOCK_CONTACT_ZOO_TICKETS],
};
