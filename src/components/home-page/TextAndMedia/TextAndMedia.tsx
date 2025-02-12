import { TextAndMediaComponentProps } from "@/src/common/types";
import { MarkdownText } from "@/src/components/globals/MarkdownText/MarkdownText";
import { Video } from "@/src/components/globals/Video/Video";
import clsx from "clsx";
import Image from "next/image";

export function TextAndMedia({
  title,
  description,
  media,
  contentOrder,
  viewFootsteps,
}: Omit<TextAndMediaComponentProps, 'id' | '__component'>) {
  return (
    <section
      className={clsx(
        `text-and-media container`,
        {
          'text-and-media--inverse': contentOrder === `Видео/изображение слева, текст справа`,
          'text-and-media--withoutFootsteps': !viewFootsteps || contentOrder === `Видео/изображение слева, текст справа`,
        },
      )}
      data-testid="text-and-media"
    >
      <div
        className="text-and-media__text"
      >
        <MarkdownText className="text-and-media__title">{title}</MarkdownText>
        <p className="text-and-media__description">{description}</p>
      </div>
      {media.mime.startsWith(`video`) && (
        <Video
          className="text-and-media__media"
          dataTestid="text-and-media-video"
          title={media.alternativeText}
          sources={
            {
              src: media.url,
              type: media.mime,
            }
          }
          options={{
            loop: {
              active: true,
            },
            muted: true,
            controls: [],
            autoplay: process.env.APP_ENV !== `static`,
            fullscreen: {
              enabled: false,
            },
          }}
        />
      )}
      {media.mime.startsWith(`image`) && (
        <div className="text-and-media__media">
          <Image
            src={media.url}
            alt={media.alternativeText}
            fill
          />
        </div>
      )}
    </section>
  );
}
