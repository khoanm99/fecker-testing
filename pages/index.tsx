import DefaultLayout from '@/components/DefaultLayout';
import HomeTemplate from '@/templates/HomeTemplate';

import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <DefaultLayout>
      <HomeTemplate />
      <NextSeo title="" description="" />
    </DefaultLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async context => {
  const locale: string = context.locale ? context.locale : '';

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
};
