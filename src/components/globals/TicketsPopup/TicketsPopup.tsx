import Image from 'next/image';
import { GlobalComponentProps } from "@/src/common/types";
import { useTicketPopup } from '@/src/common/hooks/useTicketPopup';
import Link from 'next/link';
import { MutableRefObject, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import crossIcon from "@/public/images/tickets-popup/icon-cross.svg";
import iconChevron from "@/public/images/svg/icon-chevron.svg";
import iconChevronGreen from "@/public/images/svg/icon-chevron-green.svg";
import { MOCK_POPUP_TICKET_BUY_TEXT } from '@/src/common/mocks/globals-mock/ticket-mock';
import { Accordion } from "../Accordion/Accordion";
import { TicketsPopupCard } from './components/TicketsPopupCard/TicketsPopupCard';
import { TicketsPopupRulesList } from './components/TicketsPopupRulesList/TicketsPopupRulesList';
import { TicketsPopupRefundReasons } from './components/TicketsPopupRefundReasons/TicketsPopupRefundReasons';

export function TicketsPopup({
  ticketsPopup,
  overlayElementRef,
}: Pick<GlobalComponentProps, "ticketsPopup"> & {
  overlayElementRef: MutableRefObject<null | HTMLElement>
}) {
  const {
    generalTicketsLink,
    generalTickets,
    subsidizedTicket,
    visitingRulesAccordion,
    ticketRefundAccordion,
    buyTicketsButton,
    note,
  } = ticketsPopup;

  const {
    isTicketPopupActive,
    handleTicketPopupToggle,
  } = useTicketPopup();

  useEffect(() => {
    const overlayElement = overlayElementRef.current!;

    if (isTicketPopupActive) {
      overlayElement.classList.add(`is-visible`);
      overlayElement.classList.add(`is-header-hidden`);
      document.querySelector(`body`)!.classList.add(`is-modal-open`);
    }

    return () => {
      overlayElement.classList.remove(`is-visible`);
      overlayElement.classList.remove(`is-header-hidden`);
      document.querySelector(`body`)!.classList.remove(`is-modal-open`);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTicketPopupActive]);

  return (
    <div
      className="tickets-popup"
      role="complementary"
    >
      {isTicketPopupActive && (
        <FocusLock
          returnFocus
        >
          <div
            className="container tickets-popup__inner"
            data-testId="tickets-popup"
          >
            <div className="tickets-popup__head">
              <span className="tickets-popup__title">{MOCK_POPUP_TICKET_BUY_TEXT}</span>
              <button
                type="button"
                className="button tickets-popup__close-btn"
                onClick={handleTicketPopupToggle}
                data-testid="tickets-popup-close-button"
                aria-label="Закрыть модальное окно с билетами"
              >
                <Image
                  priority
                  src={crossIcon}
                  alt="Close tickets popup"
                />
              </button>
            </div>
            <ul className="tickets-popup__cards">
              {generalTickets.map(({
                category,
                price,
                description,
              }) => (
                <TicketsPopupCard
                  key={category}
                  className="tickets-popup__card"
                  category={category}
                  price={price}
                  description={description}
                  link={generalTicketsLink}
                />
              ))}
              <TicketsPopupCard
                key="tickets-popup-card-with-accodion"
                className="tickets-popup__card tickets-popup-card--with-accordion"
                category={subsidizedTicket.category}
                description={subsidizedTicket.description}
              >
                <Accordion
                  triggerText="Подробнее"
                  triggerHideText="Скрыть"
                  className="accordion--ticket-card"
                  icon={iconChevronGreen}
                  ariaLabel="Подробнее о льготных категориях"
                >
                  <ul className="tickets-popup__prices-table">
                    {subsidizedTicket.categories.map(({
                      id,
                      category,
                      price,
                    }) => (
                      <li
                        className="tickets-popup__prices-table-row"
                        key={id}
                      >
                        <span className="tickets-popup__prices-table-category">{category}</span>
                        <span className="tickets-popup__prices-table-price">{price}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    className="tickets-popup__link button button--secondary"
                    // TODO: Change path when the page appears
                    href={subsidizedTicket.button.link}
                    // TODO: Remove when the page appears
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleTicketPopupToggle}
                  >
                    {subsidizedTicket.button.label}
                  </Link>
                </Accordion>
              </TicketsPopupCard>
            </ul>
            <div className="tickets-popup__accordions">
              <Accordion
                triggerText="Правила посещения"
                className="tickets-popup__accordion accordion--ticket-rules"
                icon={iconChevron}
              >
                <TicketsPopupRulesList
                  className="tickets-popup__rules-list"
                  ticketsPopupRulesImages={visitingRulesAccordion.images}
                />
                <Link
                  className="tickets-popup__more-link button button--secondary"
                  href={visitingRulesAccordion.button.link}
                  onClick={handleTicketPopupToggle}
                >
                  {visitingRulesAccordion.button.label}
                </Link>
              </Accordion>
              <Accordion
                triggerText="Возврат билетов"
                className="tickets-popup__accordion tickets-popup__accordion--refund accordion--ticket-rules"
                icon={iconChevron}
              >
                <div className="tickets-popup__refund">
                  <div className="tickets-popup__refund-head">
                    {ticketRefundAccordion.refundHead}
                  </div>
                  <TicketsPopupRefundReasons
                    ticketsPopupRefundReasons={ticketRefundAccordion.refundBody}
                    className="tickets-popup__refund-reasons"
                  />
                  <Link
                    className="tickets-popup__more-link button button--secondary"
                    href={ticketRefundAccordion.button.link}
                    // TODO: Remove when the page appears
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleTicketPopupToggle}
                  >
                    {ticketRefundAccordion.button.label}
                  </Link>
                </div>
              </Accordion>
            </div>
            <Link
              className="tickets-popup__buy-button button button--primary button--featured"
              href={buyTicketsButton.link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="tickets-popup-buy-button"
            >
              {buyTicketsButton.label}
            </Link>
            <p className="tickets-popup__disclaimer">
              {note}
            </p>
          </div>
        </FocusLock>
      )}
    </div>
  );
}
