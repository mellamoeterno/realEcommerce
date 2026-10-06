import type { ProductDTO } from "../../../features/products/dto/product.dto";
import { ProductCardDefault } from "./product-card-default";

type ProductCardGridProps = {
  products: ProductDTO[];
  className?: string;
  emptyMessage?: string;
  renderCard?: (product: ProductDTO, index: number) => React.ReactNode;
  carousel?: boolean;
};

export function ProductCardGrid({
  products,
  className = "",
  emptyMessage = "No products found.",
  renderCard,
  carousel = false,
}: ProductCardGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-xl border border-zinc-200 bg-white p-10 text-center text-zinc-500 shadow-sm">
        {emptyMessage}
      </div>
    );
  }

  

  const gridClassName = carousel
    ? "flex w-max gap-6"
    : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={`${gridClassName} ${className}`}>
      {products.map((product, index) => (
        <li key={product.id}
        className={carousel 
          ? "w-[85vw] shrink-0 sm:w-[280px] lg:w-[320px]" : undefined}
        >
          
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
