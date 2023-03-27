import { gql } from '@apollo/client';
import { CATEGORY_WITHOUT_PROJECT_FRAGMENT } from '@/graphql/fragment/category-without-project';

export const PROJECT_WITHOUT_CATEGORY_FRAGMENT = gql`
  ${CATEGORY_WITHOUT_PROJECT_FRAGMENT}
  fragment ProjectWithoutCategoryData on Project {
    name
    content
    slug
    image {
      data {
        ...ImageData
      }
    }
  }
`;
