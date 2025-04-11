import { GlobalComponentProps } from "@/src/common/types";
import { CSSTransition } from 'react-transition-group';
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { MouseEventHandler } from "react";
import { SocialMedia } from "../../../SocialNetwork/SocialMedia";
import { HeaderNavigation } from "../HeaderNavigation/HeaderNavigation";

export function HeaderPopup({
  className,
  isActive,
  navigationLinks,
  email,
  phone,
  popupTicketBuyText,
  onTicketPopupOpen,
}: Pick <GlobalComponentProps, "navigationLinks" | "email" | "phone" | "popupTicketBuyText"> & {
  isActive: boolean,
  className: string,
  onTicketPopupOpen: MouseEventHandler<HTMLButtonElement>;
}) {
  const {
    handleTicketPopupToggle,
  } = useTicketPopup();

  return (
    <CSSTransition
      in={isActive}
      timeout={{
        enter: 300,
        exit: 200,
      }}
      unmountOnExit
    >
      <div
        className={`${className} container header-popup`}
        data-testid="header-popup"
      >
        {isActive && (
          <>
            <button
              type="button"
              className="header-popup__ticket-button"
              onClick={(e) => {
                handleTicketPopupToggle();
                onTicketPopupOpen(e);
              }}
              aria-label="Открыть модальное окно с билетами"
              data-testid="header-popup-ticket-button"
            >
              {popupTicketBuyText}
            </button>
            <HeaderNavigation
              className="header-popup__nav"
              navigationLinks={navigationLinks}
            />

            <div className="header-popup__footer">
              <div className="header-popup__contact">
                <a
                  href={`tel:${phone}`}
                  className="header-popup__phone"
                  aria-label={`Связаться с нами по телефону ${phone}`}
                  data-testid="header-popup-phone"
                >
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="header-popup__email"
                  aria-label={`Связаться с нами по почте ${email}`}
                  data-testid="header-popup-email"
                >
                  {email}
                </a>
              </div>

              <div className="header-popup__social-media">
                <SocialMedia
                  className="header-popup__social-icon"
                />
              </div>

            </div>
          </>
        )}
      </div>
    </CSSTransition>
  );
}
