"use client";

import { useProductCard } from "./context";

type ProductCardPriceProps = {
  className?: string;
  showLabel?: boolean;
};

export function ProductCardPrice({
  className = "",
  showLabel = true,
}: ProductCardPriceProps) {
  const { price } = useProductCard();

  return (
    <div className={className}>
      {showLabel && (
        <p className="text-sm text-zinc-500">Price</p>
      )}
      <p className="mt-1 text-lg font-semibold text-black">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}
