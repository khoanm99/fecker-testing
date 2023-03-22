import { gql } from '@apollo/client';

export const CONTENTS_FRAGMENT = gql`
    fragment ContentsData on HomeSectionContentsDynamicZone {
        ... on ComponentContentTextBlocks {
            textBlocks {
                ...TextBlock
            }
        }
        
        ... on ComponentContentAccordions{
            accordions {
                ...AccordionData
            }
        }
        
    }
`;
