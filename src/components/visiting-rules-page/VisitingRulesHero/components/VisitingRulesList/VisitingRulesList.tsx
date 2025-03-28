import Link from "next/link";
import { VisitingRulesHeroComponentProps } from "@/src/common/types";
import { VisitingRulesCard } from "../../../components/VisitingRulesCard/VisitingRulesCard";

export function VisitingRulesList({
  cardsTitle,
  cards,
  link,
} : Pick<VisitingRulesHeroComponentProps, 'cardsTitle' | 'cards' | 'link'>) {
  return (
    <div className="visiting-rules-list">
      <div className="visiting-rules-list__header">
        {cardsTitle}
      </div>
      <ul className="visiting-rules-list__cards">
        {cards.map((card, index) => (
          <VisitingRulesCard
            key={card.id}
            label={card.label}
            iconUrl={card.iconUrl}
            isFirst={index === 0}
            className="visiting-rules-hero-card"
          />
        ))}
      </ul>
      <Link
        className="visiting-rules-list__link button button--secondary"
        href={link.path}
        target="_blank"
        rel="noopener noreferrer"
      >
        Приказ о правилах посещения
      </Link>
    </div>
  );
}
