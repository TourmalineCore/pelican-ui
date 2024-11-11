import { PropsWithChildren, useRef } from 'react';
import { GlobalComponentProps } from '@/src/common/types';
import { Footer } from '../Footer/Footer';
// import { Header } from '../Header/Header';

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
}: {
} & LayoutProps) {
  const mainElementRef = useRef<null | HTMLElement>(null);

  return (
    <div className="layout">
      {/* <Header
        navigationLinks={navigationLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
        mainElementRef={mainElementRef}
      /> */}
      <main
        className="main"
        ref={mainElementRef}
      >
        {children}
      </main>
      <Footer
        officialLinks={officialLinks}
        footerUserLinks={footerUserLinks}
        footerAboutLinks={footerAboutLinks}
        email={email}
        phone={phone}
      />
    </div>
  );
}
