import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  fullname: "",
  username: "",
  password: "",
  rol: "",
  telefono: "",
  direccion: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { _id, fullname, username, password, rol, telefono, direccion } =
        action.payload;
      state._id = _id;
      state.fullname = fullname;
      state.username = username;
      state.password = password;
      state.rol = rol;
      state.telefono = telefono;
      state.direccion = direccion;
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
