import DefaultLayout from 'components/DefaultLayout';
import ImmobilienTemplate from 'templates/ImmobilienTemplate';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { HomeSectionEntityResponse } from '@/graphql/generated';
import { GET_IMMOBILIEN_SECTION } from '@/graphql/query/immobilienSection';

interface Props {
  dataResponse: {
    homeSection: HomeSectionEntityResponse;
  };
}

const Immobilien = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      {dataResponse && <ImmobilienTemplate dataResponse={dataResponse} />}
    </DefaultLayout>
  );
};

export default Immobilien;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_IMMOBILIEN_SECTION
    })
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    }
  };
};