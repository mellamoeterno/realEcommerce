"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useCartStore } from "../../../features/cart/store/cart-store";

function toMoney(value: number): string {
  return `$${value.toFixed(2)}`;
}

export function MiniCart() {
  const items = useCartStore((state) => state.items);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef<number | null>(null);
  const isFirstRunRef = useRef(true);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + Number(item.unitPrice) * item.quantity,
        0
      ),
    [items]
  );

  useEffect(() => {
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
      prevCountRef.current = itemCount;
      return;
    }

    if (itemCount > (prevCountRef.current ?? 0)) {
      setShowAddedMessage(true);
      const timer = window.setTimeout(() => setShowAddedMessage(false), 2500);
      prevCountRef.current = itemCount;
      return () => window.clearTimeout(timer);
    }

    prevCountRef.current = itemCount;
  }, [itemCount]);

  useEffect(() => {
    if (!isExpanded) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isExpanded]);

  return (
    <div ref={panelRef} className="fixed right-6 top-6 z-50 flex flex-col items-end gap-2">
      {showAddedMessage ? (
        <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-medium text-green-800 shadow-sm">
          Added to cart
        </div>
      ) : null}

      <div className="relative">
        <button
          type="button"
          onClick={() => setIsExpanded((open) => !open)}
          aria-expanded={isExpanded}
          aria-label={`Cart with ${itemCount} items`}
          className="flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-black shadow-sm transition hover:border-black"
        >
          <span aria-hidden>🛒</span>
          <span>Cart ({itemCount})</span>
        </button>

        {isExpanded ? (
          <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
            <div className="border-b border-zinc-200 px-4 py-3">
              <h2 className="text-sm font-semibold text-black">Your cart</h2>
            </div>

            {items.length === 0 ? (
              <p className="px-4 py-6 text-sm text-zinc-500">Your cart is empty.</p>
            ) : (
              <>
                <ul className="max-h-64 space-y-3 overflow-y-auto px-4 py-3">
                  {items.map((item) => (
                    <li
                      key={item.productId}
                      className="flex items-start justify-between gap-3 text-sm"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-medium text-black">{item.name}</p>
                        <p className="text-zinc-500">Qty: {item.quantity}</p>
                      </div>
                      <p className="shrink-0 font-medium text-black">
                        {toMoney(Number(item.unitPrice) * item.quantity)}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-zinc-200 px-4 py-3">
                  <p className="mb-3 text-sm font-semibold text-black">
                    Subtotal: {toMoney(subtotal)}
                  </p>
                  <Link
                    href="/cart"
                    onClick={() => setIsExpanded(false)}
                    className="block w-full rounded-lg bg-black px-4 py-2 text-center text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    Go to cart
                  </Link>
                </div>
              </>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
