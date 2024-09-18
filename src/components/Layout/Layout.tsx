import { PropsWithChildren } from 'react';

export function Layout({
  children,
}: {
} & PropsWithChildren) {
  return (
    <div className="layout">
      <main>
        {children}
      </main>
    </div>
  );
}
