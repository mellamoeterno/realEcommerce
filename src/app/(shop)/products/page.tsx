import { ProductCard } from "../../../components/products/productCard";
import { getProducts } from "../../../features/products/lib/getProducts";

export default async function Home() {
  const products = await getProducts();

  const luxurySelectedCategory = "luxury"
  const electronicsSelectedCategory = "eletronics"
  const northFaceSelectedCategory = "theNorthFace"
  const halloweenSelectedCategory = "halloween"

  const luxuryFilteredProducts = products.filter(
    (p) => p.category === luxurySelectedCategory
  )

  const electronicsFilteredProducts = products.filter(
    (p) => p.category === electronicsSelectedCategory
  )

  const northFaceFilteredProducts = products.filter(
    (p) => p.category === northFaceSelectedCategory
  )

  const halloweenFilteredProducts = products.filter(
    (p) => p.category === halloweenSelectedCategory
  )

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-950">
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex min-h-[420px] w-full max-w-7x1 items-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3x1">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Our collection
            </span>

            <h1 className="text-4x1 font-semibold tracking-tight sm:text-5x1 lg:text-6x1">
              Discover Something
              <span className="block text-zinc-500">
                Worth bringing home
              </span>
            </h1>

            <p className="mt-6 max-2-x1 text-base leading-7 text-zinc-600 sm:text-lg">
              Expore our curated selection of products.
            </p>
          </div>
        </div>

      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold text-black">Luxury Items</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {luxuryFilteredProducts.map((product) => (
            <ProductCard.Default key={product.id} product={product} />
          ))}
        </div>
      </div>

      <section className="border-t border-zinc-200 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-black">Electronics</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {electronicsFilteredProducts.map((product) => (
              <ProductCard.Default key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-black">The North Face</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {northFaceFilteredProducts.map((product) => (
              <ProductCard.Default key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-2xl font-semibold text-black">Halloween</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {halloweenFilteredProducts.map((product) => (
              <ProductCard.Default key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
//in this page, i plan on displaying at most 3 categories. And after the second category, display either a carousel or a grid of products. 