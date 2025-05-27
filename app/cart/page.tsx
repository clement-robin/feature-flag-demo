"use client";

import { useEffect, useState } from "react";
import { Cart, getStoredCart } from "@/types/cart";
import CartListItems from "../components/Cart/CartListItems";

export default function CartPage() {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    const storedCart = getStoredCart();
    setCart(storedCart);

    const handleCartUpdate = (event: CustomEvent) => {
      setCart(event.detail);
    };

    window.addEventListener("cartUpdated", handleCartUpdate as EventListener);

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate as EventListener
      );
    };
  }, []);

  if (!cart || cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Panier</h1>
        <p>Votre panier est vide</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Panier</h1>
      <CartListItems cart={cart} />
    </div>
  );
}
