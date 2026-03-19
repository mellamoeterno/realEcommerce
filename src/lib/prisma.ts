import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma";
import fs from "fs";
import path from "path";

const sslCa = fs.readFileSync(path.join(process.cwd(), "certs", "ca.pem"));
const dbUrl = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL) : null;

const adapter = new PrismaMariaDb({
  host: dbUrl?.hostname ?? process.env.DATABASE_HOST!,
  port: Number(dbUrl?.port ?? process.env.DATABASE_PORT),
  user: dbUrl?.username ?? process.env.DATABASE_USER!,
  password: dbUrl?.password ?? process.env.DATABASE_PASSWORD!,
  database: dbUrl?.pathname.replace(/^\//, "") ?? process.env.DATABASE_NAME!,
  // Aiven (or a cold-started DB) can take >10s to complete the first TLS handshake.
  connectTimeout: 30_000,
  acquireTimeout: 30_000,
  ssl: {
    ca: sslCa,
    rejectUnauthorized: true,
  },
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });
export { prisma };