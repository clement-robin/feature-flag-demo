import ProductImage from "@/app/components/Product/ProductImage";
import ProductPresentation from "@/app/components/Product/ProductPresentation";
import { products } from "@/data/products";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex gap-4">
      <ProductImage image={product.image} />
      <ProductPresentation product={product} />
    </div>
  );
}
