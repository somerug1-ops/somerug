export interface WorkExample {
  src: string;
  alt: string;
  title: string;
}

export interface ServiceItem {
  title: string;
  body: string;
  points: string[];
  workExamples?: WorkExample[];
}

export const site = {
  name: "SOMERUG",
  tagline: "Developer for hire.",
  domain: "somerug.vercel.app",
  year: "2026",
  handle: "@somerug",
  url: "https://somerug.vercel.app",
  description:
    "I build game systems, internal tools, and web products that hold up under real players and real traffic.",
  cta: "Start a project",
  nav: [
    { id: "services", label: "Services" },
    { id: "profile", label: "Profile" },
  ],
  profile: {
    heading: "I build the part that has to survive contact with users.",
    body: [
      "Most of my work starts the same way. Someone has a system that half works, a player count going up faster than the code can take, and nobody left who remembers why it was written this way. I read it, find the boundary where it actually breaks, and rebuild that boundary properly instead of stacking another patch on it.",
      "The work I hand back is usually smaller than what was asked for and does more of the job. It arrives documented and tested, so the next person who opens it is not forced to call me to understand it.",
    ],
    facts: [
      { label: "Focus", value: "Discord bots & websites" },
      { label: "Timezone", value: "UTC, flexible overlap" },
      { label: "Engagements", value: "Project based or retained" },
      { label: "Reply time", value: "Within 24 hours" },
    ],
  },
  services: {
    eyebrow: "Services",
    heading: "Things worth hiring me for.",
    items: [
      {
        title: "Discord bots",
        body: "Custom utility, ticket, and economy bots built with Node and TypeScript. Fast command execution, reliable state, and clean rate limit handling.",
        points: [
          "Scalable slash command architecture",
          "Persistent state and database integration",
          "Robust error handling and rate limiting",
          "Zero-downtime deployment pipelines",
        ],
        workExamples: [
          {
            src: "/work/22.png",
            alt: "Support ticket embed with interactive buttons",
            title: "Support ticket embed",
          },
          {
            src: "/work/32.png",
            alt: "Customer support panel",
            title: "Customer support panel",
          },
        ],
      },
      {
        title: "API & Data systems",
        body: "Hooking up external APIs, live data streams, and database lookups to Discord bots and web tools. Querying player stats, handling high request volumes with in-memory caching, and rendering dynamic 3D assets on the fly.",
        points: [
          "Third-party REST API integrations",
          "Live player lookup and 3D skin rendering",
          "Fast database queries and item recipe search",
          "In-memory caching under high concurrency",
        ],
        workExamples: [
          {
            src: "/work/image.png",
            alt: "Live player stats lookup and 3D profile render",
            title: "Player stats & 3D render",
          },
          {
            src: "/work/image1.png",
            alt: "Item recipe and crafting database lookup",
            title: "Game data & recipe search",
          },
        ],
      },
      {
        title: "Web products",
        body: "Next.js applications from an empty repository to a domain that stays up, typed end to end.",
        points: [
          "Auth, payments, database",
          "Deploys, previews, monitoring",
        ],
      },
      {
        title: "Rescue work",
        body: "Code you inherited and cannot read. I audit it, tell you plainly what is wrong, and fix what is worth fixing.",
        points: [
          "Findings ranked by what breaks first",
          "Targeted repair, not a rewrite",
        ],
      },
    ] as ServiceItem[],
  },
  work: {
    heading: "Shipped and still running.",
    projects: [
      {
        name: "Orbital Economy",
        year: "2025",
        body: "Currency, shop, and inventory for a Roblox experience that outgrew its original code. Every transaction is settled server side, and the duplication exploit it launched with has not come back.",
        tags: ["Luau", "Persistence", "Server authority"],
        href: "",
        image: "/img/limb.jpg",
      },
      {
        name: "Telemetry",
        year: "2025",
        body: "Analytics over a live event stream. Aggregation stays on the server, so the browser only ever receives what it can actually draw, and the dashboard stops dying at month end.",
        tags: ["Next.js", "TypeScript", "Postgres"],
        href: "",
        image: "/img/grid.jpg",
      },
      {
        name: "Warden",
        year: "2024",
        body: "Middleware for remote events. It checks type, ownership, and rate on every call, then reports what it rejected, so you can watch someone probe you in real time.",
        tags: ["Luau", "Security", "Open source"],
        href: "",
        image: "/img/orbit-wide.jpg",
      },
      {
        name: "Groundstation",
        year: "2024",
        body: "Internal tooling for a small studio. Build pipeline, asset review queue, and release notes written from the commits, which took their release day down to an afternoon.",
        tags: ["Node", "CI/CD", "Tooling"],
        href: "",
        image: "/img/terminator.jpg",
      },
    ],
  },
  stack: [
    "TypeScript",
    "Luau",
    "Next.js",
    "React",
    "Node",
    "Python",
    "Postgres",
    "Redis",
    "Prisma",
    "Tailwind",
    "Vercel",
    "Docker",
    "GitHub Actions",
    "Roblox Studio",
  ],
  contact: {
    eyebrow: "Contact",
    heading: "Tell me what you are building.",
    body: "Say what it is and where it is stuck. If it is a fit I will say so, and if it is not I will point you at someone better suited.",
    discord: "somerug",
    discordInvite: "",
  },
  socials: [
    { label: "GitHub", href: "https://github.com/somerug1-ops" },
  ],
};
