import ProductImage from "@/app/components/Product/ProductImage";
import ProductPresentation from "@/app/components/Product/ProductPresentation";
import { products } from "@/data/products";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex gap-2">
      <div className="w-2/3">
        <ProductImage image={product.image} name={product.name} />
      </div>
      <div className="w-1/3">
        <ProductPresentation product={product} />
      </div>
    </div>
  );
}
