import { PropsWithChildren } from 'react';
import { Header } from '../Header/Header';

export function Layout({
  children,
}: {
} & PropsWithChildren) {
  return (
    <div className="layout">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
