import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-64">
          <Image
            src={product.image}
            alt={product.name || "Product image"}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.price}€</p>
        </div>
      </Link>
    </div>
  );
}
