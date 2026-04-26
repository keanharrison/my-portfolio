export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  timeframe: string;
  logo?: string;  // path to logo image in /public
  detail: string;
}

export const experience: ExperienceEntry[] = [
  // Row 1
  {
    id: "booz-allen",
    company: "Booz Allen Hamilton",
    role: "Data Scientist",
    timeframe: "Jun 2026 — Aug 2026",
    logo: "/images/552A9912-60EF-4D8A-97C6-1689F6FE8017.jpeg",
    detail: "[Write detailed content here.]",
  },
  {
    id: "anthropic",
    company: "Anthropic",
    role: "Ambassador",
    timeframe: "Aug 2025 — Dec 2025",
    logo: "/images/03F4A074-BFDD-4475-9548-A93E2E7FC389.jpeg",
    detail: "[Write detailed content here.]",
  },
  // Row 2
  {
    id: "uva-darden-ilab",
    company: "UVA Darden i.Lab",
    role: "Co-Founder",
    timeframe: "Jun 2026 — Aug 2026",
    logo: "/images/75E97416-E666-4A51-B934-A1B1D6F48D2F.jpeg",
    detail: "[Write detailed content here.]",
  },
  {
    id: "beats",
    company: "Beats by Dre",
    role: "Product Analyst",
    timeframe: "Mar 2025 — May 2025",
    logo: "/images/6492FEB2-CF0B-4820-8319-D888FBEFACD1.jpeg",
    detail: "[Write detailed content here.]",
  },
  // Row 3
  {
    id: "techne",
    company: "Technē Strategy Group",
    role: "Project Lead (Oracle)",
    timeframe: "Sep 2025 — Present",
    logo: "/images/139A1C6F-FF02-45C0-A403-659293C8AC85_4_5005_c.jpeg",
    detail: "[Write detailed content here.]",
  },
  {
    id: "stealth",
    company: "Stealth Startup",
    role: "Product Manager",
    timeframe: "Jun 2025 — Aug 2025",
    logo: "/images/CCD79712-C8F5-4C70-A8A2-1393B40DED63_4_5005_c.jpeg",
    detail: "[Write detailed content here.]",
  },
  // Row 4
  {
    id: "keanfit",
    company: "KeanFit LLC",
    role: "Founder",
    timeframe: "Aug 2023 — Mar 2025",
    logo: "/images/C7DCBEB9-68A9-4310-A3D2-004A7EC0D2E0_1_201_a.jpeg",
    detail: "[Write detailed content here.]",
  },
  {
    id: "johnson-controls",
    company: "Johnson Controls International",
    role: "Sales Engineer",
    timeframe: "May 2025 — Aug 2025",
    logo: "/images/062AC974-5B70-4B2E-8846-87F3C4C0EBD9.jpeg",
    detail: "[Write detailed content here.]",
  },
];
