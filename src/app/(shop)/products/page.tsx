import { ProductCard } from "../../../components/products/productCard";
import { getProducts } from "../../../features/products/lib/getProducts";

export default async function Home() {
  const products = await getProducts();

  const perfumeSelectedCategory = "perfume"

  const perfumeFilteredProducts = products.filter(
    (p) => p.category === perfumeSelectedCategory
  )

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-10 text-3xl font-semibold text-black">
          Products
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {perfumeFilteredProducts.map(product => (
          <ProductCard.Default key={product.id} product={product}
          />
        ))}
        </div>
      </div>
    </main>
  );
}
