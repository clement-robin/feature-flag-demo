"use client";

import ProductAddToCart from "./ProductAddToCart";
import ProductColorsSelector from "./ProductColorsSelector";
import ProductDescription from "./ProductDescription";
import ProductName from "./ProductName";
import ProductPrice from "./ProductPrice";
import ProductSizesSelector from "./ProductSizesSelector";
import ProductQuantitySelector from "./ProductQuantitySelector";
import { useState } from "react";
import ProductQuantitySelector2 from "./ProductQuantitySelector2";
import ProductSizesSelector2 from "./ProductSizesSelector2";

export default function ProductPresentation({ product }: { product: any }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <ProductName name={product.name} />
      <ProductDescription description={product.description} />
      <ProductPrice price={product.price} />

      <div className={`${error ? "border-2 border-red-500" : ""}`}>
        <ProductColorsSelector
          colors={product.colors}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />

        <ProductSizesSelector2
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
        />
      </div>
      <div className="pt-4">
        <ProductQuantitySelector2 onQuantityChange={setQuantity} />
      </div>

      <ProductAddToCart
        price={product.price}
        id={product.id}
        slug={product.slug}
        name={product.name}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        quantity={quantity}
        error={error}
        image={product.image}
        description={product.description}
        sku={product.sku}
        colors={product.colors}
        sizes={product.sizes}
      />
    </div>
  );
}
