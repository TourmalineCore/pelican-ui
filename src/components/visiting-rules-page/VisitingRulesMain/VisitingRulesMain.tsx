import { VisitingRulesMainComponentProps } from "@/src/common/types";
import { VisitingRulesInfo } from "./components/VisitingRulesInfo/VisitingRulesInfo";
import { VisitingRulesList } from "./components/VisitingRulesList/VisitingRulesList";

export function VisitingRulesMain({
  title,
  link,
  description,
  cardsTitle,
  cards,
}: Omit<VisitingRulesMainComponentProps, 'id' | '__component'>) {
  return (
    <section
      className="visiting-rules-main"
      data-testid="visiting-rules-main"
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
