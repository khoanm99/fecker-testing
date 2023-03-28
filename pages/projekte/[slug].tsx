import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  CategoryEntity,
  CategoryEntityResponseCollection,
  ProjectEntity,
  ProjectEntityResponse,
  ProjectSectionEntityResponse
} from '@/graphql/generated';
import { GET_PROJECT_DETAIL } from '@/graphql/query/projectDetail';
import { GET_PROJECT_LIST_SLUG } from '@/graphql/query/projectListSlug';
import { GET_CATEGORY_LIST_SLUG } from '@/graphql/query/categoryBySlug';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
    listProjects: CategoryEntityResponseCollection;
  };
}

const ProjectDetail = ({ dataResponse }: Props) => {
  console.log('dataResponse', dataResponse);
  return (
    <DefaultLayout>
      <>Project detail</>
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
  const rs: any = await apolloClient
    .query({
      query: GET_PROJECT_DETAIL,
      variables: {
        slug: _context?.params?.slug ? _context?.params?.slug : ''
      }
    })
    .catch(e => {});
  const project: ProjectEntityResponse = rs?.data?.projectBySlug;

  const listCategory = project?.data?.attributes?.category?.data.map(
    (category: CategoryEntity) => {
      return category?.attributes?.slug;
    }
  );
  const rs2: any = await apolloClient
    .query({
      query: GET_CATEGORY_LIST_SLUG,
      variables: {
        slug: listCategory || []
      }
    })
    .catch(e => {
      console.log('rs2', e);
    });
  if (!rs?.data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      dataResponse: rs?.data || {},
      listProjects: rs2?.data?.categoryBySlug || []
    },
    revalidate: getRevalidationTTL()
  };
};
