interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  bgColor,
  iconColor,
}: FeatureCardProps) {
  return (
    <div className="text-center">
      <div
        className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        <div className={`w-8 h-8 ${iconColor}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
