import DefaultLayout from '@/components/DefaultLayout';
import HomeTemplate from '@/templates/HomeTemplate';

import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_HOME_SECTION } from '@/graphql/query/homeSection';

const Home = () => {
  return (
    <DefaultLayout>
      <HomeTemplate />
      <NextSeo title="" description="" />
    </DefaultLayout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_HOME_SECTION
    })
    .catch(() => {
      return {
        notFound: true
      };
    });
  if (!rs?.data) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      payload: rs?.data
    }
  };
};
