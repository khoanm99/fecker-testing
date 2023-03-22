import { gql } from '@apollo/client';

export const TEAM_FRAGMENT = gql`
  fragment TeamData on Team {
    name
    image {
      data {
        ...ImageData
      }
    }
  }
`;
