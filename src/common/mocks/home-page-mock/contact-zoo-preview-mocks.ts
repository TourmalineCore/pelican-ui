import LargeImageSrc from "@/public/images/contact-zoo/contact-zoo-large.png";
import SmallImageSrc from "@/public/images/contact-zoo/contact-zoo-small.png";
import { ContactZooPreviewComponentProps } from "../../types";
import { BlockTypes } from "../../enum";

export const CONTACT_ZOO_PREVIEW: ContactZooPreviewComponentProps = {
  id: 4,
  __component: BlockTypes.CONTACT_ZOO_PREVIEW,
  title: `Один из первых и самых больших контактных зоопарков`,
  description: `В этой части зоопарка вы почувствуете себя вдали от городской суеты в компании кур, гусей, коз и многих других животных.`,
  largeImage: {
    url: LargeImageSrc,
    alt: `Изображение кролика`,
  },
  smallImage: {
    url: SmallImageSrc,
    alt: `Изображение кролика`,
  },
};
