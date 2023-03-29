import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_FASSADEN_SECTION } from '@/graphql/query/fassadenSection';
import FassadenTemplate from '@/templates/FassadenTemplate';
import { FassadenSectionEntityResponse } from '@/graphql/generated';
import { getRevalidationTTL } from '@/utils/helpers';
interface Props {
  dataResponse: {
    fassadenSection: FassadenSectionEntityResponse;
  };
}

const Fassaden = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      {dataResponse && <FassadenTemplate dataResponse={dataResponse} />}
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
    .catch(() => {});
  return {
    props: {
      dataResponse: rs?.data ?? {}
    },
    revalidate: getRevalidationTTL()
  };
};
