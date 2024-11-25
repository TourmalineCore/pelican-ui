import { NewsListComponentProps } from "@/src/common/types";

export function NewsList({
  title,
  cards,
}: Omit<NewsListComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="news-list"
      data-testid="news-list"
    >
      <div className="news-list__wrapper container">
        <h2 className="news-list__title">{title}</h2>
      </div>
    </section>
  );
}
