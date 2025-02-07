
import { BlockTypes } from "../../enum";
import { NotFoundComponentProps } from "../../types";

type NotFoundPageProps = {
  seo: {
    metaTitle: string
  },
  blocks: (
    NotFoundComponentProps
  )[];
};

const MOCK_NOT_FOUND: NotFoundComponentProps = {
  id: 1,
  __component: BlockTypes.NOT_FOUND,
};

export const MOCK_NOT_FOUND_PAGE: NotFoundPageProps = {
  seo: {
    metaTitle: `Страница не найдена`,
  },
  blocks: [MOCK_NOT_FOUND],
};
