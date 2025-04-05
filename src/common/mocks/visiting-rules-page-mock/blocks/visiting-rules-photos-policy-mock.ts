import { VisitingRulesPhotosPolicyComponentProps } from "@/src/common/types";
import { BlockTypes } from "../../../enum";

export const MOCK_VISITING_RULES_PHOTOS_POLICY: VisitingRulesPhotosPolicyComponentProps = {
  id: 3,
  __component: BlockTypes.VISITING_RULES_PHOTOS_POLICY,
  cardsTitle: `Правила фото и видео съемки на\u00A0территории зоопарка:`,
  cards: [
    {
      id: 0,
      label: `Профессиональная видеосъемка возможна только при наличии официального разрешения.`,
    },
    {
      id: 1,
      label: `Запрещено коммерческое использование фото и видео с\u00A0животными и сооружениями зоопарка.`,
    },
    {
      id: 2,
      label: `Согласование коммерческих фото\u2011\u00A0и\u00A0видеосъемок с\u00A0администрацией обязательно.`,
    },
    {
      id: 3,
      label: `Запрещено использование мультикоптеров и\u00A0квадрокоптеров.`,
    },
    {
      id: 4,
      label: `Не использовать вспышку при\u00A0любительской съемке.`,
    },
  ],
};
