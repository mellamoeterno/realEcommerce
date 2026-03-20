import { getProducts } from "../../../features/products/lib/getProducts";
import { AddToCartButton } from "../../../features/cart/components/add-to-cart-button";
import { CartLink } from "../../../features/cart/components/cart-link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-black">Products</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-500">
              {products.length} {products.length === 1 ? "item" : "items"}
            </span>
            <CartLink />
          </div>
        </div>

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
                <div className="flex flex-col gap-4">
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

                  <div className="mt-auto">
                    <AddToCartButton
                      productId={p.id}
                      name={p.name}
                      unitPrice={p.price}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
