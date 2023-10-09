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
