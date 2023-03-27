import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { HomeSectionEntityResponse } from '@/graphql/generated';
import OverViewProjectTemplate from '@/templates/OverViewProjectTemplate';
import { GET_FASSADEN_SECTION } from '@/graphql/query/fassadenSection';

interface Props {
  dataResponse: {
    projectSection: HomeSectionEntityResponse;
  };
}

const Referenzen = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout title={'Fecker Holzbau AG'} description={'Lorem Ipsum...'}>
      {dataResponse && <OverViewProjectTemplate dataResponse={dataResponse} />}
    </DefaultLayout>
  );
};

export default Referenzen;

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
    }
  };
};
