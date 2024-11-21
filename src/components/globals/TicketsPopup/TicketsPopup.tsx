import Image from 'next/image';
import { POPUP_TICKET_BUY_TEXT } from "@/src/common/mocks/globals-mock";
import { GlobalComponentProps } from "@/src/common/types";
import { useTicketPopup } from '@/src/common/hooks/useTicketPopup';
import { Accordion } from "../Accordion/Accordion";
import crossIcon from "../../../../public/images/tickets-popup/icon-cross.svg";
import { TicketsPopupCard } from './components/TicketsPopupCard';

export function TicketsPopup({
  ticketsPopupGeneral,
  ticketsPopupSubsidized,
  ticketsPopupRulesImages,
}: Pick<GlobalComponentProps,
"ticketsPopupGeneral" |
"ticketsPopupSubsidized" |
"ticketsPopupRulesImages" |
"popupTicketBuyText">) {
  const {
    isActive,
    handleTicketPopupToggle,
  } = useTicketPopup();

  return (
    <div className="tickets-popup">
      {isActive && (
        <div
          className="container tickets-popup__inner"
          data-testId="tickets-popup"
        >
          <div className="tickets-popup__head">
            <span className="tickets-popup__title">{POPUP_TICKET_BUY_TEXT}</span>
            <button
              type="button"
              className="button tickets-popup__close-btn"
              onClick={handleTicketPopupToggle}
            >
              <Image
                priority
                src={crossIcon}
                alt="Close tickets popup"
              />
            </button>
          </div>
          <ul className="tickets-popup__cards">
            {ticketsPopupGeneral.map(({
              category, price, description,
            }) => (
              <TicketsPopupCard
                key={category}
                className="tickets-popup__card"
                category={category}
                price={price}
                description={description}
              />
            ))}
            <TicketsPopupCard
              key="tickets-popup-card-with-accodion"
              className="tickets-popup__card tickets-popup-card--with-accordion"
              category="Льготный"
              description="Требуется подтверждающий льготу оригинал документа, покупка только на кассе"
            >
              <Accordion
                triggerText="Подробнее"
                triggerHideText="Скрыть"
                className="accordion--ticket-card"
              >
                <ul className="tickets-popup__prices-table">
                  {ticketsPopupSubsidized.map(({
                    id, category, price,
                  }) => (
                    <li
                      className="tickets-popup__prices-table-row"
                      key={id}
                    >
                      <span className="tickets-popup__prices-table-category">{category}</span>
                      <span>{price}</span>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </TicketsPopupCard>
          </ul>
          <Accordion
            triggerText="Правила посещения"
          >
            <ul>
              {ticketsPopupRulesImages.map(({
                alt, url,
              }) => (
                <Image
                  key={alt}
                  src={url}
                  alt={alt}
                />
              ))}
            </ul>
          </Accordion>
        </div>
      )}
    </div>
  );
}
