import qs from 'qs';
import { HeaderResponse } from '../api-types';
import { apiFetch } from './HttpClient';

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

  const headerResponse: HeaderResponse = await apiFetch(`/header?${qs.stringify({
    populate: headerPopulateList,
    status: isPreview ? `draft` : `published`,
  })}`);

  return {
    ticketsPopup: headerResponse.data?.ticketsPopup,
  };
}
