import { TextAndMediaComponentProps } from "@/src/common/types";
import { MarkdownText } from "@/src/components/globals/MarkdownText/MarkdownText";
import { Video } from "@/src/components/globals/Video/Video";

export function TextAndMedia({
  title,
  description,
  video,
}: Omit<TextAndMediaComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="text-and-media container"
      data-testid="text-and-media"
    >
      <div className="text-and-media__text">
        <MarkdownText
          className="text-and-media__title"
          text={title}
        />
        <p className="text-and-media__description">{description}</p>
      </div>
      <Video
        className="text-and-media__video"
        title={video.title}
        sources={[
          {
            src: video.src,
            type: video.type,
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
