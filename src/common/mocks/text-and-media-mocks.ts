import VideoSrc from "@/public/video/text-and-media-video.mp4";
import { BlockTypes } from "../enum";
import { TextAndMediaComponentProps } from "../types";

export const TEXT_AND_MEDIA: TextAndMediaComponentProps = {
  id: 2,
  __component: BlockTypes.TEXT_AND_MEDIA,
  title: `В зоопарке\n141 вид животных`,
  description: `Снежные барсы, ленивцы, росомахи, гепард и другие редкие животные, которые вас удивят.`,
  video: {
    title: `Видео о зоопарке`,
    src: VideoSrc,
    type: `video/mp4`,
  },
};
