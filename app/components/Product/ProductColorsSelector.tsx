"use client";

import { useState } from "react";
import ColorButton from "./ColorButton";

export default function ProductColorSelector({
  colors,
  selectedColor,
  onColorSelect,
}: {
  colors: { name: string; hex: string }[];
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
}) {
  return (
    <div className="mt-4">
      <span>Colors</span>
      <ul className="flex gap-2 mt-2">
        {colors.map((color: { name: string; hex: string }) => (
          <ColorButton
            key={color.name}
            color={color.hex}
            isSelected={color.name === selectedColor}
            onClick={() => onColorSelect(color.name)}
          />
        ))}
      </ul>
    </div>
  );
}
