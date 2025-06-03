"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { events } from "@/data/events";
import { saveCart, getStoredCart, CartItem } from "@/types/cart";
import TicketSelector from "@/app/components/Events/TicketSelector";

export default function EventDetailClientComponent() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const event = events.find((e) => e.slug === slug);
  const [selectedTickets, setSelectedTickets] = useState<
    Record<string, number>
  >({});

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Event not found
        </h1>
        <p className="text-gray-600 mb-6">
          The event you are looking for does not exist.
        </p>
        <button
          onClick={() => router.push("/events")}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Back to events
        </button>
      </div>
    );
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleTicketQuantityChange = (categoryId: string, quantity: number) => {
    setSelectedTickets((prev) => ({
      ...prev,
      [categoryId]: quantity,
    }));
  };

  const getTotalPrice = () => {
    return Object.entries(selectedTickets).reduce(
      (total, [categoryId, quantity]) => {
        const category = event.ticketCategories.find(
          (cat) => cat.id === categoryId
        );
        return total + (category ? category.price * quantity : 0);
      },
      0
    );
  };

  const getTotalTickets = () => {
    return Object.values(selectedTickets).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const addToCart = () => {
    const cart = getStoredCart();

    Object.entries(selectedTickets).forEach(([categoryId, quantity]) => {
      if (quantity > 0) {
        const category = event.ticketCategories.find(
          (cat) => cat.id === categoryId
        );
        if (category) {
          const cartItem: CartItem = {
            id: `${event.id}-${categoryId}`,
            quantity,
            price: category.price,
            name: `${event.name} - ${category.name}`,
            slug: event.slug,
            image: event.image,
            description: event.description,
            sku: `EVT-${event.id}-${categoryId}`,
            type: "event",
            eventId: event.id,
            ticketCategoryId: categoryId,
            ticketCategoryName: category.name,
            eventDate: event.date,
            eventTime: event.time,
            venue: event.venue,
            artist: event.artist,
          };

          const existingItemIndex = cart.items.findIndex(
            (item) => item.id === cartItem.id
          );

          if (existingItemIndex > -1) {
            cart.items[existingItemIndex].quantity += quantity;
          } else {
            cart.items.push(cartItem);
          }
        }
      }
    });

    cart.total = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    saveCart(cart);

    
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: cart }));

    
    setSelectedTickets({});

    
    router.push("/cart");
  };

  const categoryIcons = {
    concert: "🎵",
    festival: "🎪",
    theater: "🎭",
    sport: "⚽",
    comedy: "😂",
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <button
        onClick={() => router.push("/events")}
        className="mb-6 text-purple-600 hover:text-purple-800 flex items-center"
      >
        ← Back to events
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg h-64 flex items-center justify-center mb-6">
            <div className="text-8xl">{categoryIcons[event.category]}</div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {event.name}
          </h1>

          <p className="text-xl text-purple-600 font-medium mb-4">
            {event.artist}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-700">
              <span className="mr-3 text-lg">📅</span>
              <div>
                <div className="font-medium">{formatDate(event.date)}</div>
                <div className="text-sm text-gray-500">{event.time}</div>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <span className="mr-3 text-lg">📍</span>
              <div>
                <div className="font-medium">{event.venue}</div>
                <div className="text-sm text-gray-500">
                  {event.address}, {event.city}
                </div>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">{event.description}</p>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Select your tickets
          </h3>

          <div className="space-y-4 mb-6">
            {event.ticketCategories.map((category) => (
              <TicketSelector
                key={category.id}
                category={category}
                quantity={selectedTickets[category.id] || 0}
                onQuantityChange={(quantity) =>
                  handleTicketQuantityChange(category.id, quantity)
                }
              />
            ))}
          </div>

          {getTotalTickets() > 0 && (
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">
                  {getTotalTickets()} ticket{getTotalTickets() > 1 ? "s" : ""}
                </span>
                <span className="text-xl font-bold text-purple-600">
                  €{getTotalPrice().toFixed(2)}
                </span>
              </div>

              <button
                onClick={addToCart}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
