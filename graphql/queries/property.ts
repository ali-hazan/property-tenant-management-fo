import { graphql } from "../generated/gql";

export const getProperties = graphql(`
  query getProperties {
    properties {
      data {
        id
        attributes {
          address
          status
          images {
            data {
              id
              attributes {
                url
                name
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

export const getPropertyByPropertyId = graphql(`
  query getPropertyByPropertyId($id: String!) {
    properties(filters: { propertyId: { eq: $id } }) {
      data {
        id
        attributes {
          address
          status
          type
          images {
            data {
              id
              attributes {
                url
                name
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
