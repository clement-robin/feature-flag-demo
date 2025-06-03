"use client";

import { Subscription } from "@/data/subscriptions";
import Link from "next/link";

interface SubscriptionCardProps {
  subscription: Subscription;
}

export default function SubscriptionCard({
  subscription,
}: SubscriptionCardProps) {
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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-50">
            {getFrequencyIcon(subscription.frequency)}
          </div>
        </div>

        
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(
              subscription.contentType
            )}`}
          >
            {subscription.contentType === "newspaper"
              ? "Newspaper"
              : subscription.contentType === "magazine"
              ? "Magazine"
              : "Premium"}
          </span>
        </div>

        
        <div className="absolute top-3 right-3">
          <span className="bg-white bg-opacity-90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
            {subscription.frequency}
          </span>
        </div>
      </div>

      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {subscription.name}
          </h3>
          <p className="text-sm text-gray-600">{subscription.subtitle}</p>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {subscription.description}
        </p>

        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {subscription.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {subscription.features.length > 3 && (
              <span className="text-xs text-gray-500">
                +{subscription.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            {subscription.pricing.monthly && (
              <div className="text-2xl font-bold text-gray-900">
                €{subscription.pricing.monthly}
                <span className="text-sm font-normal text-gray-600">
                  /month
                </span>
              </div>
            )}
            {subscription.pricing.annual && (
              <div className="text-sm text-green-600">
                €{subscription.pricing.annual}/year
                {subscription.pricing.monthly && (
                  <span className="block text-xs">
                    (-
                    {Math.round(
                      (1 -
                        subscription.pricing.annual /
                          12 /
                          subscription.pricing.monthly) *
                        100
                    )}
                    %)
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        
        <Link
          href={`/subscriptions/${subscription.slug}`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-center block"
        >
          Discover the offer
        </Link>
      </div>
    </div>
  );
}
