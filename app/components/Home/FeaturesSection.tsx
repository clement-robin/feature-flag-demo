import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Unified Cart",
    description: "Fashion, travel, tickets and subscriptions in the same cart",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0L4 5H2m5 8h10m0 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6z"
        />
      </svg>
    ),
  },
  {
    title: "Secure",
    description: "Your data and purchases are protected",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Fast",
    description: "Modern and responsive interface",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Multi-format",
    description: "Physical products, travel, events and subscriptions",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM4 15h10v-2H4v2zM4 11h10V9H4v2z"
        />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        A unified shopping experience
      </h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
