import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { ProjectSectionEntityResponse } from '@/graphql/generated';
import { GET_VERMIETEN_VERKAUFEN_SECTION } from '@/graphql/query/vermietenVerkaufenSection';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
  };
}

const Vermieten = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      <>VERMIETEN_VERKAUFEN</>
    </DefaultLayout>
  );
};

export default Vermieten;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_VERMIETEN_VERKAUFEN_SECTION
    })
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    }
  };
};
