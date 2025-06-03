export interface TicketCategory {
  id: string;
  name: string;
  price: number;
  availableQuantity: number;
  description: string;
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  artist: string;
  image: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  city: string;
  category: "concert" | "festival" | "theater" | "sport" | "comedy";
  ticketCategories: TicketCategory[];
  totalCapacity: number;
}

export const events: Event[] = [
  {
    id: "evt-001",
    slug: "coldplay-paris-2024",
    name: "Coldplay - Music of the Spheres World Tour",
    artist: "Coldplay",
    image: "/events/coldplay-concert.jpg",
    description:
      "Join Coldplay for a magical evening with their greatest hits in a spectacular staging. A unique concert with breathtaking visual effects and an unforgettable atmosphere.",
    date: "2024-06-15",
    time: "20:00",
    venue: "AccorHotels Arena",
    address: "8 Boulevard de Bercy",
    city: "Paris",
    category: "concert",
    totalCapacity: 20000,
    ticketCategories: [
      {
        id: "cat-001",
        name: "Standing Pit",
        price: 89.9,
        availableQuantity: 5000,
        description: "Standing closest to the stage",
      },
      {
        id: "cat-002",
        name: "Seated Stands",
        price: 69.9,
        availableQuantity: 10000,
        description: "Seated places with clear view",
      },
      {
        id: "cat-003",
        name: "VIP",
        price: 149.9,
        availableQuantity: 500,
        description: "VIP access with drinks included",
      },
    ],
  },
  {
    id: "evt-002",
    slug: "rock-en-seine-2024",
    name: "Rock en Seine Festival",
    artist: "Various Artists",
    image: "/events/rock-en-seine.jpg",
    description:
      "The unmissable summer festival with an eclectic lineup: Arctic Monkeys, The 1975, Vampire Weekend and many others. 3 days of music in an exceptional setting.",
    date: "2024-08-23",
    time: "14:00",
    venue: "Domaine National de Saint-Cloud",
    address: "Avenue de la Grille d'Honneur",
    city: "Saint-Cloud",
    category: "festival",
    totalCapacity: 80000,
    ticketCategories: [
      {
        id: "cat-004",
        name: "3-Day Pass",
        price: 199.0,
        availableQuantity: 30000,
        description: "Access to all 3 days of the festival",
      },
      {
        id: "cat-005",
        name: "1-Day Pass",
        price: 79.0,
        availableQuantity: 25000,
        description: "Access for one day",
      },
      {
        id: "cat-006",
        name: "VIP 3-Day",
        price: 349.0,
        availableQuantity: 1000,
        description: "VIP access with privileged area",
      },
    ],
  },
  {
    id: "evt-003",
    slug: "stromae-lille-2024",
    name: "Stromae - Multitude Tour",
    artist: "Stromae",
    image: "/events/stromae-concert.jpg",
    description:
      "Stromae returns to the stage with his album 'Multitude'. A unique performance blending electronic music and urban poetry in a visually stunning show.",
    date: "2024-05-20",
    time: "19:30",
    venue: "Zénith de Lille",
    address: "1 Boulevard des Cités Unies",
    city: "Lille",
    category: "concert",
    totalCapacity: 7000,
    ticketCategories: [
      {
        id: "cat-007",
        name: "Standing Floor",
        price: 75.0,
        availableQuantity: 2000,
        description: "Standing facing the stage",
      },
      {
        id: "cat-008",
        name: "Seated Stands",
        price: 55.0,
        availableQuantity: 4500,
        description: "Numbered seated places",
      },
      {
        id: "cat-009",
        name: "Premium",
        price: 95.0,
        availableQuantity: 500,
        description: "Best seats with premium service",
      },
    ],
  },
  {
    id: "evt-004",
    slug: "moliere-comedie-francaise",
    name: "The Bourgeois Gentleman",
    artist: "Comédie-Française",
    image: "/events/moliere-theater.jpg",
    description:
      "Molière's famous comedy in a modern and refreshing staging. A family show that humorously revisits society's codes.",
    date: "2024-04-10",
    time: "20:30",
    venue: "Comédie-Française",
    address: "Place Colette",
    city: "Paris",
    category: "theater",
    totalCapacity: 862,
    ticketCategories: [
      {
        id: "cat-010",
        name: "Orchestra",
        price: 45.0,
        availableQuantity: 300,
        description: "Best orchestra seats",
      },
      {
        id: "cat-011",
        name: "Balcony",
        price: 35.0,
        availableQuantity: 400,
        description: "Balcony seats",
      },
      {
        id: "cat-012",
        name: "Upper Gallery",
        price: 15.0,
        availableQuantity: 162,
        description: "Upper gallery seats, overhead view",
      },
    ],
  },
  {
    id: "evt-005",
    slug: "psg-marseille-classique",
    name: "PSG vs Olympique de Marseille",
    artist: "Paris Saint-Germain",
    image: "/events/psg-marseille.jpg",
    description:
      "Le Classique! The most anticipated match of the season between Paris and Marseille at Parc des Princes. Electric atmosphere guaranteed for this legendary derby.",
    date: "2024-03-31",
    time: "21:00",
    venue: "Parc des Princes",
    address: "24 Rue du Commandant Guilbaud",
    city: "Paris",
    category: "sport",
    totalCapacity: 47929,
    ticketCategories: [
      {
        id: "cat-013",
        name: "Popular Stand",
        price: 95.0,
        availableQuantity: 15000,
        description: "Guaranteed atmosphere with supporters",
      },
      {
        id: "cat-014",
        name: "Side Stand",
        price: 125.0,
        availableQuantity: 20000,
        description: "Perfect view of the field",
      },
      {
        id: "cat-015",
        name: "VIP Boxes",
        price: 350.0,
        availableQuantity: 500,
        description: "VIP experience with catering",
      },
    ],
  },
  {
    id: "evt-006",
    slug: "gad-elmaleh-spectacle",
    name: "Gad Elmaleh - D'Ailleurs",
    artist: "Gad Elmaleh",
    image: "/events/gad-elmaleh.jpg",
    description:
      "Gad Elmaleh returns with a new hilarious show that mixes his daily observations with his unique humor. A moment of pure entertainment.",
    date: "2024-07-12",
    time: "20:00",
    venue: "L'Olympia",
    address: "28 Boulevard des Capucines",
    city: "Paris",
    category: "comedy",
    totalCapacity: 2000,
    ticketCategories: [
      {
        id: "cat-016",
        name: "Orchestra",
        price: 55.0,
        availableQuantity: 800,
        description: "Orchestra seats",
      },
      {
        id: "cat-017",
        name: "Balcony",
        price: 45.0,
        availableQuantity: 1000,
        description: "Balcony seats",
      },
      {
        id: "cat-018",
        name: "Golden Square",
        price: 75.0,
        availableQuantity: 200,
        description: "Best seats, front row",
      },
    ],
  },
];
