import { graphql } from "../generated/gql";

export const createUsersPermissionsUser= graphql(`
  mutation createUsersPermissionsUser($input: UsersPermissionsUserInput!) {
    createUsersPermissionsUser(data: $input) {
      data {
        id
      }
    }
  }
`);

export const updateUsersPermissionsUser = graphql(`
  mutation updateUsersPermissionsUser($id: ID!, $input: UsersPermissionsUserInput!) {
    updateUsersPermissionsUser(id: $id, data: $input) {
      data {
        id
      }
    }
  }
`);

export const deleteUsersPermissionsUser = graphql(`
  mutation deleteUsersPermissionsUser($id: ID!) {
    deleteUsersPermissionsUser(id: $id) {
      data {
        id
      }
    }
  }
`);
