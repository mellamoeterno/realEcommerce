import { ProductCardRoot } from "./product-card-root";
import { ProductCardLink } from "./product-card-link";
import { ProductCardImage } from "./product-card-image";
import { ProductCardName } from "./product-card-name";
import { ProductCardPrice } from "./product-card-price";
import { ProductCardCategory } from "./product-card-category";
import { ProductCardStock } from "./product-card-stock";
import { ProductCardCreatedAt } from "./product-card-created-at";
import { ProductCardBody } from "./product-card-body";
import { ProductCardDefault } from "./product-card-default";
import { ProductCardGrid } from "./product-card-grid";

export const ProductCard = Object.assign(ProductCardRoot, {
  Link: ProductCardLink,
  Image: ProductCardImage,
  Name: ProductCardName,
  Price: ProductCardPrice,
  Category: ProductCardCategory,
  Stock: ProductCardStock,
  CreatedAt: ProductCardCreatedAt,
  Body: ProductCardBody,
  Default: ProductCardDefault,
  Grid: ProductCardGrid,
});

export { useProductCard } from "./context";
export type { ProductDTO } from "../../../features/products/dto/product.dto";
