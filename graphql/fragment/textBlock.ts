import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';
import { BUTTON_LINK_FRAGMENT } from './buttonLink';

export const TEXT_BLOCK_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  ${BUTTON_LINK_FRAGMENT}
  fragment TextBlock on ComponentTextBlockTextBlock {
    id
    title
    description
    image {
      data {
        ...ImageData
      }
    }
    buttonLink {
      ...ButtonLinkData
    }
  }
`;
