import Image from 'next/image';
import { POPUP_TICKET_BUY_TEXT } from "@/src/common/mocks/globals-mock";
import { GlobalComponentProps } from "@/src/common/types";
import { useTicketPopup } from '@/src/common/hooks/useTicketPopup';
import Link from 'next/link';
import { MutableRefObject, useEffect } from 'react';
import { Accordion } from "../Accordion/Accordion";
import crossIcon from "../../../../public/images/tickets-popup/icon-cross.svg";
import { TicketsPopupCard } from './components/TicketsPopupCard';
import iconChevron from "../../../../public/images/svg/icon-chevron.svg";
import iconChevronGreen from "../../../../public/images/svg/icon-chevron-green.svg";
import { Button } from '../Button/Button';

export function TicketsPopup({
  ticketsPopupGeneral,
  ticketsPopupSubsidized,
  ticketsPopupRulesImages,
  ticketsPopupReturnReasons,
  overlayElementRef,
}: Pick<GlobalComponentProps,
"ticketsPopupGeneral" |
"ticketsPopupSubsidized" |
"ticketsPopupRulesImages" |
"ticketsPopupReturnReasons" |
"popupTicketBuyText"> & {
  overlayElementRef: MutableRefObject<null | HTMLElement>
}) {
  const {
    isActive,
    handleTicketPopupToggle,
  } = useTicketPopup();

  useEffect(() => {
    const mainElement = overlayElementRef.current!;

    if (isActive) {
      mainElement.classList.add(`is-visible`);
      mainElement.classList.add(`is-header-hidden`);
    }

    return () => {
      mainElement.classList.remove(`is-visible`);
      mainElement.classList.remove(`is-header-hidden`);
    };
  }, [isActive]);

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
              description="Требуется подтверждающий льготу оригинал документа, покупка только на&nbsp;кассе"
            >
              <Accordion
                triggerText="Подробнее"
                triggerHideText="Скрыть"
                className="accordion--ticket-card"
                icon={iconChevronGreen}
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
                      <span className="tickets-popup__prices-table-price">{price}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="tickets-popup__link button button--secondary"
                >
                  Остальные льготные категории
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
              <ul className="tickets-popup__rules-list">
                {ticketsPopupRulesImages.map(({
                  alt, url,
                }) => (
                  <li
                    className="tickets-popup__rule"
                    key={alt}
                  >
                    <Image
                      className="tickets-popup__rule-img"
                      src={url}
                      alt={alt}
                    />
                  </li>
                ))}
              </ul>
              <Button
                className="tickets-popup__more-link"
                theme="secondary"
              >
                Подробнее о правилах посещения
              </Button>
            </Accordion>
            <Accordion
              triggerText="Возврат билетов"
              className="tickets-popup__accordion accordion--ticket-rules"
              icon={iconChevron}

            >
              <div className="tickets-popup__return">
                Возврат билета осуществляется в&nbsp;следующих случаях:
                <ul className="tickets-popup__return-reasons">
                  {ticketsPopupReturnReasons.map(({
                    id, returnReason,
                  }) => (
                    <li
                      className="tickets-popup__return-reason"
                      key={id}
                    >
                      <span className="tickets-popup__return-counter" />
                      <span className="tickets-popup__return-text">{returnReason}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="tickets-popup__more-link button button--secondary"
                >
                  Подробнее о возврате билетов
                </Link>
              </div>
            </Accordion>
          </div>
          <Link
            className="tickets-popup__buy-button button button--primary button--featured "
            href="#"
          >
            Купить билет
          </Link>
          <p className="tickets-popup__disclaimer">Покупая билет, вы соглашаетесь с&nbsp;правилами посещения</p>
        </div>
      )}
    </div>
  );
}
