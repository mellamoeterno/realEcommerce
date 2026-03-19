export type ProductDTO = {
  id: string;
  name: string;
  price: string; // Prisma Decimal -> string for safe serialization
};

