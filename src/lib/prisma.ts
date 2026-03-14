import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";
import fs from "fs";
const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST!,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
  ssl: {
  ca: fs.readFileSync("./certs/ca.pem"),
  rejectUnauthorized: true
  },
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });
export { prisma };