"use client";

import { memo, useCallback } from "react";
import { useCartStore } from "../store/cart-store";

type AddToCartButtonProps = {
  productId: string;
  name: string;
  unitPrice: string;
};

function AddToCartButtonBase({ productId, name, unitPrice }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const onClick = useCallback(() => {
    addItem({ productId, name, unitPrice });
  }, [addItem, productId, name, unitPrice]);

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-lg border border-black px-4 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white"
    >
      Add to Cart
    </button>
  );
}

export const AddToCartButton = memo(AddToCartButtonBase); //it seems this always need zustand to work

