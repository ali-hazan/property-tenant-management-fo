/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createProperty($input: PropertyInput!) {\n    createProperty(data: $input) {\n      data {\n        id\n      }\n    }\n  }\n": types.CreatePropertyDocument,
    "\n  mutation updateProperty($id: ID!, $input: PropertyInput!) {\n    updateProperty(id: $id, data: $input) {\n      data {\n        id\n      }\n    }\n  }\n": types.UpdatePropertyDocument,
    "\n  mutation deleteProperty($id: ID!) {\n    deleteProperty(id: $id) {\n      data {\n        id\n      }\n    }\n  }\n": types.DeletePropertyDocument,
    "\n  query getProperties {\n    properties {\n      data {\n        id\n        attributes {\n          address\n          status\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          numberOfTenant\n          price\n          propertyId\n          description\n        }\n      }\n    }\n  }\n": types.GetPropertiesDocument,
    "\n  query getPropertyByPropertyId($id: String!) {\n    properties(filters: { propertyId: { eq: $id } }) {\n      data {\n        id\n        attributes {\n          address\n          status\n          type\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          numberOfTenant\n          price\n          propertyId\n          description\n        }\n      }\n    }\n  }\n": types.GetPropertyByPropertyIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createProperty($input: PropertyInput!) {\n    createProperty(data: $input) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createProperty($input: PropertyInput!) {\n    createProperty(data: $input) {\n      data {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateProperty($id: ID!, $input: PropertyInput!) {\n    updateProperty(id: $id, data: $input) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateProperty($id: ID!, $input: PropertyInput!) {\n    updateProperty(id: $id, data: $input) {\n      data {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteProperty($id: ID!) {\n    deleteProperty(id: $id) {\n      data {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation deleteProperty($id: ID!) {\n    deleteProperty(id: $id) {\n      data {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProperties {\n    properties {\n      data {\n        id\n        attributes {\n          address\n          status\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          numberOfTenant\n          price\n          propertyId\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProperties {\n    properties {\n      data {\n        id\n        attributes {\n          address\n          status\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          numberOfTenant\n          price\n          propertyId\n          description\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPropertyByPropertyId($id: String!) {\n    properties(filters: { propertyId: { eq: $id } }) {\n      data {\n        id\n        attributes {\n          address\n          status\n          type\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          numberOfTenant\n          price\n          propertyId\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPropertyByPropertyId($id: String!) {\n    properties(filters: { propertyId: { eq: $id } }) {\n      data {\n        id\n        attributes {\n          address\n          status\n          type\n          images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          numberOfTenant\n          price\n          propertyId\n          description\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;