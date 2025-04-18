import { BlockTypes } from "@/src/common/enum";
import { E2E_UI_NAME_PREFIX } from "./helpers/cms-integration-helpers";

export const TEST_MOCK_HERO = {
  __component: BlockTypes.SHARED_HERO,
  title: `${E2E_UI_NAME_PREFIX} Челябинский зоопарк`,
  infoCard: {
    title: `29 октября зоопарк не работает`,
    description: `Каждый последний понедельник месяца санитарный день.`,
  },
  scheduleCard: {
    title: `График работы`,
    timetable: [
      {
        days: `Понедельник - четверг`,
        time: `10:00-18:00`,
        ticketsOfficeTime: `(вход и касса 10:00-17:00)`,
      },
    ],
  },
};

export const TEST_MOCK_HEADER = {
  ticketsPopup: {
    generalTicketsLink: `#`,
    generalTickets: [
      {
        category: `Взрослые,\nдети от 14 лет`,
        price: `400  ₽ / чел`,
        description: `Требуется подтверждающий документ.`,
      },
    ],
    subsidizedTicket: {
      category: `Льготный`,
      description: `Требуется подтверждающий льготу оригинал документа, покупка только на кассе`,
      categories: [
        {
          category: `Студенты`,
          price: `200  ₽ / чел`,
        },
      ],
      button: {
        label: `Остальные льготные категории`,
      },
    },
    buyTicketsButton: {
      label: `${E2E_UI_NAME_PREFIX} Купить билет`,
      link: `#`,
    },
    note: `Покупая билет, вы соглашаетесь с правилами посещения`,
    visitingRulesAccordion: {
      button: {
        label: `Подробнее о правилах посещения`,
        link: `#`,
      },
    },
    ticketRefundAccordion: {
      refundHead: `Возврат билета осуществляется в следующих случаях:`,
      refundBody: [
        {
          refundReason: `отмены, замены либо переноса оказания услуги по инициативе Зоопарка;`,
        },
      ],
      button: {
        label: `Подробнее о возврате билетов`,
        link: `#`,
      },
    },
  },
};
