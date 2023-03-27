import { gql } from '@apollo/client';
import { CATEGORY_WITHOUT_PROJECT_FRAGMENT } from '@/graphql/fragment/category-without-project';
import { PROJECT_WITHOUT_CATEGORY_FRAGMENT } from '@/graphql/fragment/project-without-category';

export const PROJECT_FRAGMENT = gql`
  ${PROJECT_WITHOUT_CATEGORY_FRAGMENT}
  ${CATEGORY_WITHOUT_PROJECT_FRAGMENT}
  fragment ProjectData on Project {
    ...ProjectWithoutCategoryData
    category {
      data {
        attributes {
          ...CategoryWithoutProjectData
        }
      }
    }
  }
`;
