import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { ProjectSectionEntityResponse } from '@/graphql/generated';
import { GET_REFERENCE_SECTION } from '@/graphql/query/referenceSection';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
  };
}

const Reference = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      <>Reference</>
    </DefaultLayout>
  );
};

export default Reference;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_REFERENCE_SECTION
    })
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    }
  };
};
