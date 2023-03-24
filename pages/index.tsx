import DefaultLayout from '@/components/DefaultLayout';
import HomeTemplate from '@/templates/HomeTemplate';

import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_HOME_SECTION } from '@/graphql/query/homeSection';
import { HomeSectionEntityResponse } from '@/graphql/generated';

interface Props {
  dataResponse: {
    homeSection: HomeSectionEntityResponse;
  };
}

const Home = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      {dataResponse && <HomeTemplate dataResponse={dataResponse} />}
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
      // return {
      //   notFound: true
      // };
    });
  // if (!rs?.data) {
  //   return {
  //     notFound: true
  //   };
  // }

  return {
    props: {
      dataResponse: rs?.data ?? {}
    }
  };
};
