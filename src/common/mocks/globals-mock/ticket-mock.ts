
import { GlobalComponentProps } from '../../types';

export const MOCK_POPUP_TICKET_BUY_TEXT = `Билеты`;
export const MOCK_TICKET_BUY_LINK = `https://widget.afisha.yandex.ru/w/sessions/ticketsteam-803@37605507?clientKey=3bc42fbd-a832-49aa-a269-79188e18d9e1&regionId=56`;

export const MOCK_TICKETS_POPUP_GENERAL: GlobalComponentProps['ticketsPopup']['generalTickets'] = [
  {
    id: 0,
    category: `Взрослые,\nдети от 14 лет`,
    price: `400  ₽ / чел`,
  },
  {
    id: 1,
    category: `Дети от 5 до 13 лет`,
    description: `Требуется оригинал документа`,
    price: `200  ₽ / чел`,
  },
  {
    id: 2,
    category: `Дети до 4 лет`,
    description: `Требуется оригинал документа`,
    price: `Бесплатно`,
  },
];

export const MOCK_TICKETS_POPUP_SUBSIDIZED: GlobalComponentProps['ticketsPopup']['subsidizedTicket']['categories'] = [
  {
    id: 0,
    category: `Студенты`,
    price: `200  ₽ / чел`,
  },
  {
    id: 1,
    category: `Пенсионеры`,
    price: `200  ₽ / чел`,
  },
  {
    id: 2,
    category: `Многодетные семьи (1 раз в месяц)`,
    price: `Бесплатно`,
  },
  {
    id: 3,
    category: `Инвалиды I группы с сопровождающим`,
    price: `Бесплатно`,
  },
  {
    id: 4,
    category: `Инвалиды II группы`,
    price: `Бесплатно`,
  },
];

export const MOCK_TICKETS_POPUP_RULES_IMAGES: GlobalComponentProps['ticketsPopup']['accordionVisitingRules']['images'] = [
  {
    url: `/images/tickets-popup/no-food.png`,
    alternativeText: `Нельзя кормить животных`,
  },
  {
    url: `/images/tickets-popup/no-pets.png`,
    alternativeText: `Нельзя с домашними животными`,
  },
  {
    url: `/images/tickets-popup/no-smoking.png`,
    alternativeText: `Нельзя курить`,
  },
  {
    url: `/images/tickets-popup/no-scooter.png`,
    alternativeText: `Нельзя ездить на самокате`,
  },
  {
    url: `/images/tickets-popup/no-climbing.png`,
    alternativeText: `Нельзя перелезать через ограждение`,
  },
  {
    url: `/images/tickets-popup/no-touching.png`,
    alternativeText: `Нельзя трогать животных`,
  },
  {
    url: `/images/tickets-popup/no-teasing.png`,
    alternativeText: `Нельзя дразнить животных`,
  },
  {
    url: `/images/tickets-popup/no-breaking.png`,
    alternativeText: `Нельзя ломать деревья`,
  },
];

export const MOCK_TICKETS_POPUP_REFUND_REASONS: GlobalComponentProps['ticketsPopup']['accordionTicketRefund']['refundBody'] = [
  {
    id: 0,
    refundReason: `отмены, замены либо переноса оказания услуги по инициативе Зоопарка;`,
  },
  {
    id: 1,
    refundReason: `отказа от оказания услуг посетителем по уважительным причинам (болезнь, смерть члена \
    семьи или близкого родственника, и т.п.), при предъявлении подтверждающих документов;`,
  },
  {
    id: 2,
    refundReason: `в иных случаях по решению директора.`,
  },
];

export const MOCK_TICKETS_POPUP: GlobalComponentProps['ticketsPopup'] = {
  generalTicketsLink: `https://widget.afisha.yandex.ru/w/sessions/ticketsteam-803@37605507?clientKey=3bc42fbd-a832-49aa-a269-79188e18d9e1&regionId=56`,
  generalTickets: MOCK_TICKETS_POPUP_GENERAL,
  subsidizedTicket: {
    category: `Льготный`,
    description: `Требуется подтверждающий льготу оригинал документа, покупка только на кассе`,
    categories: MOCK_TICKETS_POPUP_SUBSIDIZED,
    button: {
      label: `Остальные льготные категории`,
      link: `https://vk.com/topic-71671982_48253263`,
    },
  },
  accordionVisitingRules: {
    images: MOCK_TICKETS_POPUP_RULES_IMAGES,
    button: {
      label: `Подробнее о правилах посещения`,
      link: `http://chelzoo.ru/media/articles/2022/05/06/prikaz-221-ot-050522-o-pravilah-posescheniya-2.pdf`,
    },
  },
  accordionTicketRefund: {
    refundHead: `Возврат билета осуществляется в следующих случаях:`,
    refundBody: MOCK_TICKETS_POPUP_REFUND_REASONS,
    button: {
      label: `Подробнее о возврате билетов`,
      link: `http://chelzoo.ru/articles/prikaz-ob-utverzhdenii-pravil-prodazhi-i-vozvrata-/`,
    },
  },
  buyTicketsButton: {
    label: `Купить билет`,
    link: `https://widget.afisha.yandex.ru/w/sessions/ticketsteam-803@37605507?clientKey=3bc42fbd-a832-49aa-a269-79188e18d9e1&regionId=56`,
  },
  note: `Покупая билет, вы соглашаетесь с правилами посещения`,
};
