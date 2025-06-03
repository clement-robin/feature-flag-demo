"use client";

import NavLink from "./NavLink";
import Link from "next/link";
import HomeLogoIcon from "./Icons/HomeLogoIcon";
import SearchIcon from "./Icons/SearchIcon";
import CartIcon from "./Icons/CartIcon";
import LoginIcon from "./Icons/LoginIcon";
import Login from "./Login";
import { useState, useEffect } from "react";
import { getStoredCart } from "@/types/cart";

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    
    const updateCartCount = () => {
      const cart = getStoredCart();
      const totalItems = cart.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      setCartItemCount(totalItems);
    };

    
    updateCartCount();

    
    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 shadow-sm z-50 flex justify-between items-center h-14 w-full px-14 bg-white">
        <div className="flex items-center">
          <Link href="/">
            <HomeLogoIcon className="w-10 h-10" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <NavLink href="/shop" label="Shop" />
          <NavLink href="/travel" label="Travel" />
          <NavLink href="/events" label="Events" />
          <NavLink href="/subscriptions" label="Subscriptions" />
          
        </div>

        <div className="flex items-center">
          
          <button onClick={() => setIsLoginModalOpen(true)}>
            <LoginIcon className="w-6 h-6 ml-4" />
          </button>
          <Link href="/cart" className="relative ml-4">
            <CartIcon className="w-6 h-6" />
            {cartItemCount > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartItemCount > 99 ? "99+" : cartItemCount}
              </div>
            )}
          </Link>
        </div>
      </header>

      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg">
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-md"
            >
              ✕
            </button>
            <Login />
          </div>
        </div>
      )}
    </>
  );
}
