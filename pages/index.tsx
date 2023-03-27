import DefaultLayout from '@/components/DefaultLayout';
import HomeTemplate from '@/templates/HomeTemplate';

import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_HOME_SECTION } from '@/graphql/query/homeSection';
import { HomeSectionEntityResponse } from '@/graphql/generated';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    homeSection: HomeSectionEntityResponse;
  };
}

const Home = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout title={'Fecker Holzbau AG'} description={'Lorem Ipsum...'}>
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
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    },
    revalidate: getRevalidationTTL()
  };
};
