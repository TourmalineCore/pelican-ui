import { GlobalComponentProps } from "@/src/common/types";
import { CSSTransition } from 'react-transition-group';
import { HeaderNavigationPopup } from "./components/HeaderNavigationPopup/HeaderNavigationPopup";
import { SocialMedia } from "../../../SocialNetwork/SocialMedia";

export function HeaderPopup({
  className,
  isActive,
  navigationLinks,
  email,
  phone,
  popupTicketBuyText,
}: Pick<GlobalComponentProps, 'email' | 'phone' | 'navigationLinks' | 'popupTicketBuyText'> & {
  className: string,
  isActive: boolean,
}) {
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
        data-testId="header-popup"
      >
        {isActive && (
          <>
            <button
              type="button"
              className="header-popup__ticket-button"
            >
              {popupTicketBuyText}
            </button>
            <HeaderNavigationPopup
              className="header-popup__nav"
              navigationLinks={navigationLinks}
            />

            <div className="header-popup__footer">
              <div className="header-popup__contact">
                <a
                  href={`tel:${phone}`}
                  className="header-popup__phone"
                >
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="header-popup__email"
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
