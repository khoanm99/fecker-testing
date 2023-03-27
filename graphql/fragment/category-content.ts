import { gql } from '@apollo/client';
import { CATEGORY_FRAGMENT } from '@/graphql/fragment/category';

export const CATEGORY_CONTENT_FRAGMENT = gql`
  ${CATEGORY_FRAGMENT}
  fragment CategoryContentData on CategoryRelationResponseCollection {
    data {
      attributes {
        ...CategoryData
      }
    }
  }
`;
