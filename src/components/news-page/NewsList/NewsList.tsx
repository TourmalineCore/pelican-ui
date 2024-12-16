import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NewsProps } from "@/src/common/mocks/news-page-mock/news-mock";
import { NewsCard } from "./components/NewsCard/NewsCard";
import { Button } from "../../globals/Button/Button";

export const NEWS_LIMIT = 6;

export function NewsList({
  title,
  news,
  total,
}: {
  news: NewsProps[]
  title: string,
  total: number;
}) {
  const [pageSize, setPageSize] = useState(NEWS_LIMIT);
  const router = useRouter();

  useEffect(() => {
    router.push({
      query: {
        pageSize,
      },
    });
  }, [pageSize]);

  const isPaginationAvailable = pageSize < total;

  return (
    <section
      className="news-list"
      data-testid="news-list"
    >
      <div className="news-list__wrapper container">
        <h1 className="news-list__title">{title}</h1>
        <ul className="news-list__cards">
          {news.map((newsCard) => (
            <NewsCard
              id={newsCard.id}
              className="news-list__card"
              dataTestId="news-list-card"
              key={newsCard.id}
              image={newsCard.image}
              title={newsCard.title}
              description={newsCard.description}
            />
          ))}
        </ul>
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
      </div>
    </section>
  );
}
