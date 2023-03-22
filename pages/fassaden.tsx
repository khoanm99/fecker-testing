import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_FASSADEN_SECTION } from '@/graphql/query/fassadenSection';
import FassadenTemplate from '@/templates/FassadenTemplate';
import { FassadenSectionEntityResponse } from '@/graphql/generated';
interface Props {
  fassadenSection: FassadenSectionEntityResponse;
}

const Fassaden = ({ fassadenSection }: Props) => {
  return (
    <DefaultLayout>
      {fassadenSection && <FassadenTemplate dataResponse={fassadenSection} />}
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
      fassadenSection: rs?.data.fassadenSection ?? {}
    }
  };
};
