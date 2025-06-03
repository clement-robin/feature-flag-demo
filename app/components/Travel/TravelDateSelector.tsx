interface TravelDateSelectorProps {
  dates: string[];
  selectedDate: string | null;
  onDateSelect: (date: string) => void;
}

export default function TravelDateSelector({
  dates,
  selectedDate,
  onDateSelect,
}: TravelDateSelectorProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-900">
        Choisissez votre date de départ
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => onDateSelect(date)}
            className={`p-3 border rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedDate === date
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-25"
            }`}
          >
            {formatDate(date)}
          </button>
        ))}
      </div>
    </div>
  );
}
