"use client";

import Link from "next/link";
import { useProductCard } from "./context";

type ProductCardLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function ProductCardLink({
  children,
  className = "group block h-full",
}: ProductCardLinkProps) {
  const { id } = useProductCard();

  return (
    <Link href={`/products/${id}`} className={className}>
      {children}
    </Link>
  );
}
