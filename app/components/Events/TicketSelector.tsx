import { TicketCategory } from "@/data/events";

interface TicketSelectorProps {
  category: TicketCategory;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export default function TicketSelector({
  category,
  quantity,
  onQuantityChange,
}: TicketSelectorProps) {
  const handleDecrease = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < Math.min(category.availableQuantity, 10)) {
      onQuantityChange(quantity + 1);
    }
  };

  const maxQuantity = Math.min(category.availableQuantity, 10);

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">{category.name}</h4>
          <p className="text-sm text-gray-600 mb-1">{category.description}</p>
          <p className="text-xs text-gray-500">
            {category.availableQuantity} places disponibles
          </p>
        </div>
        <div className="text-right ml-4">
          <div className="text-lg font-bold text-purple-600">
            {category.price.toFixed(2)} €
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDecrease}
            disabled={quantity === 0}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          >
            −
          </button>

          <span className="w-8 text-center font-medium">{quantity}</span>

          <button
            onClick={handleIncrease}
            disabled={quantity >= maxQuantity}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>

        {quantity > 0 && (
          <div className="text-sm font-medium text-purple-600">
            {(category.price * quantity).toFixed(2)} €
          </div>
        )}
      </div>

      {category.availableQuantity < 10 && (
        <div className="mt-2 text-xs text-orange-600 font-medium">
          ⚠️ Plus que {category.availableQuantity} places disponibles
        </div>
      )}
    </div>
  );
}
