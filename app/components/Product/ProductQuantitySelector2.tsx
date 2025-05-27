"use client";

import { useState, useEffect } from "react";

interface Props {
  onQuantityChange: (quantity: number) => void;
  initialQuantity?: number;
}

export default function ProductQuantitySelector2({
  onQuantityChange,
  initialQuantity = 1,
}: Props) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 5) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between w-16 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{quantity}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"

        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-24 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          {[...Array(5)].map((_, index) => (
            <button
              key={index + 1}
              className={`w-full px-3 py-2 text-left hover:bg-gray-100 ${
                quantity === index + 1 ? "bg-gray-100" : ""
              }`}
              onClick={() => handleQuantityChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
