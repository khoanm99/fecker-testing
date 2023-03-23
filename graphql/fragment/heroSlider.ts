import { gql } from '@apollo/client';
import { BUTTON_LINK_FRAGMENT } from '@/graphql/fragment/buttonLink';

export const HERO_SLIDER_FRAGMENT = gql`
  ${BUTTON_LINK_FRAGMENT}
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
