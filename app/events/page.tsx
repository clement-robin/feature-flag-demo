import { events } from "@/data/events";
import EventCard from "@/app/components/Events/EventCard";

export default function BilletteriePage() {
  const eventsByCategory = events.reduce((acc, event) => {
    if (!acc[event.category]) {
      acc[event.category] = [];
    }
    acc[event.category].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  const categoryLabels = {
    concert: "Concerts",
    festival: "Festivals",
    théâtre: "Théâtre",
    sport: "Sport",
    comedy: "Spectacles d'humour",
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🎭 Billetterie
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez nos événements exceptionnels : concerts, festivals, théâtre,
          sport et spectacles d'humour. Réservez vos billets dès maintenant !
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(eventsByCategory).map(([category, categoryEvents]) => (
          <section key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-purple-500 pb-2">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {events.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Aucun événement disponible pour le moment.
          </p>
        </div>
      )}
    </div>
  );
}
