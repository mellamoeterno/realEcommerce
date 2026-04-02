import { notFound } from "next/navigation";
import { getProductById } from "../../../../features/products/lib/getProductById";
import { ProductDetails } from "../../../../components/products/ProductDetails";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  // Basic validation (prevents unnecessary DB calls)
  if (!id || typeof id !== "string") {
    notFound();
  }

  const product = await getProductById(id);

  // Handle missing product
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      <ProductDetails product={product} />
    </main>
  );
}