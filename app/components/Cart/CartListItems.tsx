import { Cart, saveCart, CartItem as CartItemType } from "@/types/cart";
import { products } from "@/data/products";
import { travels } from "@/data/travels";
import { events } from "@/data/events";
import { subscriptions } from "@/data/subscriptions";
import CartItem from "./CartItem";

export default function CartListItems({ cart }: { cart: Cart }) {
  const handleRemoveItem = (item: CartItemType) => {
    let updatedCart: Cart;

    if (item.type === "product") {
      updatedCart = {
        ...cart,
        items: cart.items.filter(
          (cartItem) =>
            !(
              cartItem.id === item.id &&
              cartItem.size === item.size &&
              cartItem.color === item.color &&
              cartItem.type === "product"
            )
        ),
      };
    } else if (item.type === "travel") {
      updatedCart = {
        ...cart,
        items: cart.items.filter(
          (cartItem) =>
            !(
              cartItem.id === item.id &&
              cartItem.departureDate === item.departureDate &&
              cartItem.type === "travel"
            )
        ),
      };
    } else if (item.type === "event") {
      updatedCart = {
        ...cart,
        items: cart.items.filter(
          (cartItem) => !(cartItem.id === item.id && cartItem.type === "event")
        ),
      };
    } else if (item.type === "subscription") {
      updatedCart = {
        ...cart,
        items: cart.items.filter(
          (cartItem) =>
            !(cartItem.id === item.id && cartItem.type === "subscription")
        ),
      };
    } else {
      
      updatedCart = cart;
    }

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

  const getItemKey = (item: CartItemType) => {
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
    <div className="space-y-4 border-t pt-4">
      {cart.items.map((item) => {
        let fullItem = item;

        
        if (item.type === "product") {
          const productDetails = products.find((p) => p.id === item.id);
          if (productDetails) {
            fullItem = {
              ...productDetails,
              ...item, 
            };
          }
        } else if (item.type === "travel") {
          const travelDetails = travels.find((t) => t.id === item.id);
          if (travelDetails) {
            fullItem = {
              ...travelDetails,
              ...item, 
            };
          }
        } else if (item.type === "event") {
          
          
          fullItem = item;
        } else if (item.type === "subscription") {
          
          const originalId = item.id.split("-").slice(0, -1).join("-"); 
          const subscriptionDetails = subscriptions.find(
            (s) => s.id === originalId
          );
          if (subscriptionDetails) {
            fullItem = {
              ...subscriptionDetails,
              ...item, 
            };
          }
        }

        return (
          <CartItem
            key={getItemKey(item)}
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
