import { gql } from "@apollo/client";

export const GET_POST = gql`
  {
    posts {
      titulo
      descripcion
      Imagenes
    }
  }
`;

export const CREATE_POST = gql`
  mutation ($titulo: String, $descripcion: String, $imagenes: String) {
    createPost(
      titulo: $titulo
      descripcion: $descripcion
      Imagenes: $imagenes
    ) {
      titulo
      descripcion
      Imagenes
    }
  }
`;
