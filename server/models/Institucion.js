import mongoose from "mongoose";

const intitucionSchema = new mongoose.Schema({
  foto: {
    type: String,
  },
  banners: {
    type: String,
  },
  mision: {
    type: String,
  },
  vision: {
    type: String,
  },
  facebool: {
    type: String
  },
  instagram: {
    type:  String
  }
});
export default mongoose.model("institucion", intitucionSchema)
