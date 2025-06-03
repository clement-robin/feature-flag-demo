"use client";

import { Travel } from "@/data/travels";
import { useState } from "react";
import TravelImage from "./TravelImage";
import TravelName from "./TravelName";
import TravelDescription from "./TravelDescription";
import TravelPrice from "./TravelPrice";
import TravelDateSelector from "./TravelDateSelector";
import TravelQuantitySelector from "./TravelQuantitySelector";
import TravelAddToCart from "./TravelAddToCart";

interface TravelPresentationProps {
  travel: Travel;
}

export default function TravelPresentation({
  travel,
}: TravelPresentationProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <div className="space-y-4">
        <TravelImage travel={travel} />

        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">This trip includes:</h3>
          <ul className="space-y-2">
            {travel.includes.map((item, index) => (
              <li key={index} className="flex items-center text-sm">
                <svg
                  className="w-4 h-4 text-green-600 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="space-y-6">
        <div>
          <TravelName name={travel.name} />

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {travel.destination}
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-4">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {travel.duration}
          </div>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(travel.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-gray-600 ml-2">
                {travel.rating}/5 ({travel.reviewsCount} reviews)
              </span>
            </div>
            <span
              className={`ml-4 px-3 py-1 rounded-full text-sm font-semibold ${
                travel.difficulty === "Easy"
                  ? "bg-green-100 text-green-800"
                  : travel.difficulty === "Moderate"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {travel.difficulty}
            </span>
          </div>
        </div>

        <TravelDescription description={travel.description} />
        <TravelPrice
          price={travel.price}
          originalPrice={travel.originalPrice}
        />

        
        <div
          className={`${error ? "border-2 border-red-500 rounded-lg p-4" : ""}`}
        >
          <TravelDateSelector
            dates={travel.departureDates}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>

        <div className="pt-4">
          <TravelQuantitySelector onQuantityChange={setQuantity} />
        </div>

        <TravelAddToCart
          travel={travel}
          selectedDate={selectedDate}
          quantity={quantity}
          error={error}
          setError={setError}
        />
      </div>
    </div>
  );
}
