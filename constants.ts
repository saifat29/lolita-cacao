import { Product, Testimonial } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Saffron & Rose Truffle",
    description:
      "A delicate fusion of Kashmiri saffron and fragrant rose petals encased in smooth white chocolate.",
    price: 24.0,
    category: "Truffles",
    image:
      "https://images.unsplash.com/photo-1756318084637-dc4287787745?auto=format&fit=crop&q=80&w=800",
    isBestSeller: true,
  },
  {
    id: "2",
    name: "Dates & Caramel BonBon",
    description:
      "Rich medjool dates blended with artisanal caramel, offering a chewy, luxurious center.",
    price: 28.0,
    category: "BonBons",
    image:
      "https://images.unsplash.com/photo-1682120501920-7ce18b00237a?auto=format&fit=crop&q=80&w=800",
    isNew: true,
  },
  {
    id: "4",
    name: "Cranberry Pistachio Biscotti",
    description:
      "Twice-baked almond orange biscuits with tart cranberries and premium pistachios.",
    price: 18.0,
    category: "Cookies",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    name: "The Signature Gift Box",
    description:
      "A curated selection of our finest truffles, bonbons, and dragees. The ultimate expression of luxury.",
    price: 85.0,
    category: "Gifting",
    image:
      "https://images.unsplash.com/photo-1656821991451-cc43cb996235?auto=format&fit=crop&q=80&w=800",
    isBestSeller: true,
  },
  {
    id: "6",
    name: "Matcha Green Tea Bar",
    description:
      "Ceremonial grade matcha blended with creamy white chocolate for an earthy, sweet balance.",
    price: 16.0,
    category: "Bars",
    image:
      "https://images.unsplash.com/photo-1605713159138-e53c47d62864?auto=format&fit=crop&q=80&w=800",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena R.",
    text: "The Saffron Truffles are unlike anything I've tasted. Nolita Cacao truly understands the art of flavor pairing.",
    role: "Food Critic",
  },
  {
    id: 2,
    name: "James T.",
    text: "I gifted the Signature Box to a client, and they were blown away by the presentation and taste. Exceptional.",
    role: "Corporate Client",
  },
  {
    id: 3,
    name: "Aisha K.",
    text: "The blend of Swiss technique with Indian inspired flavors like 'Kahwa' is genius. My new favorite indulgence.",
    role: "Verified Buyer",
  },
];
