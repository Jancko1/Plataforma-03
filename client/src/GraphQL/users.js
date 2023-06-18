import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation (
    $fullname: String
    $username: String
    $password: String
    $telefono: String
    $direccion: String
    $rol: String
  ) {
    createUser(
      fullname: $fullname
      username: $username
      password: $password
      telefono: $telefono
      direccion: $direccion
      rol: $rol
    ) {
      fullname
      username
      password
      rol
      telefono
      fullname
    }
  }
`;

export const VALID_USER = gql`
  query ($username: String, $password: String) {
    user(username: $username, password: $password) {
      _id
      fullname
      username
      rol
      telefono
      direccion
    }
  }
`;
