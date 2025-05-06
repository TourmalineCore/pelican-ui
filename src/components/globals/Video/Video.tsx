import dynamic from 'next/dynamic';
import { Options, Source } from 'plyr';
import 'plyr-react/plyr.css';

const Plyr = dynamic(() => import(`plyr-react`), {
  ssr: false,
});

type VideoProps = {
  className?: string;
  dataTestid?: string;
  title?: string;
  sources: Source;
  options?: Options;
};

export function Video({
  className,
  dataTestid,
  title,
  sources,
  options,
}: VideoProps) {
  const updatedOptions = {
    ...options,

    // turn off downloading https://cdn.plyr.io/3.7.8/plyr.svg
    loadSprite: false,

    // turn off downloading https://cdn.plyr.io/static/blank.mp4
    // this issue help to do this https://github.com/sampotts/plyr/issues/1245
    blankVideo: `/video/text-and-media-video.mp4`,
  };

  return (
    <div
      className={className}
      aria-hidden="true"
      data-testid={dataTestid}
    >
      <Plyr
        source={{
          type: `video`,
          title,
          sources: [sources],
        }}
        options={updatedOptions}
      />
    </div>
  );
}
