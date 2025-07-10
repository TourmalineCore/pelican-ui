import { useRouter } from "next/router";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { NewsArticleProps } from "@/src/common/types";
import { AppRoute, ComponentName } from "@/src/common/enum";
import { Cards } from "../../globals/Cards/Cards";
import { Button } from "../../globals/Button/Button";

export const NEWS_LIMIT = 6;

export function NewsList({
  newsTitle,
  news,
  pageCount,
  isComponentsPage,
}: {
  newsTitle: string;
  news: Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[];
  pageCount: number;
  isComponentsPage?: boolean;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsList, setNewsList] = useState<Omit<NewsArticleProps, 'innerContent' | 'publishedAt'>[]>([]);
  const firstNewsRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const targetPath = isComponentsPage
        ? `${AppRoute.COMPONENTS}/${ComponentName.NEWS_LIST}`
        : AppRoute.NEWS;

      if (router.asPath !== targetPath) {
        router.replace(
          targetPath,
          undefined,
          {
            shallow: true,
          },
        );
      }
    }
  }, [router, isComponentsPage]);

  useEffect(() => {
    setNewsList((prevData) => {
      const newIds = new Set(news.map((item) => item.id));
      const filteredPrev = prevData.filter((item) => !newIds.has(item.id));
      return [...filteredPrev, ...news];
    });

    const timer = setTimeout(() => {
      if (firstNewsRef.current) {
        firstNewsRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news]);

  const isPaginationAvailable = currentPage < pageCount;

  const newsCards = useMemo(
    () => newsList.map((newsItem) => ({
      ...newsItem,
      link: `${AppRoute.NEWS}/${newsItem.slug}`,
    })),
    [newsList],
  );

  return (
    <Cards
      className="news-list"
      dataTestId="news-list"
      title={newsTitle}
      isNews
      cards={newsCards}
      firstCardRef={firstNewsRef}
      currentPageSize={currentPage > 1 ? (currentPage - 1) * NEWS_LIMIT : undefined}
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
    const nextPage = currentPage + 1;
    router.replace({
      query: {
        page: nextPage,
      },
    });

    setCurrentPage(nextPage);
  }
}
