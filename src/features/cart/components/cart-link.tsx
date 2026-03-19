"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCartStore } from "../store/cart-store";

export function CartLink() {
  const items = useCartStore((state) => state.items);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  return (
    <Link
      href="/cart"
      className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-black"
    >
      Cart ({itemCount})
    </Link>
  );
}

