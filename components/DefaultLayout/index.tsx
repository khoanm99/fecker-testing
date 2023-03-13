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
      <main
        id="main"
        className={`transition-colors duration-700 relative z-10 text-primary`}
      >
        {children}
      </main>
      <AppFooter />
    </>
  );
};

export default DefaultLayout;
