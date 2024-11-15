import VideoSrc from "@/public/video/text-and-media-video.mp4";
import { BlockTypes } from "../enum";
import { TextAndMediaComponentProps } from "../types";

export const TEXT_AND_MEDIA: TextAndMediaComponentProps = {
  id: 2,
  __component: BlockTypes.TEXT_AND_MEDIA,
  title: `В зоопарке\n141 вид животных`,
  description: `Снежные барсы, ленивцы, росомахи, гепард и другие редкие животные, которые вас удивят.`,
  video: {
    alt: `Видео о зоопарке`,
    url: VideoSrc,
    mime: `video/mp4`,
  },
};
