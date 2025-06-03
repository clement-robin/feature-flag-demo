import { subscriptions } from "@/data/subscriptions";
import SubscriptionList from "../components/Subscriptions/SubscriptionList";

export default function AbonnementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Presse & Abonnements
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Découvrez nos contenus numériques premium
            </p>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Journaux quotidiens, magazines spécialisés et contenus exclusifs.
              Restez informé avec nos abonnements numériques de qualité.
            </p>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SubscriptionList subscriptions={subscriptions} />
      </div>
    </div>
  );
}
