import { products } from "@/data/products";
import ProductList from "../components/Product/ProductList";
import Link from "next/link";

export default function Page() {
  return (
    <div className="my-20">
      <ProductList products={products}/>
      
    </div>
  );
}
