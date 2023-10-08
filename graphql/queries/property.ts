import { graphql } from "../generated/gql";

export const getProperties = graphql(`
query getProperties {
    properties {
      data {
        attributes {
          address
          status
          images {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
          numberOfTenant
          price
          propertyId
          description
        }
      }
    }
  }
`);