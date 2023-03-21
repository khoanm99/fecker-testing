import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';

export const TEXT_BLOCK_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment TextBlock on ComponentBasicTextBlock {
    id
    title
    description
    image {
      data {
        ...ImageData
      }
    }
  }
`;
