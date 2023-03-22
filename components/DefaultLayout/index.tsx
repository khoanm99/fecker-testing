// import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Header from '@/organisms/commons/header/header';
import Footer from '@/organisms/commons/footer/footer';
import MenuPanel from '@/organisms/commons/menu';

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
      <MenuPanel />
      <Footer />
    </>
  );
};

export default DefaultLayout;
