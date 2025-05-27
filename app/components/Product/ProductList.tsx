import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <li key={product.id} className="">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
