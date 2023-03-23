import { gql } from '@apollo/client';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';

export const GET_KONTACKT_SECTION = gql`
  ${IMAGE_FRAGMENT}
  ${HERO_SLIDER_FRAGMENT}
  ${SEO_FRAGMENT}
  ${INTRO_CONTENT_FRAGMENT}
  query getContactSection {
    contactSection {
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
