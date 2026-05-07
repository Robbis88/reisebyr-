import { neon } from "@neondatabase/serverless";

const rawUrl = process.env.DATABASE_URL ?? "";
const cleanUrl = rawUrl.replace(/\s+/g, "");

if (!cleanUrl) {
  throw new Error(
    "DATABASE_URL er ikke satt. Sjekk .env.local lokalt eller miljøvariabler i Vercel.",
  );
}

export const sql = neon(cleanUrl);
