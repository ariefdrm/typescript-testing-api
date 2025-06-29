import dotenv from "dotenv";
import path from "node:path";
import { Client } from "pg";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

export { client };
