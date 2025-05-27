"use client";

import { useState } from "react";

export default function ProductSizesSelector2({
  sizes,
  selectedSize,
  onSizeSelect,
}: {
  sizes: string[];
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <span>Size</span>
      <div className="relative mt-2">
        <button
          className="flex items-center justify-between w-32 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedSize || "Select size"}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-24 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {sizes.map((size) => (
              <button
                key={size}
                className={`w-full px-3 py-2 text-left hover:bg-gray-100 ${
                  size === selectedSize ? "bg-gray-100" : ""
                }`}
                onClick={() => {
                  onSizeSelect(size);
                  setIsOpen(false);
                }}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
