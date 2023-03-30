import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_INNOVATION_SECTION } from '@/graphql/query/innovationSection';
import {
  ComponentBasicSeo,
  InnovationSectionEntityResponse
} from '@/graphql/generated';
import InnovationTemplate from '@/templates/Innovation';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    innovationSection: InnovationSectionEntityResponse;
  };
}
const Innovation = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.innovationSection.data?.attributes?.seo || null;
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
      {dataResponse && <InnovationTemplate dataResponse={dataResponse} />}
    </DefaultLayout>
  );
};

export default Innovation;

export const getStaticProps: GetStaticProps = async _context => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_INNOVATION_SECTION,
      variables: {
        publicationState: _context.preview ? 'PREVIEW' : 'LIVE'
      }
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
    },
    revalidate: getRevalidationTTL()
  };
};
