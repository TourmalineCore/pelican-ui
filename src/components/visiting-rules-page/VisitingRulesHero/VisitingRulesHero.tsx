import { VisitingRulesHeroComponentProps } from "@/src/common/types";
import { VisitingRulesInfo } from "./components/VisitingRulesInfo/VisitingRulesInfo";
import { VisitingRulesList } from "./components/VisitingRulesList/VisitingRulesList";

export function VisitingRulesHero({
  title,
  link,
  description,
  cardsTitle,
  cards,
}: Omit<VisitingRulesHeroComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="visiting-rules-hero"
      data-testid="visiting-rules-hero"
    >
      <VisitingRulesInfo
        title={title}
        link={link}
        description={description}
      />
      <VisitingRulesList
        cardsTitle={cardsTitle}
        cards={cards}
        link={link}
      />
    </section>
  );
}
