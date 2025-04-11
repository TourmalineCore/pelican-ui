import dayjs from "dayjs";
import clsx from "clsx";
import { ArticleComponentProps } from "@/src/common/types";
import { MarkdownText } from "../MarkdownText/MarkdownText";

export function Article({
  title,
  date,
  innerContent,
  isFirstBlock,
  isLastBlock,
  className,
}: {
  title: ArticleComponentProps['title'];
  date: ArticleComponentProps['publishedAt'];
  innerContent: ArticleComponentProps['innerContent'];
  isFirstBlock: ArticleComponentProps['isFirstBlock'];
  isLastBlock: ArticleComponentProps['isLastBlock'];
  className?: string;
}) {
  return (
    <div
      className={clsx(
        `article`,
        className,
        {
          'first-block': isFirstBlock,
          'last-block': isLastBlock,
        },
      )}
      data-testid="article"
    >
      {date
        && (
          <span className="article__date">
            {
              dayjs(date)
                .format(`DD.MM.YYYY`)
            }
          </span>
        )}
      <h1 className="article__title">{title}</h1>
      <MarkdownText className="article__content">
        {innerContent}
      </MarkdownText>
    </div>
  );
}
