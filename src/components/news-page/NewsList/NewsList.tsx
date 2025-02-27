import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { NewsArticleProps } from "@/src/common/types";
import { AppRoute } from "@/src/common/enum";
import { Cards } from "../../globals/Cards/Cards";
import { Button } from "../../globals/Button/Button";

export const NEWS_LIMIT = 6;

export function NewsList({
  newsTitle,
  news,
  total,
  pageSize,
}: {
  newsTitle: string,
  news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[]
  total: number;
  pageSize: number
}) {
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);
  const firstNewsRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  useEffect(() => {
    setCurrentPageSize(pageSize);

    if (firstNewsRef.current) {
      firstNewsRef.current.focus();
      firstNewsRef.current.scrollIntoView({
        behavior: `smooth`,
        block: `center`,
      });
    }
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
      firstCardRef={firstNewsRef}
      currentPageSize={currentPageSize}
    >
      {isPaginationAvailable && (
        <div className="news-list__button-container">
          <Button
            className="news-list__button"
            data-testid="news-list-button"
            theme="primary"
            onClick={loadMoreNews}
          >
            Загрузить ещё
          </Button>
        </div>
      )}
    </Cards>
  );

  function loadMoreNews() {
    router.replace({
      query: {
        pageSize: currentPageSize + NEWS_LIMIT,
      },
    });
  }
}
