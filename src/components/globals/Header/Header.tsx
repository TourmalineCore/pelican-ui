import { MutableRefObject, useEffect, useState } from "react";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { GlobalComponentProps } from "@/src/common/types";
import { Breakpoint } from "@/src/common/enum";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { HeaderLogo } from "./components/HeaderLogo/HeaderLogo";
import { HeaderEye } from "./components/HeaderEye/HeaderEye";
import { Button } from "../Button/Button";
import { HeaderNavigation } from "./components/HeaderNavigation/HeaderNavigation";
import { HeaderPopupButton } from "./components/HeaderPopupButton/HeaderPopupButton";

const HeaderPopup = dynamic(
  () => import(`../Header/components/HeaderPopup/HeaderPopup`).then((component) => component.HeaderPopup),
  {
    ssr: false,
  },
);

export function Header({
  navigationLinks,
  email,
  phone,
  popupTicketBuyText,
  mainElementRef,
}: Pick<GlobalComponentProps, "navigationLinks" | "email" | "phone" | "popupTicketBuyText"> & {
  mainElementRef: MutableRefObject<null | HTMLElement>
}) {
  const [isActive, setIsActive] = useState(false);
  const windowWidth = useWindowWidth();
  useEffect(() => {
    const mainElement = mainElementRef.current!;

    if (isActive) {
      mainElement.classList.add(`blur`);
    }

    return () => {
      mainElement.classList.remove(`blur`);
    };
  }, [isActive]);

  if (windowWidth === 0) {
    return null;
  }

  const isDesktop = windowWidth >= Breakpoint.DESKTOP;

  return (
    <div
      className={clsx(`header`, {
        active: isActive,
      })}
      data-testid="header"
    >
      <div className="container header__wrapper">
        <div className="header__left">
          <HeaderLogo />
          {isDesktop && (
            <HeaderNavigation navigationLinks={navigationLinks} />
          )}
        </div>

        <div className="header__right">
          <HeaderEye />
          {!isDesktop && (
            <HeaderPopupButton
              isActive={isActive}
              handleToggle={handleToggle}
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
              >
                Билеты
              </Button>
            </div>
          )}
        </div>
      </div>
      {!isDesktop && (
        <HeaderPopup
          isActive={isActive}
          email={email}
          phone={phone}
          navigationLinks={navigationLinks}
          popupTicketBuyText={popupTicketBuyText}
        />
      )}
    </div>
  );

  function handleToggle() {
    setIsActive((prevState) => !prevState);
  }
}
