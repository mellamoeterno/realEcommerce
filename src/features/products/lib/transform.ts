import type { ProductDTO } from "../dto/product.dto";

type ProductLike = {
  id: string;
  name: string;
  price: { toString(): string };
  quantity_limit?: number;
  created_at?: Date | null;
  product_images: {
    image_url: string;
    is_primary: boolean | null;
  }[];
  product_types?: {
    type_name: string;
  } | null;
};

export function toProductDTO(product: ProductLike): ProductDTO {
  const primaryImage = product.product_images.find((img) => img.is_primary);
  const fallbackImage = product.product_images[0];
  const imageUrls = product.product_images.map((img) => img.image_url);

  return {
    id: product.id,
    name: product.name,
    price: Number(product.price.toString()),
    imageUrl:
      primaryImage?.image_url ??
      fallbackImage?.image_url ??
      "/placeholder.png",
    imageUrls,
    ...(product.quantity_limit !== undefined && {
      quantityLimit: product.quantity_limit,
    }),
    ...(product.product_types?.type_name && {
      category: product.product_types.type_name,
    }),
    ...(product.created_at && {
      createdAt: product.created_at.toISOString(),
    }),
  };
}

