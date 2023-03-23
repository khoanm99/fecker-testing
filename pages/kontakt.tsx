import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_KONTACKT_SECTION } from '@/graphql/query/contactSection';
const Kontakt = () => {
  return (
    <DefaultLayout>
      <div>Kontackt</div>
    </DefaultLayout>
  );
};

export default Kontakt;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_KONTACKT_SECTION
    })
    .catch(() => {});
  return {
    props: {
      payload: rs?.data || {}
    }
  };
};
