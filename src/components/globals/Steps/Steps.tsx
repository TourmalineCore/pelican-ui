import { SharedStepsCardComponent } from "@/src/common/api-types";
import { DiscountsRulesCard } from "../../discounts-page/DiscountsTerms/components/DiscountsRulesCard";

export function Steps({
  subtitle,
  stepsCards,
}: {
  subtitle?: string;
  stepsCards: SharedStepsCardComponent[];
}) {
  return (
    <section
      className="discounts-terms"
      data-testid="discounts-terms"
    >
      <div className="discounts-terms__rules">
        {subtitle && (
          <h2 className="discounts-terms__rules-title container">{subtitle}</h2>
        )}
        {stepsCards && (
          <ol className="discounts-terms__list container">
            {stepsCards.map((card) => (
              <DiscountsRulesCard
                key={card.id}
                text={card.text}
              />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
