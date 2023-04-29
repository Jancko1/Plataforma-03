import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://andrey:ec907n3u0gyNaMjB@bd-app-finazas.urlbndo.mongodb.net/?retryWrites=true&w=majority";

