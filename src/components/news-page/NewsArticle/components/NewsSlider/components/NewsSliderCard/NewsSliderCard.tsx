import { AppRoute } from "@/src/common/enum";
import { NewsArticleProps } from "@/src/common/types";
import Link from "next/link";

export function NewsSliderCard({
  id,
  title,
  description,
}: {
  id: NewsArticleProps['id']
  title: NewsArticleProps['title'],
  description: NewsArticleProps['description']
}) {
  return (
    <Link
      href={`${AppRoute.NEWS}/${id}`}
      className="news-slider-card"
      data-testid="slider-card"
      aria-label={`Перейти на новость с заголовком ${title}`}
    >
      <h3 className="news-slider-card__title">
        {title}
      </h3>
      {description && (
        <p className="news-slider-card__description">
          {description}
        </p>
      )}
    </Link>
  );
}
