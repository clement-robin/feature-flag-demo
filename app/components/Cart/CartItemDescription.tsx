import { CartItem } from "@/types/cart";

export default function CartItemDescription({ item }: { item: CartItem }) {
  const imageUrl = item.image.startsWith("http")
    ? item.image
    : `https://clement-robin.github.io/feature-flag-demo${item.image}`;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const categoryIcons = {
    concert: "🎵",
    festival: "🎪",
    théâtre: "🎭",
    sport: "⚽",
    comedy: "😂",
  };

  const getSubscriptionIcon = (contentType: string, frequency: string) => {
    if (contentType === "premium") return "🌟";
    if (frequency?.includes("Quotidien")) return "📰";
    if (frequency?.includes("Hebdomadaire")) return "📅";
    if (frequency?.includes("Mensuel")) return "📖";
    if (frequency?.includes("Bimensuel")) return "📑";
    return "📄";
  };

  const getSubscriptionBadge = (contentType: string) => {
    switch (contentType) {
      case "journal":
        return { text: "Journal", color: "bg-blue-100 text-blue-800" };
      case "magazine":
        return { text: "Magazine", color: "bg-purple-100 text-purple-800" };
      case "premium":
        return { text: "Premium", color: "bg-yellow-100 text-yellow-800" };
      default:
        return { text: "Abonnement", color: "bg-gray-100 text-gray-800" };
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        {item.type === "event" ? (
          <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded flex items-center justify-center">
            <div className="text-2xl">
              {categoryIcons[item.category as keyof typeof categoryIcons] ||
                "🎫"}
            </div>
          </div>
        ) : item.type === "subscription" ? (
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-200 rounded flex items-center justify-center">
            <div className="text-2xl">
              {getSubscriptionIcon(
                item.contentType || "",
                item.frequency || ""
              )}
            </div>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />
        )}
        <div className="w-full">
          <h2 className="font-semibold">{item.name}</h2>
          {item.type === "product" && (
            <p className="text-sm text-gray-600">
              Taille: {item.size} | Couleur: {item.color}
            </p>
          )}
          {item.type === "travel" && (
            <div className="text-sm text-gray-600">
              <p>
                Départ:{" "}
                {item.departureDate
                  ? formatDate(item.departureDate)
                  : "Non défini"}
              </p>
              <p>Destination: {item.destination}</p>
              <p>Durée: {item.duration}</p>
            </div>
          )}
          {item.type === "event" && (
            <div className="text-sm text-gray-600">
              <p className="text-purple-600 font-medium">{item.artist}</p>
              <p>
                📅 {item.eventDate ? formatDate(item.eventDate) : "Non défini"}{" "}
                à {item.eventTime}
              </p>
              <p>📍 {item.venue}</p>
              <p className="font-medium text-gray-800">
                Catégorie: {item.ticketCategoryName}
              </p>
            </div>
          )}
          {item.type === "subscription" && (
            <div className="text-sm text-gray-600 space-y-1">
              <div className="flex items-center gap-2">
                {item.contentType && (
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      getSubscriptionBadge(item.contentType).color
                    }`}
                  >
                    {getSubscriptionBadge(item.contentType).text}
                  </span>
                )}
                {item.frequency && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    {item.frequency}
                  </span>
                )}
              </div>
              <p>
                <span className="font-medium">Durée:</span>{" "}
                {item.subscriptionDuration === "monthly" ? "Mensuel" : "Annuel"}
              </p>
              {item.features && item.features.length > 0 && (
                <p className="text-xs">
                  <span className="font-medium">Inclus:</span>{" "}
                  {item.features.slice(0, 2).join(", ")}
                  {item.features.length > 2 && "..."}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
