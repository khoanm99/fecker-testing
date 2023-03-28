import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_INNOVATION_SECTION } from '@/graphql/query/innovationSection';
import { InnovationSectionEntityResponse } from '@/graphql/generated';
import InnovationTemplate from '@/templates/Innovation';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    innovationSection: InnovationSectionEntityResponse;
  };
}
const Innovation = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      {dataResponse && <InnovationTemplate dataResponse={dataResponse} />}
    </DefaultLayout>
  );
};

export default Innovation;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_INNOVATION_SECTION
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
      dataResponse: rs?.data ?? {},
      revalidate: getRevalidationTTL()
    }
  };
};
