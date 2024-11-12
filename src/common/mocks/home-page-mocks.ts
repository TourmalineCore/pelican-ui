import { HomePageProps } from "../types";
import { HERO } from "./hero-mocks";

export const HOME_PAGE: HomePageProps = {
  id: 1,
  title: `Домашняя страница`,
  blocks: [
    {
      ...HERO,
    },
  ],
};
