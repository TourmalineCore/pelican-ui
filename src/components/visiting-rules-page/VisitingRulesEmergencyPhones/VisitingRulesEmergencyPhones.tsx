import { VisitingRulesEmergencyPhonesComponentProps } from "@/src/common/types";
import { VisitingRulesCard } from "../components/VisitingRulesCard/VisitingRulesCard";

export function VisitingRulesEmergencyPhones({
  cardsTitle,
  cards,
}: Omit<VisitingRulesEmergencyPhonesComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="visiting-rules-emergency-phones"
      data-testid="visiting-rules-emergency-phones"
    >
      <div className="visiting-rules-emergency-phones__wrapper">
        <div className="visiting-rules-emergency-phones__inner container">
          <h2 className="visiting-rules-emergency-phones__header">
            {cardsTitle}
          </h2>
          <ul className="visiting-rules-emergency-phones__cards">
            {cards.map((card) => (
              <VisitingRulesCard
                key={card.id}
                label={card.label}
                phone={card.phone}
                className="visiting-rules-emergency-phones__card"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
