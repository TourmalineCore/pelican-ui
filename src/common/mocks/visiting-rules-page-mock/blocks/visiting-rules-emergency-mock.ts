import { VisitingRulesEmergencyComponentProps } from "@/src/common/types";
import { BlockTypes } from "../../../enum";

export const MOCK_VISITING_RULES_EMERGENCY: VisitingRulesEmergencyComponentProps = {
  id: 4,
  __component: BlockTypes.VISITING_RULES_EMERGENCY,
  cardsTitle: `Экстренные службы`,
  cards: [
    {
      id: 0,
      phone: `101`,
      label: `Пожарная (МЧС)`,
    },
    {
      id: 1,
      phone: `102`,
      label: `Полиция`,
    },
    {
      id: 2,
      phone: `103`,
      label: `Скорая помощь`,
    },
    {
      id: 3,
      phone: `104`,
      label: `Аварийная служба`,
    },
  ],
};
