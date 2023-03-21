import { gql } from '@apollo/client';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';

export const GET_FASSADEN_SECTION = gql`
  ${HERO_SLIDER_FRAGMENT}
  ${SEO_FRAGMENT}
  ${INTRO_CONTENT_FRAGMENT}
  query getHomeSection {
    fassadenSection {
      data {
        id
        attributes {
          heroSlider {
            ...HeroSliderData
          }
          introContent {
            ...IntroContent
          }
          seo {
            ...SeoData
          }
        }
      }
    }
  }
`;
