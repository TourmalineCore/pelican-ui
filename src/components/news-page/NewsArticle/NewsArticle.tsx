import { NewsProps } from "@/src/common/mocks/news-page-mock/news-mock";
import dayjs from "dayjs";
import { MarkdownText } from "../../globals/MarkdownText/MarkdownText";

export function NewsArticle({
  title,
  date,
  innerContent,
}: {
  title: NewsProps['title'],
  date: NewsProps['publishedAt'],
  innerContent: NewsProps['innerContent']
}) {
  return (
    <div
      className="news-article"
      data-testid="news-article"
    >
      <span className="news-article__date">
        {
          dayjs(date)
            .format(`DD.MM.YYYY`)
        }
      </span>
      <h1 className="news-article__title">{title}</h1>
      <MarkdownText className="news-article__content">
        {innerContent}
      </MarkdownText>
    </div>
  );
}
