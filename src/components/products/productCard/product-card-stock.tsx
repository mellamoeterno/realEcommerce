"use client";

import { useProductCard } from "./context";

type ProductCardStockProps = {
  className?: string;
};

export function ProductCardStock({
  className = "text-sm font-medium",
}: ProductCardStockProps) {
  const { quantityLimit } = useProductCard();

  if (quantityLimit === undefined) {
    return null;
  }

  const inStock = quantityLimit > 0;

  return (
    <p
      className={`${className} ${inStock ? "text-green-600" : "text-red-600"}`.trim()}
    >
      {inStock ? `In stock (${quantityLimit} available)` : "Out of stock"}
    </p>
  );
}
