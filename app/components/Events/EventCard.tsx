import Link from "next/link";
import Image from "next/image";
import { Event } from "@/data/events";

interface EventCardProps {
  event: Event;
}

const categoryIcons = {
  concert: "🎵",
  festival: "🎪",
  theater: "🎭",
  sport: "⚽",
  comedy: "😂",
};

const categoryColors = {
  concert: "bg-purple-100 text-purple-800",
  festival: "bg-green-100 text-green-800",
  theater: "bg-red-100 text-red-800",
  sport: "bg-blue-100 text-blue-800",
  comedy: "bg-yellow-100 text-yellow-800",
};

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const minPrice = Math.min(...event.ticketCategories.map((cat) => cat.price));

  return (
    <Link href={`/events/${event.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border hover:border-purple-300 transform hover:-translate-y-1">
        <div className="relative">
          <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
            <div className="text-6xl">{categoryIcons[event.category]}</div>
          </div>
          <div
            className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${
              categoryColors[event.category]
            }`}
          >
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
            {event.name}
          </h3>

          <p className="text-purple-600 font-medium text-sm mb-1">
            {event.artist}
          </p>

          <div className="flex items-center text-gray-600 text-sm mb-2">
            <span className="mr-2">📅</span>
            <span>
              {formatDate(event.date)} at {event.time}
            </span>
          </div>

          <div className="flex items-center text-gray-600 text-sm mb-3">
            <span className="mr-2">📍</span>
            <span className="truncate">
              {event.venue}, {event.city}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-right">
              <span className="text-sm text-gray-500">From</span>
              <div className="text-lg font-bold text-purple-600">
                €{minPrice.toFixed(2)}
              </div>
            </div>

            <div className="text-xs text-gray-500">
              {event.ticketCategories.length} categor
              {event.ticketCategories.length > 1 ? "ies" : "y"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
