import { gql } from '@apollo/client';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { PROJECT_WITHOUT_CATEGORY_FRAGMENT } from '@/graphql/fragment/project-without-category';
export const GET_PROJECT_DETAIL = gql`
  ${IMAGE_FRAGMENT}
  ${HERO_SLIDER_FRAGMENT}
  ${INTRO_CONTENT_FRAGMENT}
  ${PROJECT_WITHOUT_CATEGORY_FRAGMENT}
  query getProjectBySlug($slug: String!, $publicationState: PublicationState) {
    projectBySlug(slug: $slug, publicationState: $publicationState) {
      data {
        attributes {
          ...ProjectWithoutCategoryData
          category {
            data {
              attributes {
                name
                project {
                  data {
                    attributes {
                      name
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
