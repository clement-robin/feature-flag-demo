import { Cart, saveCart } from "@/app/types/cart";
import { products } from "@/data/products";
import CartItem from "./CartItem";

export default function CartListItems({ cart }: { cart: Cart }) {
  const handleRemoveItem = (itemId: string, size: string, color: string) => {
    const updatedCart = {
      ...cart,
      items: cart.items.filter(
        (item) =>
          !(item.id === itemId && item.size === size && item.color === color)
      ),
    };

    updatedCart.total = Number(
      updatedCart.items
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2)
    );

    saveCart(updatedCart);

    window.dispatchEvent(
      new CustomEvent("cartUpdated", {
        detail: updatedCart,
      })
    );
  };

  return (
    <div className="space-y-4 border-t pt-4">
      {cart.items.map((item) => {
        const productDetails = products.find((p) => p.id === item.id);
        const fullItem = {
          ...item,
          ...productDetails,
        };

        return (
          <CartItem
            key={`${item.id}-${item.size}-${item.color}`}
            item={fullItem}
            handleRemoveItem={handleRemoveItem}
          />
        );
      })}
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: {cart.total.toFixed(2)}€</p>
      </div>
    </div>
  );
}
