import LargeImageSrc from "@/public/images/not-found/bear.svg";
import SmallImageSrc from "@/public/images/contact-zoo/contact-zoo-geese.svg";
import { NotFoundComponentProps } from "../types";
import { BlockTypes } from "../enum";

export const NOT_FOUND: NotFoundComponentProps = {
  id: 1,
  __component: BlockTypes.NOT_FOUND,
  title: `404`,
  subtitle: `Ой, что-то пошло не так`,
  note: `Страница не найдена или не существует`,
  largeImage: {
    url: LargeImageSrc,
    alt: `Медведь`,
  },
  smallImage: {
    url: SmallImageSrc,
    alt: `Гуси`,
  },
};
