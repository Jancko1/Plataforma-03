import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    projects: [Project]
    project(_id: ID!): Project
  }

  type Mutation {
    createProjet(titulo: String, description: String): Project
    deleteProject(_id: ID!): Project
    updateProject(_id: ID!, titulo: String!, description: String): Project
  }
  type Project {
    _id: ID
    titulo: String
    description: String
    createAt: String
    updateAt: String
  }
`;
