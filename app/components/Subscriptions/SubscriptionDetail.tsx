"use client";

import { useState } from "react";
import { Subscription } from "@/data/subscriptions";
import { CartItem, getStoredCart, saveCart } from "@/types/cart";
import Link from "next/link";

interface SubscriptionDetailProps {
  subscription: Subscription;
}

export default function SubscriptionDetail({
  subscription,
}: SubscriptionDetailProps) {
  const [selectedDuration, setSelectedDuration] = useState<
    "monthly" | "annual"
  >("monthly");
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const currentPrice =
    selectedDuration === "monthly"
      ? subscription.pricing.monthly
      : subscription.pricing.annual;

  const addToCart = () => {
    if (!currentPrice) return;

    setIsAddingToCart(true);

    const cartItem: CartItem = {
      id: `${subscription.id}-${selectedDuration}`,
      quantity: 1,
      price: currentPrice,
      name: subscription.name,
      slug: subscription.slug,
      image: subscription.image,
      description: subscription.description,
      sku: `SUB-${subscription.id}-${selectedDuration.toUpperCase()}`,
      type: "subscription",
      subscriptionDuration: selectedDuration,
      frequency: subscription.frequency,
      contentType: subscription.contentType,
      features: subscription.features,
    };

    const currentCart = getStoredCart();

    
    const existingItemIndex = currentCart.items.findIndex(
      (item) => item.id === cartItem.id
    );

    if (existingItemIndex > -1) {
      
      currentCart.items[existingItemIndex].quantity += 1;
    } else {
      
      currentCart.items.push(cartItem);
    }

    
    currentCart.total = currentCart.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    saveCart(currentCart);

    
    window.dispatchEvent(
      new CustomEvent("cartUpdated", {
        detail: currentCart,
      })
    );

    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  const getBadgeColor = (contentType: string) => {
    switch (contentType) {
      case "newspaper":
        return "bg-blue-100 text-blue-800";
      case "magazine":
        return "bg-purple-100 text-purple-800";
      case "premium":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getFrequencyIcon = (frequency: string) => {
    if (frequency.includes("Daily")) return "📰";
    if (frequency.includes("Weekly")) return "📅";
    if (frequency.includes("Monthly")) return "📖";
    if (frequency.includes("Bi-monthly")) return "📑";
    return "🌟";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/subscriptions" className="hover:text-blue-600">
              Subscriptions
            </Link>
            <span>/</span>
            <span className="text-gray-900">{subscription.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl opacity-50">
                  {getFrequencyIcon(subscription.frequency)}
                </div>
              </div>

              
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor(
                    subscription.contentType
                  )}`}
                >
                  {subscription.contentType === "newspaper"
                    ? "Newspaper"
                    : subscription.contentType === "magazine"
                    ? "Magazine"
                    : "Premium"}
                </span>
                <span className="bg-white bg-opacity-90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {subscription.frequency}
                </span>
              </div>
            </div>

            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Access included</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-1">💻</div>
                  <div className="text-sm font-medium">Digital</div>
                  <div className="text-xs text-gray-600">
                    {subscription.digitalAccess ? "Included" : "Not included"}
                  </div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-1">📚</div>
                  <div className="text-sm font-medium">Archives</div>
                  <div className="text-xs text-gray-600">
                    {subscription.archiveAccess ? "Included" : "Not included"}
                  </div>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-1">📱</div>
                  <div className="text-sm font-medium">Mobile</div>
                  <div className="text-xs text-gray-600">App included</div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {subscription.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {subscription.subtitle}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {subscription.description}
              </p>
            </div>

            
            <div>
              <h3 className="text-lg font-semibold mb-4">What's included:</h3>
              <ul className="space-y-2">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Choose your plan:</h3>

              <div className="space-y-3 mb-6">
                {subscription.pricing.monthly && (
                  <label
                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedDuration === "monthly"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="duration"
                        value="monthly"
                        checked={selectedDuration === "monthly"}
                        onChange={(e) =>
                          setSelectedDuration(e.target.value as "monthly")
                        }
                        className="text-blue-600"
                      />
                      <div>
                        <div className="font-medium">Monthly</div>
                        <div className="text-sm text-gray-600">
                          Renewed every month
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">
                        €{subscription.pricing.monthly}
                      </div>
                      <div className="text-sm text-gray-600">per month</div>
                    </div>
                  </label>
                )}

                {subscription.pricing.annual && (
                  <label
                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedDuration === "annual"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="duration"
                        value="annual"
                        checked={selectedDuration === "annual"}
                        onChange={(e) =>
                          setSelectedDuration(e.target.value as "annual")
                        }
                        className="text-blue-600"
                      />
                      <div>
                        <div className="font-medium flex items-center gap-2">
                          Annual
                          {subscription.pricing.monthly && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              -
                              {Math.round(
                                (1 -
                                  subscription.pricing.annual /
                                    12 /
                                    subscription.pricing.monthly) *
                                  100
                              )}
                              %
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          Renewed every year
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">
                        €{subscription.pricing.annual}
                      </div>
                      <div className="text-sm text-gray-600">
                        or €{(subscription.pricing.annual / 12).toFixed(2)}
                        /month
                      </div>
                    </div>
                  </label>
                )}
              </div>

              
              <button
                onClick={addToCart}
                disabled={isAddingToCart || !currentPrice}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isAddingToCart ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Adding to cart...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5"
                      />
                    </svg>
                    Add to cart - €{currentPrice}
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <Link
                  href="/cart"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View my cart →
                </Link>
              </div>
            </div>

            
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>24/7 customer support</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Instant access</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
