import { gql } from '@apollo/client';
export const GET_PROJECT_LIST_SLUG = gql`
  query getProjectListSlug {
    projects {
      data {
        attributes {
            slug
        }
      }
    }
  }
`;
