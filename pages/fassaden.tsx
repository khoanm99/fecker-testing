import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_FASSADEN_SECTION } from '@/graphql/query/fassadenSection';
const Fassaden = () => {
  return (
    <DefaultLayout>
      <div>fassaden</div>
    </DefaultLayout>
  );
};

export default Fassaden;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_FASSADEN_SECTION
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
