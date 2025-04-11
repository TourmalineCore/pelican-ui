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
import { WindowWidthContext } from '@/src/common/providers/WindowWidthProvider';
import { useRouter } from 'next/router';
import { useTicketPopup } from '@/src/common/hooks/useTicketPopup';
import { Header } from '../Header/Header';
import { TicketsPopup } from '../TicketsPopup/TicketsPopup';
import { Footer } from '../Footer/Footer';
import { SkipLink } from '../SkipLink/SkipLink';
import { ExitPreviewLink } from '../ExitPreviewLink/ExitPreviewLink';
import Cookie from '../Cookie/Cookie';

type LayoutProps = GlobalComponentProps & PropsWithChildren & {
  isPreview: boolean;
};

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
  ticketsPopup,
  isPreview,
}: {
} & LayoutProps) {
  const {
    asPath,
  } = useRouter();

  const overlayElementRef = useRef<null | HTMLDivElement>(null);
  const mainElementRef = useRef<null | HTMLDivElement>(null);
  const footerElementRef = useRef<null | HTMLDivElement>(null);

  const {
    windowWidth,
    handleSetWindowWidth,
  } = useContext(WindowWidthContext);

  const [isMobileMenuOpen, setIsMobileMenuActive] = useState(false);
  const {
    isTicketPopupActive,
    handleTicketPopupToggle,
  } = useTicketPopup();

  useEffect(() => {
    if (windowWidth === 0) {
      handleSetWindowWidth();
    }

    window.addEventListener(`resize`, handleSetWindowWidth);

    return () => {
      window.removeEventListener(`resize`, handleSetWindowWidth);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowWidth]);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuActive((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuActive(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  if (windowWidth === 0) {
    return null;
  }

  return (
    <>
      <div className="layout">
        <SkipLink
          mainElementRef={mainElementRef}
        />
        {isPreview && <ExitPreviewLink />}
        <Header
          navigationLinks={navigationLinks}
          email={email}
          phone={phone}
          popupTicketBuyText={popupTicketBuyText}
          overlayElementRef={overlayElementRef}
          mainElementRef={mainElementRef}
          footerElementRef={footerElementRef}
          handleMobileMenuToggle={handleMobileMenuToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <TicketsPopup
          ticketsPopup={ticketsPopup}
          overlayElementRef={overlayElementRef}
        />
        <main
          id="main-content"
          ref={mainElementRef}
          className="main"
          tabIndex={-1}
          data-testid="main-content"
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

            if (isTicketPopupActive) {
              handleTicketPopupToggle();
            }
          }}
        />
        <Footer
          footerElementRef={footerElementRef}
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
      <Cookie />
    </>
  );
}
