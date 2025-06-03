import Link from "next/link";

interface ShopCardProps {
  href: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  gradientFrom: string;
  gradientTo: string;
  textColor: string;
}

export default function ShopCard({
  href,
  emoji,
  title,
  subtitle,
  description,
  buttonText,
  gradientFrom,
  gradientTo,
  textColor,
}: ShopCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
        <div
          className={`h-64 bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center`}
        >
          <div className="text-center text-white">
            <div className="text-6xl mb-4">{emoji}</div>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {subtitle}
          </h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className={`flex items-center ${textColor} font-semibold`}>
            {buttonText}
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
