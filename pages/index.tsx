import DefaultLayout from '@/components/DefaultLayout';
import HomeTemplate from '@/templates/HomeTemplate';

import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_HOME_SECTION } from '@/graphql/query/homeSection';
import { HomeSectionEntityResponse } from '@/graphql/generated';

interface Props {
  homeSection?: HomeSectionEntityResponse;
}

const Home = ({ homeSection }: Props) => {
  return (
    <DefaultLayout title={'Fecker Holzbau AG'} description={'Lorem Ipsum...'}>
      {homeSection && <HomeTemplate dataResponse={homeSection} />}
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
    .catch(() => {});

  return {
    props: {
      homeSection: rs?.data?.homeSection ?? {}
    }
  };
};
