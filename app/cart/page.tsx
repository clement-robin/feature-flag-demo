"use client";

import { useEffect, useState } from "react";
import { Cart, getStoredCart } from "@/types/cart";
import CartListItems from "../components/Cart/CartListItems";
import Link from "next/link";

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
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-600 mb-6">Votre panier est vide</p>
          <div className="space-y-3">
            <Link
              href="/shop"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
            >
              Découvrir nos produits
            </Link>
            <br />
            <Link
              href="/subscriptions"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
            >
              Voir nos abonnements
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Panier</h1>
      <CartListItems cart={cart} />

      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          ← Continuer mes achats
        </Link>

        <Link
          href="/checkout"
          className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium transition-colors"
        >
          Passer commande ({cart.total.toFixed(2)}€)
        </Link>
      </div>
    </div>
  );
}
