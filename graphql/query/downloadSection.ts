import { gql } from '@apollo/client';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';

export const GET_DOWNLOAD_SECTION = gql`
  ${SEO_FRAGMENT}
  query getDownloadSection($publicationState: PublicationState) {
    downloadSection(publicationState: $publicationState) {
      data {
        id
        attributes {
          title
          content
          seo {
            ...SeoData
          }
        }
      }
    }
  }
`;
