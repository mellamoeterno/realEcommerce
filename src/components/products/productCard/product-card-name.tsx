"use client";

import { useProductCard } from "./context";

type ProductCardNameProps = {
  className?: string;
  as?: "h2" | "h3" | "p";
};

export function ProductCardName({
  className = "line-clamp-2 text-lg font-medium text-black",
  as: Tag = "h2",
}: ProductCardNameProps) {
  const { name } = useProductCard();

  return <Tag className={className}>{name}</Tag>;
}
