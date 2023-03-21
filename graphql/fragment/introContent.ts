import { gql } from '@apollo/client';

export const INTRO_CONTENT_FRAGMENT = gql`
  fragment IntroContent on ComponentBasicIntroContent {
    id
    title
    description
    content
  }
`;
