import { graphql } from "../generated/gql";

export const getUsersPermissionsRole = graphql(`
  query getUsersPermissionsRoles {
    usersPermissionsRoles {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`);
