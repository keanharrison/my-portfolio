export interface Project {
  slug: string;
  title: string;
  timeframe: string;
  githubUrl?: string;
  externalUrl?: string;  // if set, card links here instead of /projects/[slug]
  image?: string;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: "infino",
    title: "Infino",
    timeframe: "Feb 2026 — Present",
    image: "/images/60A29089-09B4-4F45-B4BE-B94EE4C39052.png",
  },
  {
    slug: "bidpilot",
    title: "BidPilot",
    timeframe: "Apr 2026 — Present",
    image: "/images/1DE12B18-9B33-4E8F-9BB0-DB469689D40D.png",
  },
  {
    slug: "hydra",
    title: "Hydra",
    timeframe: "Nov 2025 — Feb 2026",
    githubUrl: "https://github.com/airferg/Hydra",
    image: "/images/379A85BB-3A8D-4C0E-B658-CC23EF24FD09_1_105_c.jpeg",
  },
  {
    slug: "chatgpt-teardown",
    title: "ChatGPT Teardown",
    timeframe: "Mar 2025",
    externalUrl: "https://drive.google.com/file/d/1DBMw5Lw3Iq-E0Xdfyy_IeSBTXtqtio3o/view?usp=sharing",
    image: "/images/29482061-F3AC-48C9-9E25-08259D315062.jpeg",
  },
];
