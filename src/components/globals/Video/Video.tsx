/* eslint-disable jsx-a11y/media-has-caption */
// import dynamic from 'next/dynamic';
import { Source } from 'plyr';
import 'plyr-react/plyr.css';

// const Plyr = dynamic(() => import(`plyr-react`), {
//   ssr: false,
// });

type VideoProps = {
  className?: string,
  dataTestid?: string,
  // title?: string,
  sources: Source,
  // options?: Options,
};

export function Video({
  className,
  dataTestid,
  // title,
  sources,
  // options,
}: VideoProps) {
  return (
    <div
      className={className}
      aria-hidden="true"
      data-testid={dataTestid}
    >
      <video
        width="640"
        height="360"
        controls
      >
        <source
          src="/video/text-and-media-video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
