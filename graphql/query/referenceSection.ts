import { gql } from '@apollo/client';
import { TEXT_BLOCK_FRAGMENT } from '@/graphql/fragment/textBlock';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';
import { ACCORDION_FRAGMENT } from '@/graphql/fragment/accordion';
import { CATEGORY_CONTENT_FRAGMENT } from '@/graphql/fragment/category-content';

export const GET_REFERENCE_SECTION = gql`
  ${IMAGE_FRAGMENT}
  ${HERO_SLIDER_FRAGMENT}
  ${TEXT_BLOCK_FRAGMENT}
  ${ACCORDION_FRAGMENT}
  ${SEO_FRAGMENT}
  ${INTRO_CONTENT_FRAGMENT}
  ${CATEGORY_CONTENT_FRAGMENT}
  query getReferenceSection {
    referenceSection {
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

            ... on ComponentContentListProject {
              category {
                ...CategoryContentData
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
