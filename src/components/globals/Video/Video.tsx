import dynamic from 'next/dynamic';
import { Options, Source } from 'plyr';
import 'plyr-react/plyr.css';

const Plyr = dynamic(() => import(`plyr-react`), {
  ssr: false,
});

type VideoProps = {
  className?: string,
  dataTestid?: string,
  title?: string,
  sources: Source,
  options?: Options,
};

export function Video({
  className,
  dataTestid,
  title,
  sources,
  options,
}: VideoProps) {
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
        options={options}
      />
    </div>
  );
}
