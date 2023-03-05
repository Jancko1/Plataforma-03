import { Timestamp } from "mongodb";
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
    PostId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Post", PostSchema);
