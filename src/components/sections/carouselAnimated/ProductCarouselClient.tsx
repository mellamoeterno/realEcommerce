"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ProductCard } from "../../../components/products/productCard";

type ProductCarouselClientProps = {
  products: React.ComponentProps<typeof ProductCard.Default>["product"][];
};

export function ProductCarouselClient({
  products,
}: ProductCarouselClientProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    carouselRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    carouselRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  }

  return (
    <section className="relative overflow-hidden rounded-3xl py-10">
      {/* Animated GIF background */}
      <motion.div
        className="absolute inset-[-5%] z-0"
        style={{
          willChange: "transform",
          backgroundImage:
            "url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWt3bnVpZ3YwOTYyNGpyaDRqOXdqbm5rOTVnYml4bnU2dmE1azRhaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1iuHmIwYgD1t62MUNW/giphy.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          scale: [1, 1.04, 1],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Blur/glow */}
      <div className="absolute left-1/2 top-1/2 z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900/20 blur-[100px]" />

      {/* Carousel content */}
      <div className="relative z-20">
        {/* Controls */}
        <div className="mb-6 flex justify-end gap-2 px-6">
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/10"
          >
            ←
          </button>

          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next products"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-md transition hover:bg-white/10"
          >
            →
          </button>
        </div>

        {/* Product carousel */}
        <div
          ref={carouselRef}
          className="overflow-x-auto scroll-smooth px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="min-w-max">
            <ProductCard.Grid
              products={products}
              carousel
            />
          </div>
        </div>
      </div>
    </section>
  );
}