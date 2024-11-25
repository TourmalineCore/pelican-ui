import { NewsPageProps } from "../types";
import { NEWS_LIST } from "./news-list-mock";

export const NEWS_PAGE: NewsPageProps = {
  id: 1,
  title: `Новости`,
  blocks: [NEWS_LIST],
};
