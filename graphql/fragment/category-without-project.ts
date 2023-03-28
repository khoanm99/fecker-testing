import { gql } from '@apollo/client';

export const CATEGORY_WITHOUT_PROJECT_FRAGMENT = gql`
  fragment CategoryWithoutProjectData on Category {
    name
    slug
  }
`;
