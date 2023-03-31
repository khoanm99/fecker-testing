import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  ProjectEntity,
  ProjectEntityResponse,
  ProjectEntityResponseCollection
} from '@/graphql/generated';
import { GET_PROJECT_DETAIL } from '@/graphql/query/projectDetail';
import { GET_PROJECT_LIST_SLUG } from '@/graphql/query/projectListSlug';
import ProjectDetailTemplate from '@/templates/ProjectDetailTemplate';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    projectBySlug: ProjectEntityResponse;
  };
  listProjects: ProjectEntity[];
}

const ProjectDetail = ({ dataResponse, listProjects }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse?.projectBySlug?.data?.attributes?.seo || null;
  return (
    <DefaultLayout
      title={
        seo?.title ||
        dataResponse?.projectBySlug?.data?.attributes?.name ||
        'Fecker Holzbau AG'
      }
      description={seo?.description || ''}
    >
      {dataResponse && (
        <ProjectDetailTemplate
          projectBySlug={dataResponse?.projectBySlug ?? null}
          listProject={listProjects}
          key={dataResponse?.projectBySlug.data?.attributes?.slug ?? null}
        />
      )}
    </DefaultLayout>
  );
};

export default ProjectDetail;

export const getStaticPaths = async (_context: any) => {
  const apolloClient = initializeApollo();

  const rs = await apolloClient
    .query({
      query: GET_PROJECT_LIST_SLUG
    })
    .catch(() => {});
  const projects: ProjectEntity[] = rs?.data?.projects?.data;

  let paths: { params: { slug: string } }[] = [];

  if (projects !== null && typeof projects === 'object') {
    for (const item of projects) {
      if (item.attributes?.slug) {
        paths.push({
          params: { slug: item.attributes?.slug || '' }
        });
      }
    }
  }

  return {
    paths: paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async _context => {
  const apolloClient = initializeApollo();
  console.log('_context?.params?.slug', _context?.params?.slug);
  const rs: any = await apolloClient
    .query({
      query: GET_PROJECT_DETAIL,
      variables: {
        slug: _context?.params?.slug ? _context?.params?.slug : '',
        publicationState: _context.preview ? 'PREVIEW' : 'LIVE'
      }
    })
    .catch(e => {});
  const project: ProjectEntityResponse = rs?.data?.projectBySlug;
  const listProjects =
    project?.data?.attributes?.category?.data?.attributes?.project?.data || [];

  if (!rs?.data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      dataResponse: rs?.data || {},
      listProjects: listProjects
    },
    revalidate: getRevalidationTTL()
  };
};
