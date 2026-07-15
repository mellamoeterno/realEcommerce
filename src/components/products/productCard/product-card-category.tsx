"use client";

import { useProductCard } from "./context";

type ProductCardCategoryProps = {
  className?: string;
};

export function ProductCardCategory({
  className = "text-sm text-zinc-500",
}: ProductCardCategoryProps) {
  const { category } = useProductCard();

  if (!category) {
    return null;
  }

  return (
    <p className={className}>
      <span className="font-medium text-zinc-700">Category:</span> {category}
    </p>
  );
}
