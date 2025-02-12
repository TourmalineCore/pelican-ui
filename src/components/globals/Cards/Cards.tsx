import { CardsComponentProps } from "@/src/common/types";
import { PropsWithChildren } from "react";
import { Card } from "./components/Card/Card";

export function Cards({
  title,
  cards,
  className,
  dataTestId,
  children,
}: Omit<CardsComponentProps, 'id' | '__component'> & PropsWithChildren & {
  className?: string;
  dataTestId?: string;
}) {
  return (
    <section
      className={`container cards ${className}`}
      data-testid={dataTestId}
    >
      <h1 className="cards__title">{title}</h1>
      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            className="cards__card"
            dataTestId="cards-card"
            image={card.image}
            title={card.title}
            description={card.description}
            labels={card.labels}
          />
        ))}
        {children}
      </ul>
    </section>
  );
}
