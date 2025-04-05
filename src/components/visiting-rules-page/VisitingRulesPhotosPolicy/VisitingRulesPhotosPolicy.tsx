import { VisitingRulesPhotosPolicyComponentProps } from "@/src/common/types";
import { VisitingRulesCard } from "../components/VisitingRulesCard/VisitingRulesCard";

export function VisitingRulesPhotosPolicy({
  cardsTitle,
  cards,
}: Omit<VisitingRulesPhotosPolicyComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="visiting-rules-photos-policy"
      data-testid="visiting-rules-photos-policy"
    >
      <div className="visiting-rules-photos-policy__wrapper">
        <div className="visiting-rules-photos-policy__inner container">
          <h2 className="visiting-rules-photos-policy__header">
            {cardsTitle}
          </h2>
          <ul className="visiting-rules-photos-policy__cards">
            {cards.map((card) => (
              <VisitingRulesCard
                key={card.id}
                label={card.label}
                className="visiting-rules-photos-policy__card"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
