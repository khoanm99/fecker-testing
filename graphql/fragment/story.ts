import { gql } from '@apollo/client';

export const STORY_FRAGMENT = gql`
  fragment StoryData on ComponentStoryStory {
    title
    year
    description
    image {
      data {
        ...ImageData
      }
    }
  }
`;
