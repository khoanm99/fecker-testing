import { gql } from '@apollo/client';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';
import { TEXT_BLOCK_FRAGMENT } from '@/graphql/fragment/textBlock';
import { ACCORDION_FRAGMENT } from '@/graphql/fragment/accordion';

export const GET_KONTACKT_SECTION = gql`
  ${IMAGE_FRAGMENT}
  ${HERO_SLIDER_FRAGMENT}
  ${TEXT_BLOCK_FRAGMENT}
  ${ACCORDION_FRAGMENT}
  ${SEO_FRAGMENT}
  ${INTRO_CONTENT_FRAGMENT}
  query getContactSection($publicationState: PublicationState) {
    contactSection(publicationState: $publicationState) {
      data {
        id
        attributes {
          heroSlider {
            ...HeroSliderData
          }
          introContent {
            ...IntroContent
          }
          contents {
            ... on ComponentContentTextBlocks {
              textBlocks {
                ...TextBlock
              }
            }

            ... on ComponentContentAccordions {
              accordions {
                ...AccordionData
              }
            }
          }
          seo {
            ...SeoData
          }
        }
      }
    }
  }
`;
