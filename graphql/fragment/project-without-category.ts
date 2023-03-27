import { gql } from '@apollo/client';

export const PROJECT_WITHOUT_CATEGORY_FRAGMENT = gql`
  fragment ProjectWithoutCategoryData on Project {
    heroSlider {
      ...HeroSliderData
    }
    project {
      title
      content
      slug
      description
    }
    projectGallery {
      image {
        data {
          ...ImageData
        }
      }
      title
    }
  }
`;
