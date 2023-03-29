import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  TeamEntityResponseCollection,
  TeamSectionEntityResponse
} from '@/graphql/generated';
import { GET_TEAM_SECTION } from '@/graphql/query/teamSection';
import FirmaTemplate from '@/templates/FirmaTemplate';
import { getRevalidationTTL } from '@/utils/helpers';
interface Props {
  dataResponse: {
    teamSection?: TeamSectionEntityResponse;
    teams?: TeamEntityResponseCollection;
  };
}
const Firma = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.teamSection?.data?.attributes?.seo || null;
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
      {dataResponse && <FirmaTemplate dataResponse={dataResponse} />}
    </DefaultLayout>
  );
};

export default Firma;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_TEAM_SECTION
    })
    .catch(() => {});
  return {
    props: {
      dataResponse: rs?.data ?? {}
    },
    revalidate: getRevalidationTTL()
  };
};
