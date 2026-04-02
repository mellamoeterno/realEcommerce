import type { ProductDTO } from "../dto/product.dto";

type ProductLike = {
  id: string;
  name: string;
  // Prisma Decimal objects have a stable `toString()` representation.
  price: { toString(): string };
    product_images: {
    image_url: string;
    is_primary: boolean | null;
  }[];
};

export function toProductDTO(product: ProductLike): ProductDTO {
  // Find primary image first
  const primaryImage = product.product_images.find(
    (img) => img.is_primary
  );

  // Fallback to first image if no primary
  const fallbackImage = product.product_images[0];

  return {
    id: product.id,
    name: product.name,
    price: Number(product.price.toString()),
    imageUrl: primaryImage?.image_url ?? fallbackImage?.image_url ?? "/placeholder.png",
  };
}

