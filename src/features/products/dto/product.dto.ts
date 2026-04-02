export type ProductDTO = {
  id: string;
  name: string;
  price: number; // Prisma Decimal -> string for safe serialization
  imageUrl: string; 
};

