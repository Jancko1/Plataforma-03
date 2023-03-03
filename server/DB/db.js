import mongoose from "mongoose";
import { MONGO_URI } from "./Config.js";

export const conenctDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://Pruebas:UwZAdPx0HxnHWKpr@plataforma03-v2.ka75tw6.mongodb.net/test'
    );
    console.log(`Conecion Exitosa ${conn.Connection.name}`);
  } catch {
    console.error(`Conexion erronia ${error.message}`);
    process.exit(1)
  }
};
