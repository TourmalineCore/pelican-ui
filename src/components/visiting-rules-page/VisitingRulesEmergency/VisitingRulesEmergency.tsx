import { VisitingRulesEmergencyComponentProps } from "@/src/common/types";
import { VisitingRulesCard } from "../components/VisitingRulesCard/VisitingRulesCard";

export function VisitingRulesEmergency({
  cardsTitle,
  cards,
}: Omit<VisitingRulesEmergencyComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="visiting-rules-emergency"
      data-testid="visiting-rules-emergency"
    >
      <div className="visiting-rules-emergency__inner">
        <div className="visiting-rules-emergency__header">
          {cardsTitle}
        </div>
        <ul className="visiting-rules-emergency__cards">
          {cards.map((card) => (
            <VisitingRulesCard
              key={card.id}
              label={card.label}
              phone={card.phone}
              className="visiting-rules-emergency-card"
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
