export interface Subscription {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  frequency: string; 
  contentType: "newspaper" | "magazine" | "premium";
  features: string[];
  pricing: {
    monthly?: number;
    annual?: number;
  };
  category: string;
  digitalAccess: boolean;
  printAccess: boolean;
  archiveAccess: boolean;
}

export const subscriptions: Subscription[] = [
  {
    id: "sub-001",
    slug: "digital-daily-news",
    name: "Digital Daily News",
    subtitle: "Daily news coverage",
    image: "/subscriptions/digital-daily-news.jpg",
    description:
      "Stay informed with our digital daily newspaper. Access all national and international news, economy, sports and culture.",
    frequency: "Daily",
    contentType: "newspaper",
    features: [
      "Daily digital edition",
      "Morning newsletter",
      "Breaking news notifications",
      "1-year archive access",
      "Offline reading",
    ],
    pricing: {
      monthly: 9.99,
      annual: 99.99,
    },
    category: "News",
    digitalAccess: true,
    printAccess: false,
    archiveAccess: true,
  },
  {
    id: "sub-002",
    slug: "premium-culture-magazine",
    name: "Premium Culture Magazine",
    subtitle: "Cultural excellence",
    image: "/subscriptions/culture-premium.jpg",
    description:
      "The reference magazine for culture enthusiasts. Arts, literature, cinema, theater and exhibitions.",
    frequency: "Monthly",
    contentType: "magazine",
    features: [
      "Monthly digital magazine",
      "Exclusive premium content",
      "Artist interviews",
      "Cultural events guide",
      "Exclusive podcasts",
    ],
    pricing: {
      monthly: 12.99,
      annual: 129.99,
    },
    category: "Culture",
    digitalAccess: true,
    printAccess: false,
    archiveAccess: true,
  },
  {
    id: "sub-003",
    slug: "weekly-economy",
    name: "Weekly Economy",
    subtitle: "Economy decoded",
    image: "/subscriptions/weekly-economy.jpg",
    description:
      "Economic analysis and insights. Financial markets, companies, innovations and trends.",
    frequency: "Weekly",
    contentType: "newspaper",
    features: [
      "Weekly magazine",
      "Expert analysis",
      "Real-time market data",
      "Specialized newsletter",
      "Monthly webinars",
    ],
    pricing: {
      monthly: 15.99,
      annual: 159.99,
    },
    category: "Economy",
    digitalAccess: true,
    printAccess: false,
    archiveAccess: true,
  },
  {
    id: "sub-004",
    slug: "unlimited-premium",
    name: "Unlimited Premium",
    subtitle: "Total access to our content",
    image: "/subscriptions/premium-unlimited.jpg",
    description:
      "The premium offer that gives you access to all our publications: daily newspapers, specialized magazines and exclusive content.",
    frequency: "Unlimited",
    contentType: "premium",
    features: [
      "Access to all our newspapers",
      "All specialized magazines",
      "Exclusive premium content",
      "Unlimited complete archives",
      "Premium mobile app",
      "Priority support",
      "Ad-free experience",
    ],
    pricing: {
      monthly: 24.99,
      annual: 249.99,
    },
    category: "Premium",
    digitalAccess: true,
    printAccess: false,
    archiveAccess: true,
  },
  {
    id: "sub-005",
    slug: "tech-innovation-magazine",
    name: "Tech & Innovation",
    subtitle: "Technology news",
    image: "/subscriptions/tech-innovation.jpg",
    description:
      "Discover the latest technological innovations, promising startups and digital trends.",
    frequency: "Bi-monthly",
    contentType: "magazine",
    features: [
      "Bi-monthly digital magazine",
      "Exclusive product reviews",
      "Tech leader interviews",
      "Technology watch",
      "Expert community",
    ],
    pricing: {
      monthly: 11.99,
      annual: 119.99,
    },
    category: "Technology",
    digitalAccess: true,
    printAccess: false,
    archiveAccess: true,
  },
  {
    id: "sub-006",
    slug: "sports-passion",
    name: "Sports Passion",
    subtitle: "All sports news",
    image: "/subscriptions/sport-passion.jpg",
    description:
      "Follow all sports with our analysis, results and exclusive interviews with the greatest athletes.",
    frequency: "Daily",
    contentType: "newspaper",
    features: [
      "Daily sports news",
      "Real-time results",
      "Expert analysis",
      "Exclusive videos and photos",
      "Events calendar",
    ],
    pricing: {
      monthly: 8.99,
      annual: 89.99,
    },
    category: "Sports",
    digitalAccess: true,
    printAccess: false,
    archiveAccess: true,
  },
];
