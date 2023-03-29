import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { ProjectSectionEntityResponse } from '@/graphql/generated';
import { GET_PROJECT_SECTION } from '@/graphql/query/projectSection';
import OverViewProjectTemplate from '@/templates/OverViewProjectTemplate';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
  };
}

const Project = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      {dataResponse && (
        <OverViewProjectTemplate
          heroSlider={
            dataResponse.projectSection.data?.attributes?.heroSlider ??
            undefined
          }
          introContent={
            dataResponse.projectSection.data?.attributes?.introContent ??
            undefined
          }
          content={dataResponse.projectSection.data?.attributes?.contents ?? []}
        />
      )}
    </DefaultLayout>
  );
};

export default Project;

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
    },
    revalidate: getRevalidationTTL()
  };
};
