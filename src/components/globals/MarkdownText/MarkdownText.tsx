/* eslint-disable react/no-unstable-nested-components */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import { Video } from '../Video/Video';

export function MarkdownText({
  children,
  className,
}: {
  children: string,
  className?: string,
}) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className={className}
      components={{
        img(props: any) {
          return (
            <Image
              src={props.src}
              width="500"
              height="500"
              priority
              alt={props.alt}
            />
          );
        },
        video(props: any) {
          const sourceProps = props.children.find(({
            type,
          }: {
            type: string
          }) => type === `source`).props;

          return (
            <Video
              sources={
                {
                  src: sourceProps.src,
                  type: sourceProps.type,
                }
              }
              options={{
                muted: true,
                controls: [
                  `progress`,
                  `play`,
                  `current-time`,
                  `play-large`,
                ],
                fullscreen: {
                  enabled: false,
                },
              }}
            />
          );
        },
      }}
    >
      {formatTextWithLineBreaks(children)}
    </ReactMarkdown>
  );
}

function formatTextWithLineBreaks(text: string) {
  return text.replace(/\n/g, `<br />`);
}
