import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';
import { PROJECT_FRAGMENT } from '@/graphql/fragment/project';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';
export const GET_PROJECT_DETAIL = gql`
  ${IMAGE_FRAGMENT}
  ${PROJECT_FRAGMENT}
  ${HERO_SLIDER_FRAGMENT}
  query getProjectBySlug($slug: String!) {
    projectBySlug(slug: $slug) {
      data {
        attributes {
          ...ProjectData
        }
      }
    }

    projects {
      data {
        id
        attributes {
          project {
            title
            slug
          }
        }
      }
    }
  }
`;
