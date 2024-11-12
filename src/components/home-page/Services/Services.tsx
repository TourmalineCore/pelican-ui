import { ServicesComponentProps } from "@/src/common/types";
import { ServicesCard } from "./components/ServicesCard";

export function Services({
  title,
  cards,
}: Omit<ServicesComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="services "
      data-testid="services"
    >
      <h2 className="services__title container">{title}</h2>
      <ul className="services__cards">
        {cards.map((card) => (
          <ServicesCard
            className="services__card"
            key={card.id}
            labels={card.labels}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </ul>
    </section>
  );
}
