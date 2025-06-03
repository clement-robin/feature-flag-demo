"use client";

import { CartItem, getStoredCart, saveCart } from "@/types/cart";
import { Travel } from "@/data/travels";
import React, { useState, useEffect } from "react";

interface TravelAddToCartProps {
  travel: Travel;
  selectedDate: string | null;
  quantity: number;
  error: string | null;
  setError: (error: string | null) => void;
}

export default function TravelAddToCart({
  travel,
  selectedDate,
  quantity = 1,
  error,
  setError,
}: TravelAddToCartProps) {
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    
    const cart = getStoredCart();
    if (!cart) {
      saveCart({ items: [], total: 0 });
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedDate) {
      setError("Veuillez sélectionner une date de départ");
      return;
    }

    setIsAdding(true);

    const newItem: CartItem = {
      id: travel.id,
      quantity,
      price: travel.price,
      name: travel.name,
      slug: travel.slug,
      image: travel.image,
      description: travel.description,
      sku: travel.sku,
      type: "travel",
      departureDate: selectedDate,
      destination: travel.destination,
      duration: travel.duration,
      difficulty: travel.difficulty,
      category: travel.category,
    };

    
    const cart = getStoredCart();

    const existingItemIndex = cart.items.findIndex(
      (item) =>
        item.id === travel.id &&
        item.type === "travel" &&
        item.departureDate === selectedDate
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
    setError(null);

    
    window.dispatchEvent(
      new CustomEvent("cartUpdated", {
        detail: cart,
      })
    );

    setIsAdding(false);

    
    setError("✅ Voyage ajouté au panier !");
    setTimeout(() => setError(null), 3000);
  };

  return (
    <div className="mt-6">
      <button
        className={`text-white text-lg font-bold px-6 py-3 rounded-md w-full transition-colors duration-200 ${
          isAdding
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        }`}
        onClick={handleAddToCart}
        disabled={isAdding}
      >
        {isAdding ? "Ajout en cours..." : "Réserver ce voyage"}
      </button>
      {error && (
        <div
          className={`border px-4 py-3 rounded mt-4 ${
            error.includes("✅")
              ? "bg-green-100 border-green-400 text-green-700"
              : "bg-red-100 border-red-400 text-red-700"
          }`}
        >
          {error}
        </div>
      )}
    </div>
  );
}
