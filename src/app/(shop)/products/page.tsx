import { getProducts } from "../../../features/products/lib/getProducts";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto w-full max-w-4xl">
        <h1 className="mb-6 text-3xl font-semibold text-black">Products</h1>

        {products.length === 0 ? (
          <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6 text-zinc-600">
            No products found.
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2">
            {products.map((p) => (
              <li
                key={p.id}
                className="rounded-lg border border-zinc-200 bg-white p-5"
              >
                <div className="text-lg font-medium text-black">{p.name}</div>
                <div className="mt-2 text-zinc-700">
                  Price: <span className="font-semibold text-black">{p.price}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

