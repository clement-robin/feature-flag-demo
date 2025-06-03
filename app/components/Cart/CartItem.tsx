"use client";

import {
  CartItem as CartItemType,
  getStoredCart,
  saveCart,
} from "@/types/cart";
import CartItemDescription from "./CartItemDescription";
import CartItemValues from "./CartItemValues";

export default function CartItem({
  item,
  handleRemoveItem,
}: {
  item: CartItemType;
  handleRemoveItem: (item: CartItemType) => void;
}) {
  const handleQuantityChange = (newQuantity: number) => {
    const cart = getStoredCart();
    let itemIndex = -1;

    if (item.type === "product") {
      itemIndex = cart.items.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.size === item.size &&
          cartItem.color === item.color &&
          cartItem.type === "product"
      );
    } else if (item.type === "travel") {
      itemIndex = cart.items.findIndex(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.departureDate === item.departureDate &&
          cartItem.type === "travel"
      );
    } else if (item.type === "event") {
      itemIndex = cart.items.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.type === "event"
      );
    } else if (item.type === "subscription") {
      itemIndex = cart.items.findIndex(
        (cartItem) =>
          cartItem.id === item.id && cartItem.type === "subscription"
      );
    }

    if (itemIndex !== -1) {
      cart.items[itemIndex].quantity = newQuantity;
      cart.total = Number(
        cart.items
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toFixed(2)
      );

      saveCart(cart);
      window.dispatchEvent(
        new CustomEvent("cartUpdated", {
          detail: cart,
        })
      );
    }
  };

  const getItemKey = () => {
    if (item.type === "product") {
      return `${item.id}-${item.size}-${item.color}`;
    } else if (item.type === "travel") {
      return `${item.id}-${item.departureDate}`;
    } else if (item.type === "event") {
      return item.id;
    } else if (item.type === "subscription") {
      return item.id;
    }
    return item.id;
  };

  return (
    <div
      key={getItemKey()}
      className="flex justify-between items-center border-b pb-4"
    >
      <CartItemDescription item={item} />

      <div className="text-right">
        <div className="flex justify-between items-center gap-4">
          <CartItemValues
            price={item.price}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          />

          <button
            onClick={() => handleRemoveItem(item)}
            className="mt-2 text-red-600 hover:text-red-800 text-sm"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
