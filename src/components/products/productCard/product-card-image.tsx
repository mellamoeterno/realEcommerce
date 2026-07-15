"use client";

import Image from "next/image";
import { useProductCard } from "./context";

type ProductCardImageProps = {
  className?: string;
  priority?: boolean;
};

export function ProductCardImage({
  className = "",
  priority = false,
}: ProductCardImageProps) {
  const { name, imageUrl } = useProductCard();

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-lg bg-zinc-100 ${className}`.trim()}
    >
      <Image
        src={imageUrl}
        alt={name}
        fill
        priority={priority}
        className="object-cover transition-transform group-hover:scale-105"
      />
    </div>
  );
}
