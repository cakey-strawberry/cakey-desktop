import Header from '@/common/components/Header';

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  onUserProfileClick: () => void;
}

export default function Layout({ children, onUserProfileClick }: LayoutProps) {
  return (
    <>
      <Header onUserProfileClick={onUserProfileClick} />
      <main className="main">{children}</main>
    </>
  );
}
