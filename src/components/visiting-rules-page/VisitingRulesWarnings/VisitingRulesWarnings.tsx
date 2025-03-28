import { VisitingRulesWarningsComponentProps } from "@/src/common/types";
import { VisitingRulesCard } from "../components/VisitingRulesCard/VisitingRulesCard";

export function VisitingRulesWarnings({
  cards,
}: Omit<VisitingRulesWarningsComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="visiting-rules-warnings"
      data-testid="visiting-rules-warnings"
    >
      <ul className="visiting-rules-warnings__cards">
        {cards.map((card) => (
          <VisitingRulesCard
            key={card.id}
            label={card.label}
            isWarning
            className="visiting-rules-warnings-card"
          />
        ))}
      </ul>
    </section>
  );
}
