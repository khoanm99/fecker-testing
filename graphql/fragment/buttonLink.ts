import { gql } from '@apollo/client';

export const BUTTON_LINK_FRAGMENT = gql`
  fragment ButtonLinkData on ComponentBasicButtonLink {
    id
    title
    url
  }
`;
