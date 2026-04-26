export interface InterestEntry {
  id: string;
  caption: string;
  image?: string;
  alt?: string;
}

export const interests: InterestEntry[] = [
  {
    id: "content",
    caption: "Creating content",
    image: "/E1637D65-1214-4204-B2AB-C58BD8453EBD_1_105_c.jpeg",
    alt: "Creating content",
  },
  {
    id: "drawing",
    caption: "Drawing",
    image: "/A1EC656C-8F64-4068-B151-D8EE1A4E58F0_1_105_c.jpeg",
    alt: "Drawing",
  },
  {
    id: "adventure",
    caption: "Adventure & Novelty",
    image: "/A104FD38-CF42-428C-AF93-E5581B071E05_1_105_c.jpeg",
    alt: "Adventure & Novelty",
  },
  {
    id: "hiking",
    caption: "Hiking",
    image: "/55829C49-ABB9-4029-AE96-4418A5BE5178_1_105_c.jpeg",
    alt: "Hiking",
  },
];
