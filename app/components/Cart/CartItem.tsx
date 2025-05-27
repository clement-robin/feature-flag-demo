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
  handleRemoveItem: (
    id: string,
    size: string,
    color: string,
    image: string
  ) => void;
}) {
  const handleQuantityChange = (newQuantity: number) => {
    const cart = getStoredCart();
    const itemIndex = cart.items.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        cartItem.color === item.color
    );

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

  return (
    <div
      key={`${item.id}-${item.size}-${item.color}`}
      className="flex justify-between items-center border-b pb-4"
    >
      <CartItemDescription
        name={item.name}
        size={item.size}
        color={item.color}
        image={item.image}
      />

      <div className="text-right">
        <div className="flex justify-between items-center gap-4">
          <CartItemValues
            price={item.price}
            quantity={item.quantity}
            onQuantityChange={handleQuantityChange}
          />

          <button
            onClick={() =>
              handleRemoveItem(item.id, item.size, item.color, item.image)
            }
            className="mt-2 text-red-600 hover:text-red-800 text-sm"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
