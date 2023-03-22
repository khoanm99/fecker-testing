import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_INNOVATION_SECTION } from '@/graphql/query/innovationSection';
const Innovation = () => {
  return (
    <DefaultLayout>
      <div>innovation</div>
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
