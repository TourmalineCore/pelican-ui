import Plyr from 'plyr-react';
import { Options, Source, Track } from 'plyr';
import 'plyr-react/plyr.css';

type VideoProps = {
  className?: string,
  title?: string,
  sources: Source[],
  poster?: string,
  tracks?: Track[],
  options?: Options,
};

export function Video({
  className,
  title,
  sources,
  poster,
  tracks,
  options,
}: VideoProps) {
  return (
    <div
      className={className}
    >
      <Plyr
        source={{
          type: `video`,
          title,
          sources,
          poster,
          tracks,
        }}
        options={options}
      />
    </div>
  );
}
