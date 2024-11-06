import { PropsWithChildren } from 'react';
import { GlobalComponentProps } from '@/src/common/types';
import { Header } from '../Header/Header';

type LayoutProps = GlobalComponentProps & PropsWithChildren;

export function Layout({
  children,
  mail,
  phone,
  navigationLinks,
  popupTicketBuyText,
}: {
} & LayoutProps) {
  return (
    <div className="layout">
      <Header
        navigationLinks={navigationLinks}
        mail={mail}
        phone={phone}
        popupTicketBuyText={popupTicketBuyText}
      />
      <main>
        {children}
      </main>
    </div>
  );
}
