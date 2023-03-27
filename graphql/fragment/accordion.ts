import { gql } from '@apollo/client';

export const ACCORDION_FRAGMENT = gql`
  fragment AccordionData on ComponentAccordionAccordion {
    id
    title
    content
    image {
      data {
        ...ImageData
      }
    }
  }
`;
