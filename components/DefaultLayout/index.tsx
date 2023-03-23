// import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import Header from '@/organisms/commons/header/header';
import Footer from '@/organisms/commons/footer/footer';
import MenuPanel from '@/organisms/commons/menu';

import useResetState from '@/hooks/useResetState';
import { NextSeo } from 'next-seo';
import ContactStickySvg from '@/atoms/svg/contactSticky';
import { twMerge } from 'tailwind-merge';

export interface DefaultLayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
  templateName?: string;
}

const DefaultLayout = ({
  title = 'fecker-holzbau-ag',
  description,
  templateName,
  children
}: DefaultLayoutProps) => {
  useResetState();
  const defaultContactCls = `hidden lg:fixed  lg:z-[11] lg:right-[30px] lg:block lg:bottom-[30px] xl:bottom-[35px]`;
  const contactClsHome = `lg:bottom-[50px] xl:bottom-[70px]`;
  return (
    <>
      <Header />
      <NextSeo title={title} description={description ?? ''} />
      <main>{children}</main>
      <div
        className={twMerge(
          defaultContactCls,
          templateName == 'home' ? contactClsHome : ''
        )}
      >
        <ContactStickySvg />
      </div>
      <MenuPanel />
      <Footer />
    </>
  );
};

export default DefaultLayout;
