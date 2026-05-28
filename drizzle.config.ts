import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// .env.local içindeki DATABASE_URL'i yükle (Next.js bu dosyayı kullanır).
config({ path: ".env.local" });

export default defineConfig({
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
