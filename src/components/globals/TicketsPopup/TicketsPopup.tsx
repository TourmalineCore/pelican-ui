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
    <div>
      {isActive && (
        <div
          className=" tickets-popup"
          data-testId="tickets-popup"
        >
          <div className="container tickets-popup__inner">
            <div className=" tickets-popup__head">{POPUP_TICKET_BUY_TEXT}</div>
            <button
              type="button"
              onClick={handleToggle}
            >
              х
            </button>
            <ul>
              {ticketsPopupGeneral.map(({
                category, price, description,
              }) => (
                <li
                  key={category}
                >
                  <div>{category}</div>
                  <div>{price}</div>
                  <div>{description}</div>
                </li>
              ))}
              <li>
                <h3>Льготный</h3>
                <div>
                  Требуется подтверждающий льготу оригинал документа, покупка только на кассе
                </div>
                <Accordion
                  triggerText="Подробнее"
                >
                  <ul>
                    {ticketsPopupSubsidized.map(({
                      id, category, price,
                    }) => (
                      <li
                        key={id}
                      >
                        <div>{category}</div>
                        <div>{price}</div>
                      </li>
                    ))}
                  </ul>
                </Accordion>
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
        </div>
      )}
    </div>
  );
}
