
import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    Imagenes: {
      type: String,
    }
    ,
    PostId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },

);
export default mongoose.model("Post", PostSchema);
