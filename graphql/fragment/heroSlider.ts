import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';

export const HERO_SLIDER_FRAGMENT = gql`
  ${IMAGE_FRAGMENT}
  fragment HeroSliderData on ComponentBasicHeroSlider {
    id
    title
    description
    image {
      data {
        ...ImageData
      }
    }
  }
`;
