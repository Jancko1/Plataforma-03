import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    requered: true,
  },
  password: {
    type: String,
    requered: true,
  },
  rol: {
    type: String,
  },
  direccion: {
    type: String,
  },
  telefono: {
    type: String,
  },
});
export default mongoose.model("User", UserSchema);
