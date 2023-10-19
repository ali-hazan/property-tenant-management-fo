import { graphql } from "../generated/gql";

export const createProperty = graphql(`
  mutation createProperty($input: PropertyInput!) {
    createProperty(data: $input) {
      data {
        id
      }
    }
  }
`);

export const updateProperty = graphql(`
  mutation updateProperty($id: ID!, $input: PropertyInput!) {
    updateProperty(id: $id, data: $input) {
      data {
        id
      }
    }
  }
`);

export const deleteProperty = graphql(`
  mutation deleteProperty($id: ID!) {
    deleteProperty(id: $id) {
      data {
        id
      }
    }
  }
`);
