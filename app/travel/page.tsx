"use client";

import { travels } from "@/data/travels";
import TravelCard from "@/app/components/Travel/TravelCard";

export default function VoyagesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Nos Voyages d'Exception
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez notre sélection de voyages uniques aux quatre coins du
          monde. Des aventures extraordinaires vous attendent !
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {travels.map((travel) => (
          <TravelCard key={travel.id} travel={travel} />
        ))}
      </div>
    </div>
  );
}
