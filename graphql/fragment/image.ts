import { gql } from '@apollo/client';

export const IMAGE_FRAGMENT = gql`
  fragment ImageData on UploadFileEntity {
    attributes {
      name
      alternativeText
      width
      height
      url
      previewUrl
    }
  }
`;
