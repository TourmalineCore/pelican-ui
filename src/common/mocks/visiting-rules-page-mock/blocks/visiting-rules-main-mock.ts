import { VisitingRulesMainComponentProps } from "@/src/common/types";
import { BlockTypes } from "../../../enum";

export const MOCK_VISITING_RULES_MAIN: VisitingRulesMainComponentProps = {
  id: 1,
  __component: BlockTypes.VISITING_RULES_MAIN,
  title: `Правила посещения`,
  link: {
    label: `(Открыть документ с правилами посещения)`,
    path: `/documents/Visiting-rules.pdf`,
  },
  description: `Соблюдайте эти простые правила, чтобы посещение зоопарка прошло безопасно для\u00A0Вас и для питомцев зоопарка.`,
  cardsTitle: `Приобретая билет, вы соглашаетесь с\u00A0правилами посещения зоопарка:`,
  cards: [
    {
      id: 0,
      label: `Дети до 13 лет (включительно) могут посещать зоопарк только в\u00A0сопровождении взрослых.`,
      iconUrl: `/images/visiting-rules/kids-only-with-adults.svg`,
    },
    {
      id: 1,
      label: `Запрещены колесные гаджеты.`,
      iconUrl: `/images/visiting-rules/no-wheeled-gadgets.svg`,
    },
    {
      id: 2,
      label: `Не кормить животных.`,
      iconUrl: `/images/visiting-rules/not-feed-animals.svg`,
    },
    {
      id: 3,
      label: `Не приводить животных.`,
      iconUrl: `/images/visiting-rules/not-bring-animals.svg`,
    },
    {
      id: 4,
      label: `Не курить.`,
      iconUrl: `/images/visiting-rules/not-smoke.svg`,
    },
    {
      id: 5,
      label: `Не распивать спиртные напитки.`,
      iconUrl: `/images/visiting-rules/not-drink-alcohol.svg`,
    },
    {
      id: 6,
      label: `Не дразнить животных.`,
      iconUrl: `/images/visiting-rules/not-tease-animals.svg`,
    },
    {
      id: 7,
      label: `Не засовывать ничего в\u00A0клетки.`,
      iconUrl: `/images/visiting-rules/not-stick-smth-into-cages.svg`,
    },
    {
      id: 8,
      label: `Не перелазить ограждения.`,
      iconUrl: `/images/visiting-rules/not-climb-barriers.svg`,
    },
    {
      id: 9,
      label: `Не трогать животных.`,
      iconUrl: `/images/visiting-rules/not-touch-animals.svg`,
    },
    {
      id: 10,
      label: `Не шуметь.`,
      iconUrl: `/images/visiting-rules/not-make-noise.svg`,
    },
  ],
};
