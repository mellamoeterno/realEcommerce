import { getProducts } from "../../../features/products/lib/getProducts";
import { AddToCartButton } from "../../../features/cart/components/add-to-cart-button";
import { CartLink } from "../../../features/cart/components/cart-link";
import Link from "next/link";
import Image from "next/image"

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
                <li key={p.id}>
                  <Link
                    href={`/products/${p.id}`}
                    className="group block h-full rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                  >
                    <div className="flex h-full flex-col gap-4">
                      
                      {/* Image */}
                      <div className="relative w-full aspect-square bg-zinc-100 rounded-lg overflow-hidden">
                        <Image
                          src={p.imageUrl}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Product Name */}
                      <div className="text-lg font-medium text-black line-clamp-2">
                        {p.name}
                      </div>

                      {/* Price */}
                      <div className="text-sm text-zinc-500">
                        Price
                        <div className="mt-1 text-lg font-semibold text-black">
                          ${p.price.toFixed(2)}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <div className="w-full rounded-lg border border-black px-4 py-2 text-center text-sm font-medium text-black transition group-hover:bg-black group-hover:text-white">
                          View Product
                        </div>
                      </div>

                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Footer (unchanged) */}
      <footer className="mt-20 border-t border-zinc-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-black">MyStore</h3>
            <p className="mt-3 text-sm text-zinc-600">
              Modern e-commerce platform focused on performance, scalability, and
              seamless shopping experience.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li className="hover:text-black cursor-pointer">All Products</li>
              <li className="hover:text-black cursor-pointer">New Arrivals</li>
              <li className="hover:text-black cursor-pointer">Best Sellers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
              <li className="hover:text-black cursor-pointer">Terms of Service</li>
              <li className="hover:text-black cursor-pointer">Refund Policy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-zinc-500 sm:flex-row">
            <span>© {new Date().getFullYear()} MyStore. All rights reserved.</span>
            <div className="flex gap-4">
              <span className="hover:text-black cursor-pointer">Twitter</span>
              <span className="hover:text-black cursor-pointer">Instagram</span>
              <span className="hover:text-black cursor-pointer">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
