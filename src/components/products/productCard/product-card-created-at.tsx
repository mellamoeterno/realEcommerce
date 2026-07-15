"use client";

import { useProductCard } from "./context";

type ProductCardCreatedAtProps = {
  className?: string;
};

export function ProductCardCreatedAt({
  className = "text-xs text-zinc-400",
}: ProductCardCreatedAtProps) {
  const { createdAt } = useProductCard();

  if (!createdAt) {
    return null;
  }

  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(createdAt));

  return <p className={className}>Added {formatted}</p>;
}
