import { BlockTypes } from "../enum";
import { NewsListComponentProps } from "../types";
import excursionImage from "../../../public/images/services/excursion.png";
import questImage from "../../../public/images/services/quest.png";
import contactLessonImage from "../../../public/images/services/contact-lesson.png";
import exitLecturesImage from "../../../public/images/services/exit-lectures.png";

export const NEWS_LIST: NewsListComponentProps = {
  id: 7,
  __component: BlockTypes.NEWS_LIST,
  title: `Новости зоопарка`,
  cards: [
    {
      id: 0,
      image: {
        url: excursionImage,
        alt: `Фотография процесса проведения экскурсии`,
      },
      title: `Экскурсии`,
      description: `Увидите основные экспозиции и\u00A0узнаете много\u00A0интересных фактов об\u00A0обитателях нашего\u00A0зоопарка.`,
    },
    {
      id: 1,
      image: {
        url: questImage,
        alt: `Фотография процесса проведения квеста`,
      },
      title: `Квесты`,
      description: `В форме квеста-путешествия разгадаете загадки и\u00A0узнаете интересные факты о\u00A0наших животных.`,
    },
    {
      id: 2,
      image: {
        url: contactLessonImage,
        alt: `Фотография процесса проведения контактного занятия`,
      },
      title: `Контактные занятия`,
      description: `Познакомитесь ближе с\u00A0разными видами животных и\u00A0научитесь бережному общению с\u00A0питомцем.`,
    },
    {
      id: 3,
      image: {
        url: exitLecturesImage,
        alt: `Фотография процесса проведения выездной лекции`,
      },
      title: `Выездные лекции`,
      description: `Прикоснетесь к миру природы с\u00A0помощью натуральных образцов.`,
    },
  ],
};
