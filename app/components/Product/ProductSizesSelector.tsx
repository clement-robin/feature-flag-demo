"use client";

import SizeButton from "./SizeButton";
import { useState } from "react";

export default function ProductSizesSelector({
  sizes,
  selectedSize,
  onSizeSelect,
}: {
  sizes: string[];
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
}) {
  return (
    <div className="mt-4">
      <span>Size</span>
      <ul className="flex gap-2 mt-2">
        {sizes.map((size: string) => (
          <SizeButton
            key={size}
            size={size}
            isSelected={size === selectedSize}
            onClick={() => onSizeSelect(size)}
          />
        ))}
      </ul>
    </div>
  );
}
