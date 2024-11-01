import { PropsWithChildren } from 'react';
import { Header } from '../Header/Header';

export function Layout({
  navigations,
  children,
}: {
} & PropsWithChildren & { navigations: any }) {
  return (
    <div className="layout">
      <Header navigations={navigations} />
      <main>
        {children}
      </main>
    </div>
  );
}
