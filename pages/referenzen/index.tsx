import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { ProjectSectionEntityResponse } from '@/graphql/generated';
import OverViewProjectTemplate from '@/templates/OverViewProjectTemplate';
import { GET_PROJECT_SECTION } from '@/graphql/query/projectSection';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
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
      query: GET_PROJECT_SECTION
    })
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    }
  };
};
