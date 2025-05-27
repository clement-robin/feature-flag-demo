import { useState, useEffect } from "react";
import { CartItem, getStoredCart } from "@/app/types/cart";
import CartIcon from "@/app/components/Logos/CartIcon";

export default function CartComponent({ className }: { className?: string }) {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Initialiser le compteur avec les données du sessionStorage
    const cart = getStoredCart();
    const count =
      cart?.items?.reduce((sum: number, item) => sum + item.quantity, 0) || 0;
    setItemCount(count);

    const handleCartUpdate = (event: CustomEvent) => {
      const cart = event.detail;
      const count =
        cart?.items?.reduce(
          (sum: number, item: CartItem) => sum + item.quantity,
          0
        ) || 0;
      setItemCount(count);
    };

    window.addEventListener("cartUpdated", handleCartUpdate as EventListener);

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate as EventListener
      );
    };
  }, []);

  return (
    <div className="relative">
      <CartIcon className={className} />
      {itemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
          {itemCount}
        </div>
      )}
    </div>
  );
}
