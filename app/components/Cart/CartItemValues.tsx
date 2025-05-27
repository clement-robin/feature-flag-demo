"use client";

import ProductQuantitySelector from "../Product/ProductQuantitySelector";
import ProductQuantitySelector2 from "../Product/ProductQuantitySelector2";

interface Props {
  price: number;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export default function CartItemValues({
  price,
  quantity,
  onQuantityChange,
}: Props) {
  return (
    <div>
      <p className="font-medium">{price} €</p>
      <div className="mt-1">
        <ProductQuantitySelector2
            onQuantityChange={onQuantityChange}
            initialQuantity={quantity}
        />
      </div>
      
    </div>
  );
}
