import { ProductCard } from "../../products/productCard"; //remember how was the parsing of products to productCard before
import { getProducts } from "../../../features/products/lib/getProducts";
import { ProductCarouselClient } from "./ProductCarouselClient";

export async function ProductCarousel() {

  const products = await getProducts();

  const northFaceSelectedCategory = "theNorthFace"

  const northFaceFilteredProducts = products.filter(
    (p) => p.category === northFaceSelectedCategory
  );

  return (
    <ProductCarouselClient products={northFaceFilteredProducts} />
  )
}