import { CardsComponentProps } from "@/src/common/types";
import { ReactNode, Ref } from "react";
import clsx from "clsx";
import { Card } from "./components/Card/Card";

export function Cards({
  title,
  cards,
  className,
  dataTestId,
  children,
  childrenList,
  firstCardRef,
  currentPageSize,
  isNews,
}: Omit<CardsComponentProps, 'id' | '__component'> & {
  children?: ReactNode;
  childrenList?: ReactNode;
  className?: string;
  dataTestId?: string;
  firstCardRef?: Ref<HTMLAnchorElement>;
  currentPageSize?: number;
  isNews?: boolean;
}) {
  return (
    <section
      className={clsx(
        `container cards`,
        className,
      )}
      data-testid={dataTestId || `cards`}
    >
      {title && isNews
        ? <h1 className="cards__title">{title}</h1>
        : <h2 className="cards__title">{title}</h2>}
      {cards.length > 0 && (
        <ul className="cards__list">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              className="cards__card"
              dataTestId="cards-card"
              image={card.image}
              title={card.title}
              description={card.description}
              labels={card.labels}
              link={card.link}
              firstCardRef={currentPageSize === index ? firstCardRef : null}
              isNews
            />
          ))}
          {childrenList}
        </ul>
      )}
      {children}
    </section>
  );
}
