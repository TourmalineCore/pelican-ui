import Image from 'next/image';
import { POPUP_TICKET_BUY_TEXT, TICKET_BUY_LINK } from "@/src/common/mocks/globals-mock";
import { GlobalComponentProps } from "@/src/common/types";
import { useTicketPopup } from '@/src/common/hooks/useTicketPopup';
import Link from 'next/link';
import { MutableRefObject, useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import { Accordion } from "../Accordion/Accordion";
import crossIcon from "../../../../public/images/tickets-popup/icon-cross.svg";
import { TicketsPopupCard } from './components/TicketsPopupCard/TicketsPopupCard';
import iconChevron from "../../../../public/images/svg/icon-chevron.svg";
import iconChevronGreen from "../../../../public/images/svg/icon-chevron-green.svg";
import { TicketsPopupRulesList } from './components/TicketsPopupRulesList/TicketsPopupRulesList';
import { TicketsPopupRefundReasons } from './components/TicketsPopupRefundReasons/TicketsPopupRefundReasons';

export function TicketsPopup({
  ticketsPopupGeneral,
  ticketsPopupSubsidized,
  ticketsPopupRulesImages,
  ticketsPopupRefundReasons,
  overlayElementRef,
}: Pick<GlobalComponentProps,
"ticketsPopupGeneral" |
"ticketsPopupSubsidized" |
"ticketsPopupRulesImages" |
"ticketsPopupRefundReasons"> & {
  overlayElementRef: MutableRefObject<null | HTMLElement>
}) {
  const {
    isActive,
    handleTicketPopupToggle,
  } = useTicketPopup();

  useEffect(() => {
    const overlayElement = overlayElementRef.current!;

    if (isActive) {
      overlayElement.classList.add(`is-visible`);
      overlayElement.classList.add(`is-header-hidden`);
    }

    return () => {
      overlayElement.classList.remove(`is-visible`);
      overlayElement.classList.remove(`is-header-hidden`);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <div className="tickets-popup">
      {isActive && (
        <FocusLock
          returnFocus
        >
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
              {ticketsPopupGeneral.map(({
                category, price, description,
              }) => (
                <TicketsPopupCard
                  key={category}
                  className="tickets-popup__card"
                  category={category}
                  price={price}
                  description={description}
                  hasLink
                />
              ))}
              <TicketsPopupCard
                key="tickets-popup-card-with-accodion"
                className="tickets-popup__card tickets-popup-card--with-accordion"
                category="Льготный"
                description="Требуется подтверждающий льготу оригинал документа, покупка только на&nbsp;кассе"
                hasLink={false}
              >
                <Accordion
                  triggerText="Подробнее"
                  triggerHideText="Скрыть"
                  className="accordion--ticket-card"
                  icon={iconChevronGreen}
                  ariaLabel="Подробнее о льготных категориях"
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
                    className="tickets-popup__link button button--secondary"
                    // TODO: Change path when the page appears
                    href="https://vk.com/topic-71671982_48253263"
                    // TODO: Remove when the page appears
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Остальные льготные категории
                  </Link>
                </Accordion>
              </TicketsPopupCard>
            </ul>
            <div className="tickets-popup__accordions">
              <Accordion
                triggerText="Подробнее"
                triggerHideText="Скрыть"
                className="accordion--ticket-card"
                icon={iconChevronGreen}
                triggerText="Правила посещения"
                className="tickets-popup__accordion accordion--ticket-rules"
                icon={iconChevron}
              >
                <TicketsPopupRulesList
                  className="tickets-popup__rules-list"
                  ticketsPopupRulesImages={ticketsPopupRulesImages}
                />
                <Link
                  className="tickets-popup__more-link button button--secondary"
                  // TODO: Change path when the page appears
                  href="http://chelzoo.ru/media/articles/2022/05/06/prikaz-221-ot-050522-o-pravilah-posescheniya-2.pdf"
                  // TODO: Remove when the page appears
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Подробнее о правилах посещения
                </Link>
              </Accordion>
              <Accordion
                triggerText="Возврат билетов"
                className="tickets-popup__accordion tickets-popup__accordion--refund accordion--ticket-rules"
                icon={iconChevron}
              >
                <div className="tickets-popup__refund">
                  <div className="tickets-popup__refund-head">Возврат билета осуществляется в&nbsp;следующих случаях:</div>

                  <TicketsPopupRefundReasons
                    ticketsPopupRefundReasons={ticketsPopupRefundReasons}
                    className="tickets-popup__refund-reasons"
                  />
                  <Link
                    className="tickets-popup__more-link button button--secondary"
                    // TODO: Change path when the page appears
                    href="http://chelzoo.ru/articles/prikaz-ob-utverzhdenii-pravil-prodazhi-i-vozvrata-/"
                    // TODO: Remove when the page appears
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Подробнее о возврате билетов
                  </Link>
                </div>
              </Accordion>
            </div>
            <Link
              className="tickets-popup__buy-button button button--primary button--featured"
              href={TICKET_BUY_LINK}
              data-testid="tickets-popup-buy-button"
            >
              Купить билет
            </Link>
            <p className="tickets-popup__disclaimer">Покупая билет, вы соглашаетесь с&nbsp;правилами посещения</p>
          </div>
        </FocusLock>
      )}
    </div>
  );
}
