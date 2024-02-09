import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const DB_USER = process.env.POSTGRES_USER!;
const DB_PASS = process.env.POSTGRES_PASSWORD!;
const DB_HOST = process.env.POSTGRES_HOST!;
const DB_DATABASE = process.env.POSTGRES_DATABASE!;

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    database: DB_DATABASE,
    host: DB_HOST,
    password: DB_PASS,
    user: DB_USER,
    ssl: true,
  },
  tablesFilter: ["streetwhere_*"],
});
