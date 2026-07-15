import type { ProductDTO } from "../../../features/products/dto/product.dto";
import { ProductCardDefault } from "./product-card-default";

type ProductCardGridProps = {
  products: ProductDTO[];
  className?: string;
  emptyMessage?: string;
  renderCard?: (product: ProductDTO, index: number) => React.ReactNode;
};

export function ProductCardGrid({
  products,
  className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  emptyMessage = "No products found.",
  renderCard,
}: ProductCardGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm">
        {emptyMessage}
      </div>
    );
  }

  return (
    <ul className={className}>
      {products.map((product, index) => (
        <li key={product.id}>
          {renderCard ? (
            renderCard(product, index)
          ) : (
            <ProductCardDefault
              product={product}
              priority={index < 3}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
