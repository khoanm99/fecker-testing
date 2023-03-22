import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';

export const HERO_SLIDER_FRAGMENT = gql`
  fragment HeroSliderData on ComponentBasicHeroSlider {
    id
    title
    image {
      data {
        ...ImageData
      }
    }
    buttonLink {
      ...ButtonLinkData
    }
  }
`;
