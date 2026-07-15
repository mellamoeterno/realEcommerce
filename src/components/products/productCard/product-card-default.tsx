import type { ProductDTO } from "../../../features/products/dto/product.dto";
import { ProductCardRoot } from "./product-card-root";
import { ProductCardLink } from "./product-card-link";
import { ProductCardImage } from "./product-card-image";
import { ProductCardBody } from "./product-card-body";
import { ProductCardName } from "./product-card-name";
import { ProductCardCategory } from "./product-card-category";
import { ProductCardPrice } from "./product-card-price";
import { ProductCardStock } from "./product-card-stock";
import { ProductCardCreatedAt } from "./product-card-created-at";

type ProductCardDefaultProps = {
  product: ProductDTO;
  priority?: boolean;
};

export function ProductCardDefault({
  product,
  priority = false,
}: ProductCardDefaultProps) {
  return (
    <ProductCardRoot product={product}>
      <ProductCardLink>
        <ProductCardImage priority={priority} />
        <ProductCardBody>
          <ProductCardName />
          <ProductCardCategory />
          <ProductCardPrice />
          <ProductCardStock />
          <ProductCardCreatedAt />
          <div className="mt-auto w-full rounded-lg border border-black px-4 py-2 text-center text-sm font-medium text-black transition group-hover:bg-black group-hover:text-white">
            View Product
          </div>
        </ProductCardBody>
      </ProductCardLink>
    </ProductCardRoot>
  );
}
