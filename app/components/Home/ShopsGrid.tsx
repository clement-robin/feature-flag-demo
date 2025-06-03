import ShopCard from "./ShopCard";

const shops = [
  {
    href: "/shop",
    emoji: "👕",
    title: "Fashion Store",
    subtitle: "Trendy Collection",
    description:
      "Discover our selection of quality clothing and accessories. T-shirts, jeans, jackets and much more.",
    buttonText: "Discover the store",
    gradientFrom: "from-gray-800",
    gradientTo: "to-gray-900",
    textColor: "text-gray-800",
  },
  {
    href: "/travel",
    emoji: "🌍",
    title: "Travel Agency",
    subtitle: "Exceptional Journeys",
    description:
      "Embark on adventure with our organized trips around the world. Culture, nature, adventure or relaxation.",
    buttonText: "Explore destinations",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
    textColor: "text-blue-600",
  },
  {
    href: "/events",
    emoji: "🎭",
    title: "Event Ticketing",
    subtitle: "Live Events",
    description:
      "Book your tickets for the best concerts, festivals, shows and sporting events. Don't miss anything!",
    buttonText: "See events",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    textColor: "text-purple-600",
  },
  {
    href: "/subscriptions",
    emoji: "📰",
    title: "Press & Subscriptions",
    subtitle: "Premium Content",
    description:
      "Access our daily newspapers, specialized magazines and exclusive content. Stay informed with our digital subscriptions.",
    buttonText: "Discover our subscriptions",
    gradientFrom: "from-indigo-600",
    gradientTo: "to-cyan-600",
    textColor: "text-indigo-600",
  },
];

export default function ShopsGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {shops.map((shop, index) => (
        <ShopCard key={index} {...shop} />
      ))}
    </div>
  );
}
