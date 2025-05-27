"use client";

import { useState, useEffect } from "react";

interface Props {
  onQuantityChange: (quantity: number) => void;
  initialQuantity?: number;
}

export default function ProductQuantitySelector({
  onQuantityChange,
  initialQuantity = 1,
}: Props) {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="flex items-center gap-4 border border-gray-300 rounded-md w-fit">
      <button
        className="px-2 py-1 rounded hover:bg-gray-100"
        onClick={() => handleQuantityChange(quantity - 1)}
      >
        -
      </button>
      <span className="text-center">{quantity}</span>
      <button
        className="px-2 py-1 rounded hover:bg-gray-100"
        onClick={() => handleQuantityChange(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
