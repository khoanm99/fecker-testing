// import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import AppHeader from '@/organisms/commons/AppHeader';
import AppFooter from '@/organisms/commons/AppFooter';

import useResetState from '@/hooks/useResetState';

export interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  useResetState();

  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
