import { MarkdownText } from "@/src/components/globals/MarkdownText/MarkdownText";
import { Video } from "@/src/components/globals/Video/Video";
import VideoSrc from "@/public/video/text-and-media-video.mp4";

export function TextAndMedia() {
  return (
    <section
      className="text-and-media container"
      data-testid="text-and-media"
    >
      <div className="text-and-media__text">
        <MarkdownText
          className="text-and-media__title"
          text={`В зоопарке\n141 вид животных`}
        />
        <p className="text-and-media__description">
          Снежные барсы, ленивцы, росомахи, гепард и другие редкие животные, которые вас удивят.
        </p>
      </div>
      <Video
        className="text-and-media__video"
        title="Видео о зоопарке"
        sources={[
          {
            src: VideoSrc,
            type: `video/mp4`,
          },
        ]}
        options={{
          loop: {
            active: true,
          },
          muted: true,
          controls: [],
          autoplay: true,
        }}
      />
    </section>
  );
}
