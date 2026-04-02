import { prisma } from "../../../lib/prisma"; // adjust if your path differs
import type { ProductDTO } from "../dto/product.dto";
import { toProductDTO } from "./transform";

export async function getProductById(id: string): Promise<ProductDTO | null> {
  try {
    
    const product = await prisma.products.findUnique({
      where: { id },
      include: {
        product_images: true,
      },
    });

    if (!product) {
      return null;
    }

    return toProductDTO(product);
  } catch (error) {
    console.error("Error fetching product by id:", error);
    return null; // fail safely for UI layer
  }
}

