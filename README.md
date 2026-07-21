# Amazon Products Catalog
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/mellamoeterno/portfolioPage/blob/master/LICENSE) 

# About the project

https://amazon-products-mockup.vercel.app/

This is a amazon inspired product catalog using nextjs, prisma, and mySql. 

The database schema is made with database normalization principles (1nf, 2nf, 3nf) to reduce redundancy and improve data integrity. 

In this project i'm also implementing dynamic routing with nextjs app router using dynamic segments to render individual product pages based on each product id.

## Features

- Product Catalog
- Dynamic Product Pages
- Responsive Layout
- Prisma ORM integration
- Normalized MySQL database (1NF, 2NF, 3NF)
- Stripe Chekout
- Server Side rendering with Nextjs App router


## Mobile
![Mobile 1](https://res.cloudinary.com/dyiyheyzq/image/upload/v1784651475/mobileAm1_gudwut.jpg) ![Mobile 2](https://res.cloudinary.com/dyiyheyzq/image/upload/v1784651475/mobileAm2_dpccc7.jpg)

## Desktop
![Web 1](https://res.cloudinary.com/dyiyheyzq/image/upload/v1784651684/AmDesktop1_bsq9g6.png)



# Technologies Used

- MySql
- Prisma
- Aiven DB
- Stripe
- Next.js
- JS / TypeScript
- ReactJS

# Deployment Used

- Vercel


## Requirements: 
- node.js 22+
- npm, yarn, or pnpm
- MySql (With local or Aiven DB)
- and Git

environment variables

Create a `.env` file in the project root and configure:

- DATABASE_URL=
- DATABASE_USER=
- DATABASE_PASSWORD=
- DATABASE_NAME=
- DATABASE_HOST=
- DATABASE_PORT=
- DATABASE_CA_CERT=

And stripe 

- NEXT_PUBLIC_APP_URL=
- STRIPE_PUBLIC_KEY=
- STRIPE_SECRET_KEY=
- STRIPE_WEBHOOK_SECRET=



# How to execute the project
```bash
# Clone Repository
git clone https://github.com/mellamoeterno/realEcommerce

# Change to Directory
cd realEcommerce

# install dependencies
yarn install or npm install or pnpm install

# Update Prisma Schema 
npx prisma db pull

# Generate Prisma
npx prisma generate

# execute local host
npm run dev

# test run build before hosting
npm run build
```

# Prisma and Stripe logic is implemented at
src/app/api/checkout/route.ts



# Author

Enoque Souza

https://www.linkedin.com/in/enoque-souza-9893823a2/
