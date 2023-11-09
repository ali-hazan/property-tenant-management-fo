import { graphql } from "../generated/gql";

export const getUsers = graphql(`
  query getUsers {
    usersPermissionsUsers {
      data {
        id
        attributes {
          username
          email
          passport {
            data {
              attributes {
                url
              }
            }
          }
          confirmed
          blocked
          role {
            data {
              attributes {
                name
              }
            }
          }
          phone
          emiratesId {
            data {
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`);

export const getUserByUsername = graphql(`
  query getUserByUsername($username: String!) {
    usersPermissionsUsers(filters: { username: { eq: $username } }) {
      data {
        id
        attributes {
          username
          email
          passport {
            data {
              id
              attributes {
                url
              }
            }
          }
          confirmed
          blocked
          role {
            data {
              id
              attributes {
                name
              }
            }
          }
          phone
          emiratesId {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`);
