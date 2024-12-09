import { MutableRefObject, useEffect } from "react";
import { GlobalComponentProps } from "@/src/common/types";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { useTicketPopup } from "@/src/common/hooks/useTicketPopup";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
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
  isMobileMenuOpen: boolean,
  handleMobileMenuToggle: () => void,
};

export function Header({
  navigationLinks,
  email,
  phone,
  popupTicketBuyText,
  overlayElementRef,
  isMobileMenuOpen,
  handleMobileMenuToggle,
}: HeaderProps & {
  overlayElementRef: MutableRefObject<null | HTMLElement>
}) {
  const {
    handleTicketPopupToggle,
  } = useTicketPopup();
  const {
    isDesktop,
  } = useWindowWidth();

  useEffect(() => {
    const overlayElement = overlayElementRef.current!;

    if (isMobileMenuOpen) {
      overlayElement.classList.add(`is-visible`);
    }

    return () => {
      overlayElement.classList.remove(`is-visible`);
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
            <HeaderNavigation navigationLinks={navigationLinks} />
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
              <Button
                className="header__contact-button"
                theme="secondary"
              >
                Связаться
              </Button>
              <Button
                className="header__ticket-button"
                theme="primary"
                isFeatured
                onClick={handleTicketPopupToggle}
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
