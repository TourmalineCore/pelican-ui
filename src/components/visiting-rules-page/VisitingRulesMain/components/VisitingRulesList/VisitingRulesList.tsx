import Link from "next/link";
import { VisitingRulesMainComponentProps } from "@/src/common/types";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { VisitingRulesCard } from "../../../components/VisitingRulesCard/VisitingRulesCard";

export function VisitingRulesList({
  cardsTitle,
  cards,
  link,
} : Pick<VisitingRulesMainComponentProps, 'cardsTitle' | 'cards' | 'link'>) {
  const {
    isMobile,
  } = useWindowWidth();

  return (
    <div className="visiting-rules-list">
      <div className="visiting-rules-list__inner container">
        <h2 className="visiting-rules-list__header">
          {cardsTitle}
        </h2>
        <ul className="visiting-rules-list__cards">
          {cards.map((card, index) => (
            <VisitingRulesCard
              key={card.id}
              label={card.label}
              iconUrl={card.iconUrl}
              isFirst={index === 0}
              className="visiting-rules-list__card"
            />
          ))}
        </ul>
        {isMobile && (
          <Link
            className="visiting-rules-list__link button button--secondary"
            href={link.path}
            aria-label="Открыть документ с правилами посещения"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="visiting-rules-document-link"
          >
            Приказ о правилах посещения
          </Link>
        )}
      </div>
    </div>
  );
}
