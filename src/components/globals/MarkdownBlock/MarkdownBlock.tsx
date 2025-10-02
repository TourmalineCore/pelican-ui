/* eslint-disable react/no-unstable-nested-components */
import { MarkdownBlockProps } from '@/src/common/types';
import clsx from 'clsx';
import { MarkdownText } from '../MarkdownText/MarkdownText';

export function MarkdownBlock({
  markdown,
  isFirstBlock,
  isLastBlock,
}: Omit<MarkdownBlockProps, '__component'>) {
  return (
    <div className={clsx(
      `markdown-block container`,
      {
        'first-block': isFirstBlock,
        'last-block': isLastBlock,
      },
    )}
    >
      <MarkdownText className="markdown-block__content">
        {markdown}
      </MarkdownText>
    </div>
  );
}
