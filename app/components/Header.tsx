"use client";

import NavLink from "./NavLink";
import Link from "next/link";
import HomeLogoIcon from "./Logos/HomeLogoIcon";
import SearchIcon from "./Logos/SearchIcon";
import CartComponent from "./Cart/CartComponent";
import LoginLogo from "./Logos/ConnexionLogo";
import Login from "./Login";
import { useState } from "react";

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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
          {/* <NavLink href="/about" label="About" /> */}
        </div>

        <div className="flex items-center">
          {/* <SearchIcon className="w-6 h-6 ml-4" />*/}
          <button onClick={() => setIsLoginModalOpen(true)}>
            <LoginLogo className="w-6 h-6 ml-4" />
          </button>
          <Link href="/cart">
            <CartComponent className="w-6 h-6 ml-4" />
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
