import { PropsWithChildren } from 'react';
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
  return (
    <div className="layout">
      <Header
        navigationLinks={navigationLinks}
        email={email}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
      />
      <main className="main">
        {children}
      </main>
    </div>
  );
}
