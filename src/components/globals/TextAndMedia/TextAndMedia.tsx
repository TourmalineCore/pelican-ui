import { TextAndMediaComponentProps } from "@/src/common/types";
import { Video } from "@/src/components/globals/Video/Video";
import clsx from "clsx";
import Image from "next/image";

export function TextAndMedia({
  title,
  description,
  media,
  contentOrder,
  viewFootsteps,
  isFirstBlock,
  isLastBlock,
}: Omit<TextAndMediaComponentProps, 'id' | '__component'>) {
  return (
    <section
      className={clsx(
        `text-and-media container`,
        {
          'text-and-media--inverse': contentOrder === `Текст справа`,
          'text-and-media--without-footsteps': !viewFootsteps,
          'first-block': isFirstBlock,
          'last-block': isLastBlock,
        },
      )}
      data-testid="text-and-media"
    >
      <div
        className="text-and-media__text"
      >
        <h2 className="text-and-media__title">{title}</h2>
        <p className="text-and-media__description">{description}</p>
      </div>
      {media?.mime?.startsWith(`video`) && (
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
      {media?.mime?.startsWith(`image`) && (
        <div className="text-and-media__media">
          <Image
            src={media.url}
            alt={media.alternativeText}
            fill
            priority
            sizes="(max-width: 768px) 98vw, 48vw"
          />
        </div>
      )}
    </section>
  );
}
