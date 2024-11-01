import { PropsWithChildren } from 'react';
import { GlobalComponentProps } from '@/src/types';
import { Header } from '../Header/Header';

type LayoutProps = GlobalComponentProps & PropsWithChildren;

export function Layout({
  children,
  navigationLinks,
}: {
} & LayoutProps) {
  return (
    <div className="layout">
      <Header navigationLinks={navigationLinks} />
      <main>
        {children}
      </main>
    </div>
  );
}
