/* eslint-disable react/no-unstable-nested-components */
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

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
    // components={{
    //   img: (props: any) => (
    //     <Image
    //       src={props.src}
    //       alt={props.alt}
    //       fill
    //     />
    //   ),
    // }}
    >
      {formatTextWithLineBreaks(children)}
    </ReactMarkdown>
  );
}

function formatTextWithLineBreaks(text: string) {
  return text.replace(/\n/g, `<br />`);
}
