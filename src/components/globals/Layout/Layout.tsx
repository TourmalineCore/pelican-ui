/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { GlobalComponentProps } from '@/src/common/types';
import { TicketPopupProvider } from '@/src/common/providers/TicketPopupProvider';
import { WindowWidthContext } from '@/src/common/providers/WindowWidthProvider';
import { Header } from '../Header/Header';
import { TicketsPopup } from '../TicketsPopup/TicketsPopup';
import { Footer } from '../Footer/Footer';

type LayoutProps = GlobalComponentProps & PropsWithChildren;

export function Layout({
  children,
  email,
  phone,
  navigationLinks,
  officialLinks,
  footerUserLinks,
  footerAboutLinks,
  popupTicketBuyText,
  footerNavTitleLeft,
  footerNavTitleRight,
  ticketsPopupGeneral,
  ticketsPopupSubsidized,
  ticketsPopupRulesImages,
  ticketsPopupRefundReasons,
}: {
} & LayoutProps) {
  const overlayElementRef = useRef<null | HTMLDivElement>(null);
  const {
    windowWidth,
    handleSetWindowWidth,
  } = useContext(WindowWidthContext);

  const [isMobileMenuOpen, setIsMobileMenuActive] = useState(false);

  useEffect(() => {
    if (windowWidth === 0) {
      handleSetWindowWidth();
    }

    window.addEventListener(`resize`, handleSetWindowWidth);

    return () => {
      window.removeEventListener(`resize`, handleSetWindowWidth);
    };
  }, [windowWidth]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuActive((prevState) => !prevState);
  }, []);

  if (windowWidth === 0) {
    return null;
  }

  return (
    <TicketPopupProvider>
      <div className="layout">
        <Header
          navigationLinks={navigationLinks}
          email={email}
          phone={phone}
          popupTicketBuyText={popupTicketBuyText}
          overlayElementRef={overlayElementRef}
          handleMobileMenuToggle={handleMobileMenuToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <TicketsPopup
          ticketsPopupGeneral={ticketsPopupGeneral}
          ticketsPopupSubsidized={ticketsPopupSubsidized}
          ticketsPopupRulesImages={ticketsPopupRulesImages}
          ticketsPopupRefundReasons={ticketsPopupRefundReasons}
          overlayElementRef={overlayElementRef}
        />
        <main
          className="main"
        >
          {children}
        </main>
        <div
          ref={overlayElementRef}
          className="overlay"
          onClick={() => {
            if (isMobileMenuOpen) {
              handleMobileMenuToggle();
            }
          }}
        />
        <Footer
          officialLinks={officialLinks}
          footerUserLinks={footerUserLinks}
          footerAboutLinks={footerAboutLinks}
          email={email}
          phone={phone}
          footerNavTitleLeft={footerNavTitleLeft}
          footerNavTitleRight={footerNavTitleRight}
          popupTicketBuyText={popupTicketBuyText}
        />
      </div>
    </TicketPopupProvider>
  );
}
