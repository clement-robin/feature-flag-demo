import { Product } from "@/app/types/product";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="hover:opacity-75 transition duration-300 "
    >
      <div className="overflow-hidden h-[220px] w-[220px]">
        <img
          src={product.image}
          alt={product.name}
          width={220}
          height={180}
          className="w-full h-[220px] object-cover object-center"
        />
      </div>
      <div className="flex justify-between items-center mt-1">
        <h3>{product.name}</h3>
        <p>{product.price} €</p>
      </div>
    </Link>
  );
}
