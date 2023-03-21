import { gql } from '@apollo/client';

export const SEO_FRAGMENT = gql`
  fragment SeoData on ComponentBasicSeo {
    id
    title
    description
  }
`;
