import { gql } from '@apollo/client';
import { TEXT_BLOCK_FRAGMENT } from '@/graphql/fragment/textBlock';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';
import {CONTENTS_FRAGMENT} from "@/graphql/fragment/contents";
import {IMAGE_FRAGMENT} from "@/graphql/fragment/image";
import {ACCORDION_FRAGMENT} from "@/graphql/fragment/accordion";

export const GET_INNOVATION_SECTION = gql`
    ${IMAGE_FRAGMENT}
    ${HERO_SLIDER_FRAGMENT}
    ${TEXT_BLOCK_FRAGMENT}
    ${SEO_FRAGMENT}
    ${INTRO_CONTENT_FRAGMENT}
    ${ACCORDION_FRAGMENT}
    ${CONTENTS_FRAGMENT}
  query getInnovationSection {
    innovationSection {
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
          contents{
              ...ContentsData
          }
        }
      }
    }
  }
`;
