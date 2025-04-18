import { DiscountsTermsComponentProps } from "@/src/common/types";
import { BlockTypes } from "../../../enum";

export const MOCK_DISCOUNTS_TERMS: DiscountsTermsComponentProps = {
  id: 1,
  __component: BlockTypes.DISCOUNTS_TERMS,
  title: `Льготное посещение зоопарка`,
  subtitle: `Чтобы приобрести льготный билет, нужно`,
  rulesCards: [
    {
      id: 0,
      text: `Быть гражданином Российской\u00A0Федерации`,
    },
    {
      id: 1,
      text: `Быть в числе льготных категорий из\u00A0таблицы ниже`,
    },
    {
      id: 2,
      text: `Предьявить оригинал документов, подтверждающих право на\u00A0льготу`,
    },
    {
      id: 3,
      text: `Приобрести билет на кассе зоопарка, а\u00A0не\u00A0через\u00A0сайт `,
    },
  ],
};
