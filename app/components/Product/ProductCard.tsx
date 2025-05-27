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
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `https://clement-robin.github.io/feature-flag-demo${product.image}`;

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-64">
          <img
            src={imageUrl}
            alt={product.name || "Product image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
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
