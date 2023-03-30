import { gql } from '@apollo/client';
import { SEO_FRAGMENT } from '@/graphql/fragment/seo';
import { INTRO_CONTENT_FRAGMENT } from '@/graphql/fragment/introContent';
import { HERO_SLIDER_FRAGMENT } from '@/graphql/fragment/heroSlider';
import { IMAGE_FRAGMENT } from '@/graphql/fragment/image';
import { TEAM_FRAGMENT } from '@/graphql/fragment/team';
import { PARTNER_FRAGMENT } from '@/graphql/fragment/partner';
import { STORY_FRAGMENT } from '@/graphql/fragment/story';

export const GET_TEAM_SECTION = gql`
  ${IMAGE_FRAGMENT}
  ${HERO_SLIDER_FRAGMENT}
  ${SEO_FRAGMENT}
  ${INTRO_CONTENT_FRAGMENT}
  ${TEAM_FRAGMENT}
  ${PARTNER_FRAGMENT}
  ${STORY_FRAGMENT}
  query getTeamSection($publicationState: PublicationState) {
    teamSection(publicationState: $publicationState) {
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
          contents {
            ... on ComponentContentStory {
              title
              stories {
                ...StoryData
              }
            }

            ... on ComponentContentPartner {
              title
              partners {
                ...PartnerData
              }
            }
          }
        }
      }
    }
    teams {
      data {
        attributes {
          ...TeamData
        }
      }
    }
  }
`;
