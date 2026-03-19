import { unstable_cache } from "next/cache";
import { cache } from "react";
import { prisma } from "../../../lib/prisma";
import type { ProductDTO } from "../dto/product.dto";
import { toProductDTO } from "./transform";

const getProductsFromDb = cache(async (): Promise<ProductDTO[]> => {
  // Prisma adapter types can be out-of-sync; runtime still uses the generated schema.
  const products = await (prisma as any).products.findMany({
    select: {
      id: true,
      name: true,
      price: true,
    },
  });

  return products.map(toProductDTO);
});

// Cache across requests (Server Components run per request).
// Revalidate periodically to keep prices reasonably fresh.
export const getProducts = unstable_cache(
  async (): Promise<ProductDTO[]> => {
    return getProductsFromDb();
  },
  ["products:list"],
  { revalidate: 60 }
);

