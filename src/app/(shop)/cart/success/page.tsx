import Link from "next/link";
import { ClearCartOnMount } from "../../../../features/cart/components/clear-cart-on-mount";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-zinc-200 bg-white p-8">
        <ClearCartOnMount />
        <h1 className="text-2xl font-semibold text-black">Payment successful</h1>
        <p className="mt-2 text-zinc-600">
          Thanks for your order. Your checkout has been completed.
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block rounded-lg bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Continue shopping
        </Link>
      </div>
    </main>
  );
}

