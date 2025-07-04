import dotenv from "dotenv";
import path from "node:path";
import { Pool } from "pg";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const client = new Pool({
  connectionString: process.env.DATABASE_URL,
});
