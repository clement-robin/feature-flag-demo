"use client";

interface SizeButtonProps {
  size: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function SizeButton({
  size,
  isSelected,
  onClick,
}: SizeButtonProps) {
  return (
    <button
      className={`rounded-md w-12 h-9 cursor-pointer border ${
        isSelected ? "border-black" : "border-gray-300"
      }`}
      onClick={onClick}
    >
      {size}
    </button>
  );
}

interface CartItem {
  id: string;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

interface CartStore {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}
