import qs from 'qs';
import { HeaderResponse } from '../api-types';
import { api } from './HttpClient';

export async function getGlobalData({
  isPreview,
}: {
  isPreview: boolean;
}) {
  const headerPopulateList = [
    `ticketsPopup.generalTickets`,
    `ticketsPopup.subsidizedTicket.categories`,
    `ticketsPopup.subsidizedTicket.button`,
    `ticketsPopup.visitingRulesAccordion.images`,
    `ticketsPopup.visitingRulesAccordion.button`,
    `ticketsPopup.ticketRefundAccordion.refundBody`,
    `ticketsPopup.ticketRefundAccordion.button`,
    `ticketsPopup.buyTicketsButton`,
  ];

  const headerResponse: HeaderResponse = await api.get(`/header?${qs.stringify({
    populate: headerPopulateList,
    status: isPreview ? `draft` : `published`,
  })}`);

  return {
    ticketsPopup: headerResponse.data?.ticketsPopup,
  };
}
