import { gql } from '@apollo/client';
import { TEXT_BLOCK_FRAGMENT } from '@/graphql/fragment/textBlock';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';

export const GET_HOME_SECTION = gql`
  ${HERO_SLIDER_FRAGMENT}
  ${TEXT_BLOCK_FRAGMENT}
  ${SEO_FRAGMENT}
  ${INTRO_CONTENT_FRAGMENT}
  query getHomeSection {
    homeSection {
      data {
        id
        attributes {
          heroSlider {
            ...HeroSliderData
          }
          introContent {
            ...IntroContent
          }
          ... on ComponentContentTextBlocks {
            id
            textBlocks {
              ...TextBlock
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
