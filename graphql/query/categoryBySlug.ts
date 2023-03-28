import { gql } from '@apollo/client';
import {CATEGORY_WITHOUT_PROJECT_FRAGMENT} from "@/graphql/fragment/category-without-project";
export const GET_CATEGORY_LIST_SLUG = gql`
    ${CATEGORY_WITHOUT_PROJECT_FRAGMENT}
    query getCategoryBySlug($slug: [String]!) {
        categoryBySlug(slug: $slug) {
            data {
                attributes {
                    ...CategoryWithoutProjectData
                    project{
                        data{
                            attributes{
                                name
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;
