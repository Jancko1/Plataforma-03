import mongoose from "mongoose";
import { MONGO_URI } from "./Config.js";

export const conenctDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Conecion Exitosa ${conn.Connection.name}`);
  } catch {
    console.error(`Conexion erronia ${error.message}`);
    process.exit(1);
  }
};
