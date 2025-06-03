interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Welcome to Kameleoon
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Discover our comprehensive e-commerce platform with four distinct
        universes: a trendy fashion store, an exceptional travel agency, an
        event ticketing service, and our premium press subscriptions.
      </p>
    </div>
  );
}
