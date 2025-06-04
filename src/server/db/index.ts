// ~/server/db.ts
import { drizzle } from "drizzle-orm/neon-http"; // or drizzle-orm/postgres
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema"; //
import { config } from "dotenv";

config(); // loads env variables

const sql = neon(process.env.POSTGRES_URL!);

export const db = drizzle(sql, { schema }); // 
