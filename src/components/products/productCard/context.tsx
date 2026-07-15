"use client";

import { createContext, useContext } from "react";
import type { ProductDTO } from "../../../features/products/dto/product.dto";

const ProductCardContext = createContext<ProductDTO | null>(null);

export function ProductCardProvider({
  product,
  children,
}: {
  product: ProductDTO;
  children: React.ReactNode;
}) {
  return (
    <ProductCardContext.Provider value={product}>
      {children}
    </ProductCardContext.Provider>
  );
}

export function useProductCard() {
  const product = useContext(ProductCardContext);

  if (!product) {
    throw new Error("ProductCard subcomponents must be used within <ProductCard>");
  }

  return product;
}
