import { PropsWithChildren, useRef } from 'react';
import { GlobalComponentProps } from '@/src/common/types';
import { TicketPopupProvider } from '@/src/common/providers/TicketPopupProvider';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { TicketsPopup } from '../TicketsPopup/TicketsPopup';

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
  ticketsPopupReturnReasons,
}: {
} & LayoutProps) {
  const overlayElementRef = useRef<null | HTMLDivElement>(null);

  return (
    <TicketPopupProvider>
      <div className="layout">
        <Header
          navigationLinks={navigationLinks}
          email={email}
          phone={phone}
          popupTicketBuyText={popupTicketBuyText}
          overlayElementRef={overlayElementRef}
        />
        <TicketsPopup
          ticketsPopupGeneral={ticketsPopupGeneral}
          ticketsPopupSubsidized={ticketsPopupSubsidized}
          ticketsPopupRulesImages={ticketsPopupRulesImages}
          ticketsPopupReturnReasons={ticketsPopupReturnReasons}
          phone={phone}
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
