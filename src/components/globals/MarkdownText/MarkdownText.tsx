import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function MarkdownText({
  text,
  className,
}: {
  text: string,
  className: string,
}) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      className={className}
    >
      {formatTextWithLineBreaks(text)}
    </ReactMarkdown>
  );
}

function formatTextWithLineBreaks(text: string) {
  return text.replace(/\n/g, `<br />`);
}
