import { gql } from '@apollo/client';

export const PARTNER_FRAGMENT = gql`
  fragment PartnerData on ComponentPartnerPartner {
    id
    title
    link
    image {
      data {
        ...ImageData
      }
    }
  }
`;
