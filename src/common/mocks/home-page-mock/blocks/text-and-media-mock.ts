import { BlockTypes } from "../../../enum";
import { TextAndMediaComponentProps } from "../../../types";

export const MOCK_TEXT_AND_MEDIA: TextAndMediaComponentProps = {
  id: 2,
  __component: BlockTypes.SHARED_TEXT_AND_MEDIA,
  title: `<p>В зоопарке</p> <p>141 вид животных</p>`,
  description: `Снежные барсы, ленивцы, росомахи, гепард и другие редкие животные, которые вас удивят.`,
  media: {
    alternativeText: ``,
    url: `/video/text-and-media-video.mp4`,
    mime: `video/mp4`,
  },
  contentOrder: `Текст слева`,
  viewFootsteps: true,
};
