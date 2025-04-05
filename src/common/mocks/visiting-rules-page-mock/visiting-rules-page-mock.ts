import { VisitingRulesPageProps } from "../../types";
import { MOCK_VISITING_RULES_EMERGENCY_PHONES } from "./blocks/visiting-rules-emergency-phones-mock";
import { MOCK_VISITING_RULES_MAIN } from "./blocks/visiting-rules-main-mock";
import { MOCK_VISITING_RULES_PHOTOS_POLICY } from "./blocks/visiting-rules-photos-policy-mock";
import { MOCK_VISITING_RULES_WARNINGS } from "./blocks/visiting-rules-warnings-mock";

export const MOCK_VISITING_RULES_PAGE: VisitingRulesPageProps = {
  seo: {
    metaTitle: `Правила посещения`,
    metaDescription: `Описание страницы правил посещения`,
  },
  blocks: [
    MOCK_VISITING_RULES_MAIN,
    MOCK_VISITING_RULES_WARNINGS,
    MOCK_VISITING_RULES_PHOTOS_POLICY,
    MOCK_VISITING_RULES_EMERGENCY_PHONES,
  ],
};
