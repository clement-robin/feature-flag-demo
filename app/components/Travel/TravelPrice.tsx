interface TravelPriceProps {
  price: number;
  originalPrice?: number;
}

export default function TravelPrice({
  price,
  originalPrice,
}: TravelPriceProps) {
  return (
    <div className="flex items-center space-x-3">
      {originalPrice && (
        <span className="text-lg text-gray-500 line-through">
          {originalPrice}€
        </span>
      )}
      <span className="text-2xl font-bold text-blue-600">{price}€</span>
      {originalPrice && (
        <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-semibold">
          Économisez {originalPrice - price}€
        </span>
      )}
    </div>
  );
}
