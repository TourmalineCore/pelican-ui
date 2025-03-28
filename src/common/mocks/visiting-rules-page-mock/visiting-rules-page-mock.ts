import { VisitingRulesPageProps } from "../../types";
import { MOCK_VISITING_RULES_EMERGENCY } from "./blocks/visiting-rules-emergency-mock";
import { MOCK_VISITING_RULES_HERO } from "./blocks/visiting-rules-hero-mock";
import { MOCK_VISITING_RULES_PHOTO } from "./blocks/visiting-rules-photo-mock";
import { MOCK_VISITING_RULES_WARNINGS } from "./blocks/visiting-rules-warnings-mock";

export const MOCK_VISITING_RULES_PAGE: VisitingRulesPageProps = {
  seo: {
    metaTitle: `Правила посещения`,
    metaDescription: `Описание страницы правил посещения`,
  },
  blocks: [
    MOCK_VISITING_RULES_HERO,
    MOCK_VISITING_RULES_WARNINGS,
    MOCK_VISITING_RULES_PHOTO,
    MOCK_VISITING_RULES_EMERGENCY,
  ],
};
