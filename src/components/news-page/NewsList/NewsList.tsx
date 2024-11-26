import { NewsListComponentProps } from "@/src/common/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NewsCard } from "./components/NewsCard";
import { Button } from "../../globals/Button/Button";

export const NEWS_LIMIT = 6;

export function NewsList({
  title,
  cards,
  total,
}: Omit<NewsListComponentProps, 'id' | '__component'> & {
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

  const isPaginationAvailable = pageSize <= total;

  return (
    <section
      className="news-list"
      data-testid="news-list"
    >
      <div className="news-list__wrapper container">
        <h2 className="news-list__title">{title}</h2>
        <ul className="news-list__cards">
          {cards.map((card) => (
            <NewsCard
              className="news-list__card"
              dataTestId="news-list-card"
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
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
