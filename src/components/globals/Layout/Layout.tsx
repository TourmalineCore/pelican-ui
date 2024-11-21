import { PropsWithChildren, useRef } from 'react';
import { GlobalComponentProps } from '@/src/common/types';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

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
}: {
} & LayoutProps) {
  const overlayElementRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className="layout">
      <Header
        navigationLinks={navigationLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
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
      />
    </div>
  );
}
