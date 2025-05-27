"use client";

import {
  CartItem,
  getStoredCart,
  saveCart,
  CART_STORAGE_KEY,
} from "@/types/cart";
import React, { useState, useEffect } from "react";

export default function ProductAddToCart({
  price,
  id,
  slug,
  name,
  selectedSize,
  selectedColor,
  quantity = 1,
  error,
  image,
  description,
  sku,
  colors,
  sizes,
}: {
  price: number;
  id: string;
  slug: string;
  name: string;
  selectedSize: string | null;
  selectedColor: string | null;
  quantity?: number;
  error: string | null;
  image: string;
  description: string;
  sku: string;
  colors: Array<{ name: string; hex: string }>;
  sizes: string[];
}) {
  const [errorState, setErrorState] = useState<string | null>(null);

  useEffect(() => {
    // Initialiser le panier depuis le sessionStorage
    const cart = getStoredCart();
    if (!cart) {
      saveCart({ items: [], total: 0 });
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setErrorState("Veuillez sélectionner une taille et une couleur");
      return;
    }

    const newItem: CartItem = {
      id,
      quantity,
      size: selectedSize,
      color: selectedColor,
      price,
      name,
      slug,
      image,
      description,
      sku,
      colors,
      sizes,
    };

    // Récupérer le panier actuel
    const cart = getStoredCart();

    const existingItemIndex = cart.items.findIndex(
      (item) =>
        item.id === id &&
        item.size === selectedSize &&
        item.color === selectedColor
    );

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push(newItem);
    }

    cart.total = Number(
      cart.items
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    );

    saveCart(cart);
    setErrorState(null);

    // Émettre l'événement de mise à jour
    window.dispatchEvent(
      new CustomEvent("cartUpdated", {
        detail: cart,
      })
    );
  };

  return (
    <div className="mt-6">
      <button
        className="bg-black text-white text-lg font-bold px-4 py-2 rounded-md w-full cursor-pointer"
        onClick={handleAddToCart}
      >
        Ajouter au panier2
      </button>
      {errorState && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
          {errorState}
        </div>
      )}
    </div>
  );
}
