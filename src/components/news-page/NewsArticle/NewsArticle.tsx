import { NewsProps } from "@/src/common/mocks/news-page-mock/news-mock";
import { MarkdownText } from "../../globals/MarkdownText/MarkdownText";

export function NewsArticle({
  title,
  date,
  articleContent,
}: {
  title: NewsProps['title'],
  date: NewsProps['publishedAt'],
  articleContent: NewsProps['articleContent']
}) {
  return (
    <div
      className="news-article"
      data-testid="news-article"
    >
      <span className="news-article__date">{date}</span>
      <h1 className="news-article__title">{title}</h1>
      <MarkdownText className="news-article__content">
        {articleContent}
      </MarkdownText>
    </div>
  );
}
