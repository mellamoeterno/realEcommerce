import { getProducts } from "../../../features/products/lib/getProducts";
import { AddToCartButton } from "../../../features/cart/components/add-to-cart-button";
import { CartLink } from "../../../features/cart/components/cart-link";
import Link from "next/link";
import Image from "next/image"

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-zinc-50">
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
