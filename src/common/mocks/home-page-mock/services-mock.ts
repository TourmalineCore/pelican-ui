import excursionImage from "@/public/images/services/excursion.png";
import questImage from "@/public/images/services/quest.png";
import contactLessonImage from "@/public/images/services/contact-lesson.png";
import exitLecturesImage from "@/public/images/services/exit-lectures.png";
import { ServicesComponentProps } from "../../types";
import { BlockTypes } from "../../enum";

export const SERVICES: ServicesComponentProps = {
  id: 3,
  __component: BlockTypes.SERVICES,
  title: `Наши услуги`,
  phoneText: `Уточнить вопросы можно\nпо телефону:`,
  emailText: `Запись осуществляется\nпо почте:`,
  cards: [
    {
      id: 0,
      image: {
        url: excursionImage,
        alternativeText: `Фотография процесса проведения экскурсии`,
      },
      labels: [`Запись за 5 дней`, `От 10 человек`],
      title: `Экскурсии`,
      description: `Увидите основные экспозиции и\u00A0узнаете много\u00A0интересных фактов об\u00A0обитателях нашего\u00A0зоопарка.`,
    },
    {
      id: 1,
      image: {
        url: questImage,
        alternativeText: `Фотография процесса проведения квеста`,
      },
      labels: [`Запись за 5 дней`, `От 10 человек`],
      title: `Квесты`,
      description: `В форме квеста-путешествия разгадаете загадки и\u00A0узнаете интересные факты о\u00A0наших животных.`,
    },
    {
      id: 2,
      image: {
        url: contactLessonImage,
        alternativeText: `Фотография процесса проведения контактного занятия`,
      },
      labels: [`Запись за 5 дней`, `От 5 человек`],
      title: `Контактные занятия`,
      description: `Познакомитесь ближе с\u00A0разными видами животных и\u00A0научитесь бережному общению с\u00A0питомцем.`,
    },
    {
      id: 3,
      image: {
        url: exitLecturesImage,
        alternativeText: `Фотография процесса проведения выездной лекции`,
      },
      labels: [`Запись за 5 дней`],
      title: `Выездные лекции`,
      description: `Прикоснетесь к миру природы с\u00A0помощью натуральных образцов.`,
    },
  ],
};
