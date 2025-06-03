import { Travel } from "@/data/travels";

interface TravelImageProps {
  travel: Travel;
}

export default function TravelImage({ travel }: TravelImageProps) {
  const imageUrl = travel.image.startsWith("http")
    ? travel.image
    : `https://clement-robin.github.io/feature-flag-demo${travel.image}`;

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={travel.name || "Travel image"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="rounded-lg"
      />
      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-semibold">
        {travel.category}
      </div>
      {travel.originalPrice && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-md text-sm font-semibold">
          PROMOTION
        </div>
      )}
    </div>
  );
}
