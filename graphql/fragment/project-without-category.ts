import { gql } from '@apollo/client';

export const PROJECT_WITHOUT_CATEGORY_FRAGMENT = gql`
  fragment ProjectWithoutCategoryData on Project {
    name
    slug
    heroSlider {
      ...HeroSliderData
    }
    introContent {
        ...IntroContent
    }
    image {
        data {
            ...ImageData
        }
    }
  }
`;
