export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  sku: string;
  type: "product" | "travel" | "event" | "subscription";
  
  size?: string;
  color?: string;
  colors?: Array<{ name: string; hex: string }>;
  sizes?: string[];
  
  departureDate?: string;
  destination?: string;
  duration?: string;
  difficulty?: string;
  category?: string;
  
  eventId?: string;
  ticketCategoryId?: string;
  ticketCategoryName?: string;
  eventDate?: string;
  eventTime?: string;
  venue?: string;
  artist?: string;
  
  subscriptionDuration?: "monthly" | "annual";
  frequency?: string;
  contentType?: "newspaper" | "magazine" | "premium";
  features?: string[];
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export const CART_STORAGE_KEY = "shopping_cart";

export const getStoredCart = (): Cart => {
  if (typeof window === "undefined") return { items: [], total: 0 };

  const storedCart = sessionStorage.getItem(CART_STORAGE_KEY);
  return storedCart ? JSON.parse(storedCart) : { items: [], total: 0 };
};

export const saveCart = (cart: Cart): void => {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

declare global {
  interface Window {
    cart: Cart;
  }
}
