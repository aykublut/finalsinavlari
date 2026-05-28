import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Sunucu tarafı Drizzle istemcisi (server action'larda kullanılır).
// DATABASE_URL = Supabase Postgres bağlantı dizesi (pooler önerilir).
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL tanımlı değil. .env.local içine Supabase Postgres bağlantı dizesini ekle.",
  );
}

// Serverless ortamda prepared statement'ları kapatıyoruz (pgbouncer uyumu).
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });
