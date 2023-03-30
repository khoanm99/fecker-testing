import { gql } from '@apollo/client';
export const GET_PROJECT_LIST_SLUG = gql`
  query getProjectListSlug($publicationState: PublicationState) {
    projects(publicationState: $publicationState) {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;
