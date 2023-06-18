import { gql } from "@apollo/client";

export const GET_POST = gql`
  {
    posts {
      title
      descripcion
      Imagen
    }
  }
`;

export const CREATE_POST = gql`
  mutation (
    $title: String
    $descripcion: String
    $imagen: String
    $userId: ID
  ) {
    createPost(
      title: $title
      descripcion: $descripcion
      Imagen: $imagen
      userId: $userId
    ) {
      _id
      title
      descripcion
      Imagen
      userId
    }
  }
`;
