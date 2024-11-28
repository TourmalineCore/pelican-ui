import amurTigerImage from "@/public/images/news-list/amur-tiger.png";
import employeeImage from "@/public/images/news-list/employee.png";
import sanitaryDayImage from "@/public/images/news-list/sanitary-day.png";
import winterModeImage from "@/public/images/news-list/winter-mode.png";
import vacancyImage from "@/public/images/news-list/vacancy.png";
import zooDayImage from "@/public/images/news-list/zoo-day.png";
import alpacaDayImage from "@/public/images/news-list/alpaca-day.png";
import { NewsListComponentProps } from "../../types";

export const NEWS_LIST: NewsListComponentProps = {
  id: 7,
  title: `Новости зоопарка`,
  cards: [
    {
      id: 0,
      image: {
        url: amurTigerImage,
        alt: `Фотография амурского тигра`,
      },
      title: `Амурский тигр и какие у него есть проблемы`,
      description: `Сегодня на Дальнем Востоке, да\u00A0и\u00A0во\u00A0всей России, отмечают День тигра.`,
    },
    {
      id: 1,
      image: {
        url: employeeImage,
        alt: `Фотография рычащего льва`,
      },
      title: `Приглашаем на встречу с\u00A0сотрудником зоопарка`,
      description: `Завтра празднуется два замечательных праздника, которые напрямую связаны с зоопарком...`,
    },
    {
      id: 2,
      image: {
        url: sanitaryDayImage,
        alt: `Фотография леопарда`,
      },
      title: `30 сентября — санитарный день`,
      description: `Завтра, 30 сентября, Челябинский зоопарк ЗАКРЫТ на санитарный день.`,
    },
    {
      id: 3,
      image: {
        url: winterModeImage,
        alt: `Фотография лося`,
      },
      title: `Переходим на зимний режим`,
      description: `Внимание! С 1 октября зоопарк переходит на зимний режим работы!`,
    },
    {
      id: 4,
      image: {
        url: vacancyImage,
        alt: `Фотография убирающегося сотрудника`,
      },
      title: `Вакансия`,
      description: `Открыта вакансия уборщика территории.`,
    },
    {
      id: 5,
      image: {
        url: zooDayImage,
        alt: `Фотография рычащего льва`,
      },
      title: `Приглашаем на День рождения зоопарка`,
      description: `14 сентября будем праздновать День рождения зоопарка.Приглашаем...`,
    },
    {
      id: 6,
      image: {
        url: alpacaDayImage,
        alt: `Фотография женщины с альпакой`,
      },
      title: `Всемирный день альпака`,
      description: `10 сентября отмечается день альпака.`,
    },
  ],
};
