import { BlockTypes } from "../enum";
import { ServicesComponentProps } from "../types";
import excurtionImage from "../../../public/images/services/excursion.png";
import questImage from "../../../public/images/services/quest.png";
import contactLessonImage from "../../../public/images/services/contact-lesson.png";
import exitLecturesImage from "../../../public/images/services/exit-lectures.png";

export const SERVICES: ServicesComponentProps = {
  id: 3,
  __component: BlockTypes.SERVICES,
  title: `Наши услуги`,
  phoneText: `Уточнить вопросы можно по телефону:`,
  emailText: `Запись осуществляется по почте:`,
  cards: [
    {
      id: 0,
      image: {
        url: excurtionImage,
        alt: `Фотография процесса проведения экскурсии`,
      },
      labels: [`Запись за 5 дней`, `От 10 человек`],
      title: `Экскурсии`,
      description: `Увидите основные экспозиции и узнаете много интересных фактов об обитателях нашего зоопарка.`,
    },
    {
      id: 1,
      image: {
        url: questImage,
        alt: `Фотография процесса проведения квеста`,
      },
      labels: [`Запись за 5 дней`, `От 10 человек`],
      title: `Квест`,
      description: `В форме квеста-путешествия разгадаете загадки и узнаете интересные факты о наших животных.`,
    },
    {
      id: 2,
      image: {
        url: contactLessonImage,
        alt: `Фотография процесса проведения контактного занятия`,
      },
      labels: [`Запись за 5 дней`, `От 5 человек`],
      title: `Контактные занятия`,
      description: `Познакомитесь ближе с разными видами животных и научитесь бережному общению с питомцем.`,
    },
    {
      id: 3,
      image: {
        url: exitLecturesImage,
        alt: `Фотография процесса проведения выездной лекции`,
      },
      labels: [`Запись за 5 дней`],
      title: `Выездные лекции`,
      description: `Прикоснетесь к миру природы с помощью натуральных образцов.`,
    },
  ],
};
