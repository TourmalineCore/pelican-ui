import { BlockTypes } from "../enum";
import { TextAndMediaComponentProps } from "../types";

export const TEXT_AND_MEDIA: TextAndMediaComponentProps = {
  id: 5,
  __component: BlockTypes.TEXT_AND_MEDIA,
  title: `В зоопарке\n141 вид животных`,
  description: `Снежные барсы, ленивцы, росомахи, гепард и другие редкие животные, которые вас удивят.`,
  video: {
    alt: `Видео о зоопарке`,
    url: `/video/text-and-media-video.mp4`,
    mime: `video/mp4`,
  },
};
