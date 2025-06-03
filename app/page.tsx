import HeroSection from "./components/Home/HeroSection";
import ShopsGrid from "./components/Home/ShopsGrid";
import FeaturesSection from "./components/Home/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        
        <HeroSection />

        
        <ShopsGrid />

        
        <FeaturesSection />
      </div>
    </div>
  );
}
