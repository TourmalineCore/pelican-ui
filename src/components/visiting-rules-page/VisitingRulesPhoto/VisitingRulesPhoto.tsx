import { VisitingRulesPhotoComponentProps } from "@/src/common/types";
import { VisitingRulesCard } from "../components/VisitingRulesCard/VisitingRulesCard";

export function VisitingRulesPhoto({
  cardsTitle,
  cards,
}: Omit<VisitingRulesPhotoComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="visiting-rules-photo"
      data-testid="visiting-rules-photo"
    >
      <div className="visiting-rules-photo__inner">
        <div className="visiting-rules-photo__header">
          {cardsTitle}
        </div>
        <ul className="visiting-rules-photo__cards">
          {cards.map((card) => (
            <VisitingRulesCard
              key={card.id}
              label={card.label}
              className="visiting-rules-photo-card"
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
