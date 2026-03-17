import dotenv from "dotenv";
dotenv.config();

import { prisma } from "./src/lib/prisma";
async function main() {
  const user = await prisma.user.upsert({
    where: { email: "richmyself8@gmail.com" },
    create: {
      name: "avnadmin",
      email: "richmyself8@gmail.com",
      posts: {
        create: {
          title: "Hello World",
          content: "This is my first post!",
          published: true,
        },
      },
    },
    update: {
      name: "avnadmin",
    },
    include: {
      posts: true,
    },
  });
  console.log("Upserted user:", user);
  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

console.log({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
});