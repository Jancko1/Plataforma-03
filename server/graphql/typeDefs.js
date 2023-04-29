import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
    user(_id: ID!): User
    posts: [Post]
    post(_id: ID!): Post
  }

  type Mutation {
    createUser(fullname: String, username: String, password: String, rol: String, telefono: String, direccion: String): User
    updateUser(_id: ID, name: String, fullname: String, username: String, password: String, rol: String, telefono: String, direccion: String): User
    deleteUser(_id: ID): User
    createPost(title: String, descripcion: String, Imagen: String, userId: ID): Post
    updatePost(_id: ID, title: String, descripcion: String, Imagen: String, userId: ID): Post
    deletePost(_id: ID): Post
  }

  type User {
    _id: ID
    fullname: String
    username: String
    password: String
    rol: String
    telefono: String
    direccion: String
    createdAt: String
    updatedAt: String
    post: [Post]
  }

  type Post {
    _id: ID
    title: String
    descripcion: String
    Imagen: String
    userId: String
    user: User
    createdAt: String
    updatedAt: String
  }
`;
