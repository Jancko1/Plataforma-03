import gql from "graphql-tag";

export const CREATE_USER = gql`
    mutation ($fullname: String, $username: String, $password: String, $rol: String, $direccion: String, $telefono: String) {
    createUser(
      fullname: $fullname
      username: $username
      password: $password
      role: $rol
      direccion: $direccion
      telefono: $telefono
    ) {
      fullname
      username
      password
      rol
      direccion
      telefono
    }
}`;
