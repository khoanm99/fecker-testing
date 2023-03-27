import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ProjectEntity,
  ProjectSectionEntityResponse
} from '@/graphql/generated';
import { GET_PROJECT_DETAIL } from '@/graphql/query/projectDetail';
import { GET_PROJECT_LIST_SLUG } from '@/graphql/query/projectListSlug';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
  };
}

const ProjectDetail = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      <>Project</>
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

  if (!rs?.data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      dataResponse: rs?.data || {}
    }
  };
};
