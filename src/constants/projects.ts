export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  mainImage: string;
  gallery: string[];
  stats: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "minimalist-lakeside-villa",
    title: "Minimalist Lakeside Villa",
    category: "Residential Architecture",
    year: "2025",
    location: "Lake Como, Italy",
    description: "A seamless blend of concrete, glass, and nature. This villa was designed to disappear into the landscape while providing panoramic views of the lake. The interior features open-plan living with natural stone finishes and bespoke timber joinery. The property is situated on a sprawling 45-perch lakeside plot, allowing for extensive private gardens and a direct connection to the water's edge. Every architectural detail was meticulously crafted to ensure that the structure complements the natural topography of the site.",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200"
    ],
    stats: [
      { label: "Land Area", value: "45 Perches" },
      { label: "Floor Area", value: "450 sqm" },
      { label: "Construction Time", value: "18 Months" },
      { label: "Sustainability", value: "A++ Rated" }
    ]
  },
  {
    id: "urban-loft-concept",
    title: "Urban Loft Concept",
    category: "Interior Design",
    year: "2024",
    location: "Brooklyn, New York",
    description: "Transforming an industrial warehouse into a warm, sophisticated living space. We preserved the raw brick and steel elements while introducing soft textures and intelligent lighting systems to create a sanctuary in the heart of the city. This 12-perch equivalent urban space maximizes every square inch of its footprint, incorporating mezzanine levels and double-height voids to create a sense of boundless volume within a dense metropolitan context. The project serves as a blueprint for modern adaptive reuse.",
    mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1200"
    ],
    stats: [
      { label: "Footprint", value: "12 Perches" },
      { label: "Ceiling Height", value: "4.5m" },
      { label: "Style", value: "Industrial Chic" },
      { label: "Materials", value: "Exposed Brick" }
    ]
  },
  {
    id: "modern-corporate-hq",
    title: "Modern Corporate HQ",
    category: "Commercial Design",
    year: "2024",
    location: "London, UK",
    description: "A workplace designed for the future of collaboration. This headquarters features flexible zones, biophilic design elements, and state-of-the-art acoustic engineering to foster productivity and well-being. Occupying a significant 80-perch commercial site, the building integrates public plazas with private office wings, creating a porous boundary between the corporate world and the city. The design emphasizes transparency and fluid movement, with a central atrium that serves as the heart of the organization.",
    mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
    ],
    stats: [
      { label: "Site Area", value: "80 Perches" },
      { label: "Capacity", value: "500 Staff" },
      { label: "Green Cert", value: "LEED Gold" },
      { label: "Smart Tech", value: "Fully Integrated" }
    ]
  },
  {
    id: "sustainable-eco-resort",
    title: "Sustainable Eco-Resort",
    category: "Landscape Architecture",
    year: "2023",
    location: "Bali, Indonesia",
    description: "An eco-conscious retreat that prioritizes the preservation of local flora. The structures are built using locally sourced bamboo and recycled materials, powered entirely by renewable energy sources. Set across a massive 1000-perch landscape, the resort is designed as a series of floating pavilions that minimize soil disturbance. The project demonstrates how luxury and sustainability can coexist through thoughtful site planning and a deep respect for the existing ecosystem.",
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
    ],
    stats: [
      { label: "Total Area", value: "1000 Perches" },
      { label: "Energy", value: "100% Solar" },
      { label: "Water", value: "Rain Harvested" }
    ]
  }
];
