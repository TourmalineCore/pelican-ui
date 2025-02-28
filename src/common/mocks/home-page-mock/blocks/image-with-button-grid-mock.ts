import LargeImageSrc from "@/public/images/contact-zoo/contact-zoo-large.png";
import SmallImageSrc from "@/public/images/contact-zoo/contact-zoo-small.png";
import { ImageWithButtonGridComponentProps } from "../../../types";
import { AppRoute, BlockTypes } from "../../../enum";

export const MOCK_IMAGE_WITH_BUTTON_GRID: ImageWithButtonGridComponentProps = {
  id: 4,
  __component: BlockTypes.SHARED_IMAGE_WITH_BUTTON_GRID,
  title: `Один из первых и самых больших контактных зоопарков`,
  description: `В этой части зоопарка вы почувствуете себя вдали от городской суеты в компании кур, гусей, коз и многих других животных.`,
  largeImage: {
    url: LargeImageSrc,
    alternativeText: ``,
  },
  smallImage: {
    url: SmallImageSrc,
    alternativeText: ``,
  },
  link: AppRoute.CONTACT_ZOO,
  label: `Подробнее`,
};
