import { VisitingRulesWarningsComponentProps } from "@/src/common/types";
import { BlockTypes } from "../../../enum";

export const MOCK_VISITING_RULES_WARNINGS: VisitingRulesWarningsComponentProps = {
  id: 2,
  __component: BlockTypes.VISITING_RULES_WARNINGS,
  cards: [
    {
      id: 0,
      label: `Администрация имеет право\u00A0отказать в\u00A0посещении зоопарка в\u00A0случае нарушения настоящих правил.`,
    },
    {
      id: 1,
      label: `Нарушители могут быть привлечены к\u00A0административной, уголовной ответственности правоохранительными органами.`,
    },
    {
      id: 2,
      label: `На территории зоопарка ведется видеонаблюдение и\u00A0регулярное патрулирование службой охраны в\u00A0целях обеспечения безопасности.`,
    },
    {
      id: 3,
      label: `Администрация оставляет за\u00A0собой право размещения материалов, фиксирующих нарушение правил посещения, на\u00A0официальных площадках в\u00A0сети\u00A0интернет.`,
    },
  ],
};
