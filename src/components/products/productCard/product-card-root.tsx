import type { ProductDTO } from "../../../features/products/dto/product.dto";
import { ProductCardProvider } from "./context";

type ProductCardRootProps = {
  product: ProductDTO;
  children: React.ReactNode;
  className?: string;
};

export function ProductCardRoot({
  product,
  children,
  className = "",
}: ProductCardRootProps) {
  return (
    <ProductCardProvider product={product}>
      <article
        className={`flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md ${className}`.trim()}
      >
        {children}
      </article>
    </ProductCardProvider>
  );
}
