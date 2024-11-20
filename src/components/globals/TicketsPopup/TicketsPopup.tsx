import Image from 'next/image';
import { POPUP_TICKET_BUY_TEXT } from "@/src/common/mocks/globals-mock";
import { GlobalComponentProps } from "@/src/common/types";
import { useTicketPopup } from '@/src/common/hooks/useTicketPopup';
import { Accordion } from "../Accordion/Accordion";

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
    handleToggle,
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
              className="button"
              onClick={handleToggle}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // eslint-disable-next-line @stylistic/max-len
                  d="M13.7635 11.9728L23.7115 2.05141C23.908 1.82246 24.0108 1.52796 23.9991 1.22676C23.9874 0.925553 23.8622 0.639832 23.6485 0.42669C23.4348 0.213548 23.1483 0.0886838 22.8463 0.0770496C22.5443 0.0654154 22.249 0.167869 22.0195 0.363934L12.0715 10.2853L2.12345 0.351966C1.89749 0.126606 1.59101 0 1.27145 0C0.95189 0 0.645417 0.126606 0.419452 0.351966C0.193488 0.577326 0.0665421 0.88298 0.0665421 1.20169C0.0665421 1.52039 0.193488 1.82605 0.419452 2.05141L10.3795 11.9728L0.419452 21.8942C0.293834 22.0015 0.19181 22.1335 0.119782 22.282C0.0477538 22.4305 0.00727762 22.5922 0.000894229 22.757C-0.00548916 22.9218 0.0223574 23.0862 0.0826869 23.2398C0.143016 23.3934 0.234526 23.5328 0.351472 23.6495C0.468418 23.7661 0.608274 23.8574 0.762264 23.9175C0.916255 23.9777 1.08105 24.0055 1.24632 23.9991C1.41158 23.9927 1.57374 23.9524 1.72262 23.8805C1.87149 23.8087 2.00388 23.707 2.11145 23.5817L12.0715 13.6603L22.0195 23.5817C22.249 23.7777 22.5443 23.8802 22.8463 23.8686C23.1483 23.8569 23.4348 23.7321 23.6485 23.5189C23.8622 23.3058 23.9874 23.0201 23.9991 22.7188C24.0108 22.4176 23.908 22.1231 23.7115 21.8942L13.7635 11.9728Z"
                  fill="#FFFEFE"
                />
              </svg>
            </button>
          </div>
          <ul className="tickets-popup__cards">
            {ticketsPopupGeneral.map(({
              category, price, description,
            }) => (
              <li
                key={category}
                className="tickets-popup__card"
              >
                <div className="tickets-popup__wrapper">
                  <div className="tickets-popup__category">{category}</div>
                  <div className="tickets-popup__description">{description}</div>
                </div>
                <div className="tickets-popup__price">{price}</div>
              </li>
            ))}
            <li className="tickets-popup__card">
              <div className="tickets-popup__wrapper tickets-popup__wrapper--accordion">
                <h3 className="tickets-popup__category">Льготный</h3>
                <div className="tickets-popup__description tickets-popup__description--accordion">
                  Требуется подтверждающий льготу оригинал документа, покупка только на кассе
                </div>
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
              </div>
            </li>
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
