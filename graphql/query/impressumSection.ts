import { gql } from '@apollo/client';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';

export const GET_IMPRESSUM_SECTION = gql`
  ${SEO_FRAGMENT}
  query getImpressumSection($publicationState: PublicationState) {
    impressumSection(publicationState: $publicationState) {
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
