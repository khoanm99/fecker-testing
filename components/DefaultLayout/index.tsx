import { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Header from '@/organisms/commons/header/header';
import Footer from '@/organisms/commons/footer/footer';
import MenuPanel from '@/organisms/commons/menu';
import useResetState from '@/hooks/useResetState';
import { NextSeo } from 'next-seo';
import ContactStickySvg from '@/atoms/svg/contactSticky';
import { twMerge } from 'tailwind-merge';
import BackToTop from '@/atoms/backToTop';

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
  const [active, setActive] = useState<Boolean>(false);
  const defaultContactCls = `hidden lg:fixed  lg:z-[11] lg:right-[30px] lg:block lg:bottom-[30px] xl:bottom-[35px]`;
  const contactClsHome = `lg:bottom-[50px] xl:bottom-[70px]`;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let browser = window;
      const handleScroll = () => {
        browser.pageYOffset > browser.innerHeight
          ? setActive(true)
          : setActive(false);
      };
      browser.addEventListener('scroll', handleScroll);

      return () => {
        browser.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
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
      <BackToTop active={active} />
      <MenuPanel />
      <Footer />
    </>
  );
};

export default DefaultLayout;
