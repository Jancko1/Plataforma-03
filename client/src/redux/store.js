import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define el slice de usuario
const userSlice = createSlice({
  name: 'user',
  initialState: null,  // Comienza sin un usuario
  reducers: {
    setUser: (state, action) => action.payload,  // Almacena el usuario
  },
});

// Exporta las acciones generadas por createSlice
export const { setUser } = userSlice.actions;

// Configura el store de Redux con el slice de usuario
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
