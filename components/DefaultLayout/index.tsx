import { useEffect, useState, ReactNode } from 'react';
import Header from '@/organisms/commons/header/header';
import Footer from '@/organisms/commons/footer/footer';
import MenuPanel from '@/organisms/commons/menu';
import useResetState from '@/hooks/useResetState';
import ContactSticky from '@/atoms/ContactSticky';
import BackToTop from '@/atoms/backToTop';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';

export interface DefaultLayoutProps {
  title?: string;
  description?: string;
  children: ReactNode;
  templateName?: string;
}

const DefaultLayout = ({
  title = 'Fecker Holzbau AG',
  description,
  templateName,
  children
}: DefaultLayoutProps) => {
  useResetState();
  const [active, setActive] = useState<Boolean>(false);
  const [sticky, setsticky] = useState<Boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let browser = window;
      const handleScroll = () => {
        browser.pageYOffset > browser.innerHeight
          ? setActive(true)
          : setActive(false);

        browser.pageYOffset > 140 ? setsticky(true) : setsticky(false);
      };
      browser.addEventListener('scroll', handleScroll);

      return () => {
        browser.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      <Header sticky={sticky} />
      <NextSeo title={title || ''} description={description ?? ''} />
      <motion.main
        initial="hidden"
        animate="enter"
        variants={variants}
        transition={{ type: 'ease', duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.main>
      <ContactSticky template={templateName || ''} />
      <BackToTop active={active} />
      <MenuPanel />
      <Footer />
    </>
  );
};

export default DefaultLayout;

const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 }
};
