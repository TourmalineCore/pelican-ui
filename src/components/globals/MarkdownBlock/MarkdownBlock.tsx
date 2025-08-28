/* eslint-disable react/no-unstable-nested-components */
import { MarkdownText } from '../MarkdownText/MarkdownText';

export function MarkdownBlock({
  markdown,
}: {
  markdown: string;
}) {
  return (
    <MarkdownText className="markdown-block container">
      {markdown}
    </MarkdownText>
  );
}
