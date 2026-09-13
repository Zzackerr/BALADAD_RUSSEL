export interface AttractionItem {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
}

export interface AttractionCategory {
  id: string;
  name: string;
  items: AttractionItem[];
}

export const pangasinanCategories: AttractionCategory[] = [
  {
    id: "islands",
    name: "Islands",
    items: [
      {
        id: "hundred-islands",
        title: "Hundred Islands National Park",
        location: "Alaminos City",
        description: "A cluster of over a hundred limestone islands scattered across the Lingayen Gulf, famous for island hopping and snorkeling.",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "gov-island",
        title: "Governor's Island Viewdeck",
        location: "Alaminos City",
        description: "The most famous viewpoint within the Hundred Islands offering a breathtaking panoramic view of the scattered islets.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "telbang-islet",
        title: "Telbang Islet Sanctuary",
        location: "Alaminos City",
        description: "A serene ecological spot featuring tranquil coastal waters and thriving marine biodiversity.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800",
      }
    ],
  },
  {
    id: "coast",
    name: "Coast",
    items: [
      {
        id: "patar-beach",
        title: "Patar Beach",
        location: "Bolinao",
        description: "Renowned for its golden white sand, clear turquoise waters, and magnificent sunset views over the West Philippine Sea.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "bolinao-lighthouse",
        title: "Cape Bolinao Lighthouse",
        location: "Bolinao",
        description: "A historic towering structure built on Punta Piedra, standing guard over the rocky coastal cliffs since the American colonial era.",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "tambobong-beach",
        title: "Tambobong Beach",
        location: "Anda",
        description: "A gorgeous powdery white sand beach serving as the jump-off point for pristine sandbars and diving spots.",
        image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800",
      }
    ],
  },
  {
    id: "springs",
    name: "Springs",
    items: [
      {
        id: "mira-hills",
        title: "Springs and Nature Parks",
        location: "Pangasinan",
        description: "Refresh yourself in local natural freshwater pools hidden amidst lush tropical landscapes.",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "enchanted-cave",
        title: "Enchanted Cave",
        location: "Bolinao",
        description: "A mesmerizing underground coral rock cave containing crystal-clear natural freshwater pool streams perfect for swimming.",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "ungan-spring",
        title: "ungan Spring Resort",
        location: "Anda",
        description: "A relaxing natural spring spot mixing fresh inland currents with coastal views.",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=800",
      }
    ],
  },
  {
    id: "pilgrimage",
    name: "Pilgrimage",
    items: [
      {
        id: "manaoag-church",
        title: "Minor Basilica of Our Lady of Manaoag",
        location: "Manaoag",
        description: "A premier Roman Catholic pilgrimage center visited by millions of devotees for its miraculous image of the Blessed Virgin Mary.",
        image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "bolinao-church",
        title: "St. James the Great Parish Church",
        location: "Bolinao",
        description: "A majestic 400-year-old fortress-like church built completely out of dark coral stone blocks during the Spanish era.",
        image: "https://images.unsplash.com/photo-1543968996-ee822b8176ba?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "calasiao-church",
        title: "Sts. Peter and Paul Parish Church",
        location: "Calasiao",
        description: "A prominent cultural heritage landmark featuring a massive brick structure and one of the oldest standing bell towers in the province.",
        image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=800",
      }
    ],
  },
];