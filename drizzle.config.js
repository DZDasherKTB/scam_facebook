import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  out: "./drizzle",
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_vV8LhPoAjys4@ep-late-grass-a8ifcuzb-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
});
