/* eslint-disable react/no-unstable-nested-components */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import clsx from 'clsx';
import { Video } from '../Video/Video';

export function MarkdownText({
  children,
  className,
  isTargetBlank,
}: {
  children: string;
  className?: string;
  isTargetBlank?: boolean;
}) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className={className}
      components={{
        a(props: any) {
          return (
            <a
              href={props.href}
              className={clsx(`text-link`, props.className)}
              data-testid="text-link"
              {...(isTargetBlank ? {
                target: `_blank`,
                rel: `noopener noreferrer`,
              } : {
                target: props.target,
                rel: props.rel,
              })}
            >
              {props.children}
            </a>
          );
        },
        img(props: any) {
          return (
            <Image
              src={props.src}
              width="500"
              height="500"
              priority
              alt={props.alt || ``}
            />
          );
        },
        video(props: any) {
          const sourceProps = props.children.find(({
            type,
          }: {
            type: string;
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
      {children}
    </ReactMarkdown>
  );
}
