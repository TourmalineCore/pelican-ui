import Plyr from 'plyr-react';
import { Options, Source } from 'plyr';
import 'plyr-react/plyr.css';

type VideoProps = {
  className?: string,
  title?: string,
  sources: Source,
  options?: Options,
};

export function Video({
  className,
  title,
  sources,
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
          sources: [sources],
        }}
        options={options}
      />
    </div>
  );
}
