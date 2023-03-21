// import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Header from '@/organisms/commons/Header';
import AppFooter from '@/organisms/commons/Footer';

import useResetState from '@/hooks/useResetState';

export interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  useResetState();

  return (
    <>
      <Header />
      <main>{children}</main>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
