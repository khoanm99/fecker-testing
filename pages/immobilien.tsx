import DefaultLayout from 'components/DefaultLayout';
import ImmobilienTemplate from 'templates/ImmobilienTemplate';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  ImmobilienSectionEntityResponse
} from '@/graphql/generated';
import { GET_IMMOBILIEN_SECTION } from '@/graphql/query/immobilienSection';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    immobilienSection: ImmobilienSectionEntityResponse;
  };
}

const Immobilien = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.immobilienSection?.data?.attributes?.seo || null;
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
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
    },
    revalidate: getRevalidationTTL()
  };
};
