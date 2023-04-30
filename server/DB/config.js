import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://andrey:Yz2z1JGllrqWmz0C@cluster0.x2min4z.mongodb.net/?retryWrites=true&w=majority";

