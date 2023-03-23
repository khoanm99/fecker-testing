// import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Header from '@/organisms/commons/header/header';
import Footer from '@/organisms/commons/footer/footer';
import MenuPanel from '@/organisms/commons/menu';

import useResetState from '@/hooks/useResetState';
import { NextSeo } from 'next-seo';

export interface DefaultLayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const DefaultLayout = ({
  title = 'fecker-holzbau-ag',
  description,
  children
}: DefaultLayoutProps) => {
  useResetState();

  return (
    <>
      <Header />
      <NextSeo title={title} description={description ?? ''} />
      <main>{children}</main>
      <MenuPanel />
      <Footer />
    </>
  );
};

export default DefaultLayout;
