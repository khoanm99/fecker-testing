import { gql } from '@apollo/client';
import { CATEGORY_WITHOUT_PROJECT_FRAGMENT } from '@/graphql/fragment/category-without-project';
import { PROJECT_WITHOUT_CATEGORY_FRAGMENT } from '@/graphql/fragment/project-without-category';

export const CATEGORY_FRAGMENT = gql`
  ${CATEGORY_WITHOUT_PROJECT_FRAGMENT}
  ${PROJECT_WITHOUT_CATEGORY_FRAGMENT}
  fragment CategoryData on Category {
    ...CategoryWithoutProjectData
    project {
      data {
        attributes {
          ...ProjectWithoutCategoryData
        }
      }
    }
  }
`;
