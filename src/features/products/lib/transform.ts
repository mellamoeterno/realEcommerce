import type { ProductDTO } from "../dto/product.dto";

type ProductLike = {
  id: string;
  name: string;
  // Prisma Decimal objects have a stable `toString()` representation.
  price: { toString(): string };
};

export function toProductDTO(product: ProductLike): ProductDTO {
  return {
    id: product.id,
    name: product.name,
    price: product.price.toString(),
  };
}

