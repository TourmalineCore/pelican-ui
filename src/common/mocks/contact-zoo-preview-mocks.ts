import LargeImageSrc from "@/public/images/contact-zoo/contact-zoo-image1.png";
import SmallImageSrc from "@/public/images/contact-zoo/contact-zoo-image2.png";
import { ContactZooPreviewComponentProps } from "../types";

export const CONTACT_ZOO_PREVIEW_TITLE: ContactZooPreviewComponentProps['title'] = `Один из первых и самых больших контактных зоопарков`;
export const CONTACT_ZOO_PREVIEW_DESCRIPTION: ContactZooPreviewComponentProps['description'] = `
В этой части зоопарка вы почувствуете себя вдали от городской суеты в компании кур, гусей, коз и многих других животных.`;
export const CONTACT_ZOO_PREVIEW_LARGE_IMAGE: ContactZooPreviewComponentProps['largeImage'] = {
  url: LargeImageSrc,
  alt: `Изображение кролика`,
};
export const CONTACT_ZOO_PREVIEW_SMALL_IMAGE: ContactZooPreviewComponentProps['smallImage'] = {
  url: SmallImageSrc,
  alt: `Изображение кролика`,
};
