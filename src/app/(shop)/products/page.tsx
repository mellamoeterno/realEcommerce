import { getProducts } from "../../../features/products/lib/getProducts";
import { AddToCartButton } from "../../../features/cart/components/add-to-cart-button";
import { CartLink } from "../../../features/cart/components/cart-link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-black">MyStore</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-600">
              {products.length} {products.length === 1 ? "item" : "items"}
            </span>

            {/* Future cart button */}
            <button className="rounded-lg border border-black px-3 py-1.5 text-sm font-medium text-black transition hover:bg-black hover:text-white">
              Cart
            </button>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="px-6 py-10">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="mb-10 text-3xl font-semibold text-black">
            Products
          </h2>

          {products.length === 0 ? (
            <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm">
              No products found.
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <li
                  key={p.id}
                  className="group rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex h-full flex-col gap-4">
                    {/* Product Name */}
                    <div className="text-lg font-medium text-black line-clamp-2">
                      {p.name}
                    </div>

                    {/* Price */}
                    <div className="text-sm text-zinc-500">
                      Price
                      <div className="mt-1 text-lg font-semibold text-black">
                        {p.price}
                      </div>
                    </div>

                    {/* Placeholder for future actions */}
                    <div className="mt-auto">
                      <button className="w-full rounded-lg border border-black px-4 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white">
                        View Product
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
