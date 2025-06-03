export interface Travel {
  id: string;
  slug: string;
  name: string;
  sku: string;
  image: string;
  description: string;
  destination: string;
  duration: string;
  departureDates: string[];
  includes: string[];
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  difficulty: "Easy" | "Moderate" | "Difficult";
  category: "Adventure" | "Relaxation" | "Culture" | "Nature" | "Gastronomy";
}

export const travels: Travel[] = [
  {
    id: "travel-001",
    slug: "bali-paradise",
    name: "Bali Paradise",
    sku: "BALI-001",
    image:
      "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop",
    description:
      "Discover the wonders of Bali between mystical temples, terraced rice fields and paradise beaches. An unforgettable journey to the heart of Indonesia.",
    destination: "Bali, Indonesia",
    duration: "10 days / 9 nights",
    departureDates: ["2024-03-15", "2024-04-20", "2024-05-18", "2024-06-22"],
    includes: [
      "Round-trip flight",
      "4-star hotel",
      "Breakfast",
      "English-speaking guide",
      "Excursions",
    ],
    price: 1299.99,
    originalPrice: 1599.99,
    rating: 4.8,
    reviewsCount: 127,
    difficulty: "Easy",
    category: "Relaxation",
  },
  {
    id: "travel-002",
    slug: "nepal-trek",
    name: "Nepal Trek",
    sku: "NEPAL-002",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
    description:
      "Adventure in the Nepalese Himalayas. 14-day trek to Everest base camp with experienced guides.",
    destination: "Himalayas, Nepal",
    duration: "14 days / 13 nights",
    departureDates: ["2024-04-10", "2024-05-05", "2024-09-15", "2024-10-20"],
    includes: [
      "Round-trip flight",
      "Lodge accommodation",
      "All meals",
      "Sherpa guide",
      "Trekking permits",
    ],
    price: 2499.99,
    rating: 4.9,
    reviewsCount: 89,
    difficulty: "Difficult",
    category: "Adventure",
  },
  {
    id: "travel-003",
    slug: "cultural-japan",
    name: "Cultural Japan",
    sku: "JAPAN-003",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    description:
      "Total immersion in Japanese culture: modern Tokyo, traditional Kyoto, tea ceremony and ancestral temples.",
    destination: "Tokyo - Kyoto, Japan",
    duration: "12 days / 11 nights",
    departureDates: ["2024-03-20", "2024-04-15", "2024-10-10", "2024-11-05"],
    includes: [
      "Round-trip flight",
      "JR Pass",
      "Traditional ryokan",
      "Cultural guide",
      "Authentic experiences",
    ],
    price: 3199.99,
    rating: 4.7,
    reviewsCount: 156,
    difficulty: "Moderate",
    category: "Culture",
  },
  {
    id: "travel-004",
    slug: "kenya-safari",
    name: "Kenya Safari",
    sku: "KENYA-004",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    description:
      "Exceptional safari in the Masai Mara and Amboseli reserves. Observe the Big Five in their natural habitat.",
    destination: "Masai Mara, Kenya",
    duration: "8 days / 7 nights",
    departureDates: ["2024-07-01", "2024-08-15", "2024-09-05", "2024-12-20"],
    includes: [
      "Round-trip flight",
      "Safari lodge",
      "Full board",
      "Game drives",
      "Ranger guide",
    ],
    price: 2799.99,
    rating: 4.9,
    reviewsCount: 203,
    difficulty: "Easy",
    category: "Nature",
  },
  {
    id: "travel-005",
    slug: "tuscany-gastronomy",
    name: "Tuscany Gastronomy",
    sku: "TUSCANY-005",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop",
    description:
      "Gastronomic journey in Tuscany: wine tastings, cooking classes, local markets and breathtaking landscapes.",
    destination: "Tuscany, Italy",
    duration: "7 days / 6 nights",
    departureDates: ["2024-05-10", "2024-06-14", "2024-09-20", "2024-10-18"],
    includes: [
      "Charming accommodation",
      "Half board",
      "Tastings",
      "Cooking classes",
      "Vineyard visits",
    ],
    price: 1899.99,
    rating: 4.6,
    reviewsCount: 98,
    difficulty: "Easy",
    category: "Gastronomy",
  },
  {
    id: "travel-006",
    slug: "iceland-northern-lights",
    name: "Iceland & Northern Lights",
    sku: "ICELAND-006",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description:
      "Discover Iceland in winter: geysers, frozen waterfalls, thermal baths and magical northern lights hunting.",
    destination: "Reykjavik, Iceland",
    duration: "6 days / 5 nights",
    departureDates: ["2024-12-01", "2024-12-15", "2025-01-10", "2025-02-05"],
    includes: [
      "Round-trip flight",
      "3-star hotel",
      "Breakfast",
      "Northern lights tours",
      "Blue Lagoon",
    ],
    price: 1699.99,
    rating: 4.8,
    reviewsCount: 167,
    difficulty: "Moderate",
    category: "Nature",
  },
  {
    id: "travel-007",
    slug: "peru-machu-picchu",
    name: "Peru & Machu Picchu",
    sku: "PERU-007",
    image:
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop",
    description:
      "Mystical journey to Peru: Cusco, Sacred Valley, and the wonder of the world that is Machu Picchu.",
    destination: "Cusco - Machu Picchu, Peru",
    duration: "9 days / 8 nights",
    departureDates: ["2024-04-25", "2024-06-01", "2024-08-10", "2024-09-28"],
    includes: [
      "Round-trip flight",
      "Selected hotels",
      "Train to Machu Picchu",
      "Archaeologist guide",
      "Site entries",
    ],
    price: 2299.99,
    rating: 4.9,
    reviewsCount: 234,
    difficulty: "Moderate",
    category: "Culture",
  },
  {
    id: "travel-008",
    slug: "luxury-maldives",
    name: "Luxury Maldives",
    sku: "MALDIVES-008",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description:
      "Luxury stay in the Maldives in a 5-star overwater resort. Crystal clear waters, white sand beaches and exceptional service.",
    destination: "Malé Atoll, Maldives",
    duration: "7 days / 6 nights",
    departureDates: ["2024-03-01", "2024-04-05", "2024-11-15", "2024-12-10"],
    includes: [
      "Round-trip flight",
      "5-star resort",
      "Full board",
      "Spa included",
      "Water activities",
    ],
    price: 4299.99,
    rating: 4.9,
    reviewsCount: 145,
    difficulty: "Easy",
    category: "Relaxation",
  },
];
