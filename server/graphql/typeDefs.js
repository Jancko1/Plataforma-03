import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    #-----------inicio Query de Users-----------
    users: [User]
    user(username: String, password: String): User
    #-----------final Query de Users-----------

    #-----------inicio Query de Post-----------
    posts: [Post]
    post(_id: ID!): Post
    #-----------final Query de Post-----------
  }

  type Mutation {
    #----------Inicio de Mutation de Users-----------
    createUser(fullname: String, username: String, password: String, rol: String, telefono: String, direccion: String): User
    updateUser(_id: ID, name: String, fullname: String, username: String, password: String, rol: String, telefono: String, direccion: String): User
    deleteUser(_id: ID): User
    #----------Final de Mutation de Users-----------

    #----------Inicio de Mutation de Post-----------
    createPost(title: String, descripcion: String, Imagen: String, userId: ID): Post
    updatePost(_id: ID, title: String, descripcion: String, Imagen: String, userId: ID): Post
    deletePost(_id: ID): Post
    #----------Final de Mutation de Post-----------
  }
  #------------Info de User-----------
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


  #------------Info de Post------------
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
