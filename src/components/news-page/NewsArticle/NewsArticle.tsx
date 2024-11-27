import { MarkdownText } from "../../globals/MarkdownText/MarkdownText";

export function NewsArticle({
  title,
  date,
  articleContent,
}: {
  title: string,
  date: string,
  articleContent: any
}) {
  return (
    <div className="news-article">
      <span className="news-article__date">{date}</span>
      <h2 className="news-article__title">{title}</h2>
      <MarkdownText className="news-article__content">
        {articleContent}
      </MarkdownText>
    </div>
  );
}
