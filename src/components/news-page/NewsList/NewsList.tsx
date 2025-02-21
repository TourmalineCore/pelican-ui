import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NewsArticleProps } from "@/src/common/types";
import { AppRoute } from "@/src/common/enum";
import { Cards } from "../../globals/Cards/Cards";
import { Button } from "../../globals/Button/Button";

export const NEWS_LIMIT = 6;

export function NewsList({
  newsTitle,
  news,
  total,
}: {
  newsTitle: string,
  news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[]
  total: number;
}) {
  const [pageSize, setPageSize] = useState(NEWS_LIMIT);
  const router = useRouter();

  useEffect(() => {
    router.replace({
      query: {
        pageSize,
      },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  const isPaginationAvailable = pageSize < total;

  return (
    <Cards
      className="news-list"
      dataTestId="news-list"
      title={newsTitle}
      cards={news.map((newsItem) => ({
        ...newsItem,
        link: `${AppRoute.NEWS}/${newsItem.slug}`,
      }))}
    >
      {isPaginationAvailable && (
        <div className="news-list__button-container">
          <Button
            className="news-list__button"
            data-testid="news-list-button"
            theme="primary"
            onClick={() => setPageSize(pageSize + NEWS_LIMIT)}
          >
            Загрузить ещё
          </Button>
        </div>
      )}
    </Cards>
  );
}
