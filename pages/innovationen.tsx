import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_INNOVATION_SECTION } from '@/graphql/query/innovationSection';
import { InnovationSectionEntityResponse } from '@/graphql/generated';
import InnovationTemplate from '@/templates/Innovation';

interface Props {
  innovationSection: InnovationSectionEntityResponse;
}
const Innovation = ({ innovationSection }: Props) => {
  return (
    <DefaultLayout>
      {innovationSection && (
        <InnovationTemplate dataResponse={innovationSection} />
      )}
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
      innovationSection: rs?.data?.innovationSection ?? {}
    }
  };
};
