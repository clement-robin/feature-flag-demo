import Image from "next/image";
import Link from "next/link";
import { Travel } from "@/data/travels";

interface TravelCardProps {
  travel: Travel;
}

export default function TravelCard({ travel }: TravelCardProps) {
  const imageUrl = travel.image.startsWith("http")
    ? travel.image
    : `https://clement-robin.github.io/feature-flag-demo${travel.image}`;

  return (
    <div className="travel-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/travel/${travel.id}`}>
        <div className="relative w-full h-48">
          <img
            src={imageUrl}
            alt={travel.name || "Travel image"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            className="rounded-t-lg"
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
            {travel.category}
          </div>
          {travel.originalPrice && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              SALE
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {travel.name}
          </h3>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {travel.destination}
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-2">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            {travel.duration}
          </div>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(travel.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-gray-600 ml-2">
                ({travel.reviewsCount} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              {travel.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  €{travel.originalPrice}
                </span>
              )}
              <span className="text-xl font-bold text-blue-600">
                €{travel.price}
              </span>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                travel.difficulty === "Easy"
                  ? "bg-green-100 text-green-800"
                  : travel.difficulty === "Moderate"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {travel.difficulty}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
