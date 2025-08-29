/* eslint-disable react/no-unstable-nested-components */
import { MarkdownText } from '../MarkdownText/MarkdownText';

export function MarkdownBlock({
  markdown,
}: {
  markdown: string;
}) {
  return (
    <div className="markdown-block container">
      <MarkdownText className="markdown-block__content">
        {markdown}
      </MarkdownText>
    </div>
  );
}
