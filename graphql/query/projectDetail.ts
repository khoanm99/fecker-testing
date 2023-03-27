import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';
import { PROJECT_FRAGMENT } from '@/graphql/fragment/project';
export const GET_PROJECT_DETAIL = gql`
  ${IMAGE_FRAGMENT}
  ${PROJECT_FRAGMENT}
  query getProjectBySlug($slug: String!) {
    projectBySlug(slug: $slug) {
      data {
        attributes {
          ...ProjectData
        }
      }
    }

    projects {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }
`;
