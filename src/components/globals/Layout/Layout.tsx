import { PropsWithChildren, useRef, useState } from 'react';
import { GlobalComponentProps } from '@/src/common/types';
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
}: {
} & LayoutProps) {
  const overlayElementRef = useRef<null | HTMLElement>(null);

  const [isActive, setIsActive] = useState(false);

  return (
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
        isActive
        phone={phone}
        handleToggle={handleToggle}
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
      />
    </div>
  );

  function handleToggle() {
    setIsActive((prevState) => !prevState);
  }
}
