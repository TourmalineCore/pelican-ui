import { HomePageProps } from "../types";
import { HERO } from "./hero-mocks";
import { SERVICES } from "./services-mocks";

export const HOME_PAGE: HomePageProps = {
  id: 1,
  title: `Домашняя страница`,
  blocks: [HERO, SERVICES],
};
