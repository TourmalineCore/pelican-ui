import { PropsWithChildren, useRef } from 'react';
import { GlobalComponentProps } from '@/src/common/types';
import { Header } from '../Header/Header';

type LayoutProps = GlobalComponentProps & PropsWithChildren;

export function Layout({
  children,
  email,
  phone,
  navigationLinks,
  popupTicketBuyText,
}: {
} & LayoutProps) {
  const mainElementRef = useRef<null | HTMLElement>(null);

  return (
    <div className="layout">
      <Header
        navigationLinks={navigationLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
        mainElementRef={mainElementRef}
      />
      <main
        className="main"
        ref={mainElementRef}
      >
        {children}
      </main>
    </div>
  );
}
