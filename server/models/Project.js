import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Proyect", ProjectSchema);
