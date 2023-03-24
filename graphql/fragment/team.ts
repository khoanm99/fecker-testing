import { gql } from '@apollo/client';

export const TEAM_FRAGMENT = gql`
  fragment TeamData on Team {
    name
    position
    imageLandscape {
      data {
        ...ImageData
      }
    }
    imagePortrait {
      data {
        ...ImageData
      }
    }
  }
`;
