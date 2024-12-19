import { MutableRefObject, useEffect } from "react";
import { GlobalComponentProps } from "@/src/common/types";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import Link from "next/link";
import { HeaderLogo } from "./components/HeaderLogo/HeaderLogo";
import { Button } from "../Button/Button";
import { HeaderNavigation } from "./components/HeaderNavigation/HeaderNavigation";
import { HeaderPopupButton } from "./components/HeaderPopupButton/HeaderPopupButton";

const HeaderPopup = dynamic(
  () => import(`../Header/components/HeaderPopup/HeaderPopup`).then((component) => component.HeaderPopup),
  {
    ssr: false,
  },
);

type HeaderProps = Pick<GlobalComponentProps, "navigationLinks" | "email" | "phone" | "popupTicketBuyText"> & {
  overlayElementRef: MutableRefObject<null | HTMLElement>,
  mainElementRef: MutableRefObject<null | HTMLElement>,
  footerElementRef: MutableRefObject<null | HTMLElement>,
  isMobileMenuOpen: boolean,
  handleMobileMenuToggle: () => void,
};

export function Header({
  navigationLinks,
  email,
  phone,
  popupTicketBuyText,
  overlayElementRef,
  mainElementRef,
  footerElementRef,
  isMobileMenuOpen,
  handleMobileMenuToggle,
}: HeaderProps) {
  const {
    handleTicketPopupToggle,
  } = useTicketPopup();
  const {
    isDesktop,
  } = useWindowWidth();

  useEffect(() => {
    const overlayElement = overlayElementRef.current!;
    const mainElement = mainElementRef.current!;
    const footerElement = footerElementRef.current!;

    if (isMobileMenuOpen) {
      overlayElement.classList.add(`is-visible`);
      mainElement.setAttribute(`inert`, `true`);
      footerElement.setAttribute(`inert`, `true`);
    }

    return () => {
      overlayElement.classList.remove(`is-visible`);
      mainElement.removeAttribute(`inert`);
      footerElement.removeAttribute(`inert`);
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={clsx(`header`, {
        active: isMobileMenuOpen,
      })}
      data-testid="header"
    >
      <div className="container header__wrapper">
        <div className="header__left">
          <HeaderLogo
            className="header__logo"
          />
          {isDesktop && (
            <HeaderNavigation
              className="header__navigation"
              navigationLinks={navigationLinks}
            />
          )}
        </div>

        <div className="header__right">
          {!isDesktop && (
            <HeaderPopupButton
              className="header__popup-button"
              isActive={isMobileMenuOpen}
              handleToggle={handleMobileMenuToggle}
            />
          )}
          {isDesktop && (
            <div className="header__buttons">
              <Link
                className="button button--secondary header__contact-button"
                href={`mailto:${email}`}
                data-testid="header-contact-button"
              >
                Связаться
              </Link>
              <Button
                className="header__ticket-button"
                theme="primary"
                isFeatured
                onClick={handleTicketPopupToggle}
                data-testid="header-tickets-popup-button"
              >
                Билеты
              </Button>
            </div>
          )}
        </div>
      </div>
      {!isDesktop && (
        <HeaderPopup
          className="header__popup"
          isActive={isMobileMenuOpen}
          email={email}
          phone={phone}
          navigationLinks={navigationLinks}
          popupTicketBuyText={popupTicketBuyText}
          onTicketPopupOpen={() => handleMobileMenuToggle()}
        />
      )}
    </div>
  );
}
