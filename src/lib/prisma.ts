import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";
import fs from "fs";
import path from "path";

const sslCa = fs.readFileSync(path.join(process.cwd(), "certs", "ca.pem"));

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST!,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
  // Aiven (or a cold-started DB) can take >10s to complete the first TLS handshake.
  connectTimeout: 30_000,
  acquireTimeout: 30_000,
  ssl: {
    ca: sslCa,
    rejectUnauthorized: true,
  },
  connectionLimit: 5,
});
// The Prisma adapter option is runtime-valid but not part of the generated PrismaClient option typings.
// Casting here keeps `prisma.*` model types intact for the rest of the app.
const prisma = new PrismaClient({ adapter } as any);
export { prisma };