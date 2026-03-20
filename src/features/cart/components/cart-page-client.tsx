"use client";

import { useMemo, useState } from "react";
import { useCartStore } from "../store/cart-store";

function toMoney(value: number): string {
  return `$${value.toFixed(2)}`;
}

export function CartPageClient() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + Number(item.unitPrice) * item.quantity,
        0
      ),
    [items]
  );

  const onCheckout = async () => {
    setIsCheckingOut(true);
    setError(null);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Checkout failed.");
      }

      const payload = (await response.json()) as { url: string };
      window.location.href = payload.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
      setIsCheckingOut(false);
    }
  };

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-6 text-3xl font-semibold text-black">Cart</h1>

        {items.length === 0 ? (
          <div className="rounded-xl border border-zinc-200 bg-white p-8 text-zinc-600">
            Your cart is empty.
          </div>
        ) : (
          <div className="space-y-4">
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.productId}
                  className="rounded-xl border border-zinc-200 bg-white p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-medium text-black">{item.name}</p>
                      <p className="text-sm text-zinc-500">${item.unitPrice} each</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e) =>
                          setQuantity(item.productId, Number(e.target.value))
                        }
                        className="w-20 rounded-md border border-zinc-300 px-2 py-1 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                        className="rounded-md border border-zinc-300 px-3 py-1 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <p className="text-lg font-semibold text-black">
                Subtotal: {toMoney(subtotal)}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Final total and validated prices are calculated on the server at
                checkout.
              </p>
              {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
              <button
                type="button"
                onClick={onCheckout}
                disabled={isCheckingOut}
                className="mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
              >
                {isCheckingOut ? "Redirecting..." : "Checkout with Stripe"}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

