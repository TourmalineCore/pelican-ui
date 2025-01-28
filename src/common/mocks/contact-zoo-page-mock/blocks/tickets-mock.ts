import { BlockTypes } from "../../../enum";
import { TicketsComponentProps } from '../../../types';

export const MOCK_CONTACT_ZOO_TICKETS: TicketsComponentProps = {
  id: 5,
  __component: BlockTypes.TICKETS,
  generalTicketsTitle: `Входные билеты`,
  generalTicketsLink: `https://widget.afisha.yandex.ru/w/sessions/ticketsteam-803@37605507?clientKey=3bc42fbd-a832-49aa-a269-79188e18d9e1&regionId=56`,
  subsidizedTicketsTitle: `Льготные билеты`,
  subsidizedTicketsSubtitle: `Купить льготный билет можно только на кассе зоопарка.`,
  generalTickets: [
    {
      id: 0,
      category: `Взрослые, дети\u00A0от\u00A014\u00A0лет`,
      price: `400  ₽ / чел`,
    },
    {
      id: 1,
      category: `Дети от 5 до 13 лет`,
      description: `Требуется подтверждающий документ.`,
      price: `200  ₽ / чел`,
    },
    {
      id: 2,
      category: `Дети до 4 лет`,
      description: `Требуется подтверждающий документ.`,
      price: `Бесплатно`,
    },
  ],
  subsidizedTickets: [
    {
      id: 0,
      category: `Многодетные семьи`,
      description: `Требуется подтверждающий документ.`,
      price: `Бесплатно`,
      frequency: `1 раз в месяц`,
    },
    {
      id: 1,
      category: `Пенсионеры, студенты`,
      description: `Требуется подтверждающий документ.`,
      price: `200  ₽ / чел`,
    },
    {
      id: 2,
      category: `Инвалиды I и II групп`,
      description: `Требуется подтверждающий документ.`,
      price: `Бесплатно`,
    },
  ],
};
