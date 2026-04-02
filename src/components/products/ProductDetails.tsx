"use client";

import Image from "next/image";
import type { ProductDTO } from "../../features/products/dto/product.dto";
import { AddToCartButton } from "../../features/cart/components/add-to-cart-button";

type ProductDetailsProps = {
  product: ProductDTO;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT - Image Gallery */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full aspect-square bg-white border rounded-md overflow-hidden">
            <Image
              src={product.imageUrl || "/placeholder.png"}
              alt={product.name}
              fill
              className="object-contain p-4"
              priority
            />
          </div>

          {/* Thumbnails (UI only for now) */}
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-16 h-16 border rounded bg-white"
              />
            ))}
          </div>
        </div>

        {/* CENTER - Product Info */}
        <div className="flex flex-col gap-4">
          
          {/* Title */}
          <h1 className="text-xl font-medium text-gray-900">
            {product.name}
          </h1>

          {/* Rating (mock UI) */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-blue-600 hover:underline cursor-pointer">
              123 ratings
            </span>
          </div>

          {/* Price Section */}
          <div className="border-t border-b py-4">
            <p className="text-2xl font-semibold text-red-600">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500">
              FREE delivery
            </p>
          </div>

          {/* Description */}
          {/* <p className="text-sm text-gray-700 leading-relaxed">
            {product.description || "No description available."}
          </p> */}

          {/* Extra Info */}
          <div className="text-sm text-gray-600 space-y-1">
            <p>Brand: Example Brand</p>
            <p>Category: Example Category</p>
          </div>
        </div>

        {/* RIGHT - Buy Box */}
        <div className="border rounded-md p-4 h-fit sticky top-6 flex flex-col gap-4 bg-white shadow-sm">
          
          <p className="text-xl font-semibold text-red-600">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-sm text-green-600">
            In Stock
          </p>

          <AddToCartButton
            productId={product.id}
            name={product.name}
            unitPrice={product.price}
          />

          <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white rounded-full py-2 text-sm font-medium">
            Buy Now
          </button>

          <div className="text-xs text-gray-500">
            <p>Secure transaction</p>
            <p>Ships from: Your Store</p>
            <p>Sold by: Your Store</p>
          </div>
        </div>

      </div>
    </div>
  );
}