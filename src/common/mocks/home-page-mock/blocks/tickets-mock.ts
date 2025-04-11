import { AppRoute, BlockTypes } from "../../../enum";
import { HomeTicketsComponentProps } from '../../../types';

export const MOCK_HOME_TICKETS: HomeTicketsComponentProps = {
  id: 5,
  __component: BlockTypes.HOME_TICKETS,
  generalTicketsTitle: `Входные билеты`,
  generalTicketsLink: `https://widget.afisha.yandex.ru/w/sessions/ticketsteam-803@37605507?clientKey=3bc42fbd-a832-49aa-a269-79188e18d9e1&regionId=56`,
  subsidizedTicketsTitle: `Льготные билеты`,
  subsidizedTicketsDescription: `Купить льготный билет можно только на кассе зоопарка.`,
  subsidizedTicketsLink: AppRoute.DISCOUNTS,
  generalTickets: [
    {
      id: 0,
      category: `Взрослые,\nдети от 14 лет`,
      price: `400  ₽ / чел`,
      theme: `Зелёный`,
    },
    {
      id: 1,
      category: `Дети от 5 до 13 лет`,
      description: `Требуется подтверждающий документ.`,
      price: `200  ₽ / чел`,
      theme: `Зелёный`,
    },
    {
      id: 2,
      category: `Дети до 4 лет`,
      description: `Требуется подтверждающий документ.`,
      price: `Бесплатно`,
      theme: `Зелёный`,
    },
  ],
  subsidizedTickets: [
    {
      id: 0,
      category: `Многодетные семьи`,
      description: `Требуется подтверждающий документ.`,
      price: `Бесплатно`,
      frequency: `1 раз в месяц`,
      theme: `Зелёный`,
    },
    {
      id: 1,
      category: `Пенсионеры, студенты`,
      description: `Требуется подтверждающий документ.`,
      price: `200  ₽ / чел`,
      theme: `Зелёный`,
    },
    {
      id: 2,
      category: `Инвалиды I и II групп`,
      description: `Требуется подтверждающий документ.`,
      price: `Бесплатно`,
      theme: `Зелёный`,
    },
  ],
};
