import qs from 'qs';
import { HeaderResponse } from '../api-types';
import { api } from './HttpClient';

export async function getGlobalData() {
  const headerPopulateList = [
    `ticketsPopup.generalTickets`,
    `ticketsPopup.subsidizedTicket.categories`,
    `ticketsPopup.subsidizedTicket.button`,
    `ticketsPopup.accordionVisitingRules.images`,
    `ticketsPopup.accordionVisitingRules.button`,
    `ticketsPopup.accordionTicketRefund.refundBody`,
    `ticketsPopup.accordionTicketRefund.button`,
    `ticketsPopup.buyTicketsButton`,
  ];

  const headerResponse: HeaderResponse = await api.get(`/header?${qs.stringify({
    populate: headerPopulateList,
  })}`);

  return {
    ticketsPopup: headerResponse.data?.ticketsPopup,
  };
}
