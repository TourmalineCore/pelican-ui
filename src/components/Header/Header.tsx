import { useState } from "react";
import { useWindowWidth } from "@/src/common/hooks/useWindowSize";
import { DESKTOP_BREAKPOINT } from "@/src/common/constants";
import { HeaderMenuButton } from "./components/HeaderMenuButton/HeaderMenuButton";
import { HeaderLogo } from "./components/HeaderLogo/HeaderLogo";
import { HeaderEye } from "./components/HeaderEye/HeaderEye";
import { Button } from "../Button/Button";
import { HeaderNavigation } from "./components/HeaderNavigation/HeaderNavigation";

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const windowWidth = useWindowWidth();

  if (windowWidth === 0) {
    return null;
  }

  const isDesktop = windowWidth >= DESKTOP_BREAKPOINT;

  return (
    <div
      className="header"
      data-testid="header"
    >
      <div className="container header__wrapper">

        <div className="header__left">
          <HeaderLogo />
          {isDesktop && <HeaderNavigation />}
        </div>

        <div className="header__right">
          <HeaderEye />
          {!isDesktop && (
            <HeaderMenuButton
              isActive={isActive}
              setIsActive={handleToggle}
            />
          )}
          {isDesktop && (
            <div className="header__buttons">
              <Button
                className="caption-1 header__contact-button"
                theme="secondary"
              >
                Связаться
              </Button>
              <Button
                className="caption-1 header__ticket-button"
                theme="primary"
              >
                Билеты
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  function handleToggle() {
    setIsActive((prevState) => !prevState);
  }
}
