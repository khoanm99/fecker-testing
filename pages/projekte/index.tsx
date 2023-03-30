import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  ProjectSectionEntityResponse
} from '@/graphql/generated';
import { GET_PROJECT_SECTION } from '@/graphql/query/projectSection';
import OverViewProjectTemplate from '@/templates/OverViewProjectTemplate';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
  };
}

const Project = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.projectSection.data?.attributes?.seo || null;
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
      {dataResponse && (
        <OverViewProjectTemplate
          heroSlider={
            dataResponse.projectSection.data?.attributes?.heroSlider ?? null
          }
          introContent={
            dataResponse.projectSection.data?.attributes?.introContent ?? null
          }
          content={dataResponse.projectSection.data?.attributes?.contents ?? []}
        />
      )}
    </DefaultLayout>
  );
};

export default Project;

export const getStaticProps: GetStaticProps = async _context => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_PROJECT_SECTION,
      variables: {
        publicationState: _context.preview ? 'PREVIEW' : 'LIVE'
      }
    })
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    },
    revalidate: getRevalidationTTL()
  };
};
