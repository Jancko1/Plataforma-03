import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    projects: [Project]
    project(_id: ID!): Project

    #----------------Inicio Query de posts---------------------------------
    posts: [Post]
    users: [User]

    #----------------Inicio Query de posts---------------------------------
  }

  type Mutation {
    createProjet(titulo: String, description: String): Project
    deleteProject(_id: ID!): Project
    updateProject(_id: ID!, titulo: String!, description: String): Project

    #----------------Inicio Mutation de posts-------------------------------
    createPost(
      titulo: String
      descripcion: String
      Imagenes: String
      PostId: ID
    ): Post

    createUser (
      userid: ID
      fullname: String
      username: String
      password: String
      rol: String
      direccion: String
      telefono: String
    ): User
    #----------------fin Mutation de posts----------------------------------
  }
  type Project {
    _id: ID
    titulo: String
    description: String
    createAt: String
    updateAt: String
  }
  #
  type Post {
    _id: ID
    titulo: String
    descripcion: String
    Imagenes: String
    createAt: String
    updateAt: String
  }
  type User {
    _id: ID
    fullname: String
    username: String
    password: String
    rol: String
    direccion: String
    telefono: String
  }
`;
