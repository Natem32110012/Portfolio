// Edit this file to change facts: stats, jobs, tools, and work.
// Sentences live in src/locales/en.ts (and later src/locales/tr.ts).

export const profile = {
  name: "Seçkin Güneri",
  email: "seckin.guneri@gmail.com",
  emailHref: "mailto:seckin.guneri@gmail.com",
  linkedin: "https://www.linkedin.com/in/seckinguneri/",
  cv: "/cv.pdf",
  certificate: "/google-certificate.png",
  portrait: "/portrait.jpg",
};

export const stats = [
  { id: "years", value: "4" },
  { id: "projects", value: "X+" },
  { id: "games", value: "X+" },
] as const;

export type StatId = (typeof stats)[number]["id"];

export type Credit = {
  id: string;
  name: string;
  logo: string;
};

export const portfolioApps: Credit[] = [
  { id: "clearspace", name: "ClearSpace Storage Cleaner", logo: "/logos/apps/clearspace.jpg" },
  { id: "photic", name: "Photic: AI Photo Generator", logo: "/logos/apps/photic.webp" },
  { id: "quicknote", name: "QuickNote AI", logo: "/logos/apps/quicknote.jpg" },
  { id: "banger", name: "Banger: AI Cover Songs & Music", logo: "/logos/apps/banger.png" },
  { id: "mathsnap", name: "MathSnap: AI Math Solver", logo: "/logos/apps/mathsnap.webp" },
];

export const portfolioGames: Credit[] = [
  { id: "construct-it-3d", name: "Construct It 3D", logo: "/logos/games/construct-it-3d.jpg" },
  { id: "drive-thru-empire", name: "Drive Thru Empire", logo: "/logos/games/drive-thru-empire.jpg" },
  { id: "laundry-manager", name: "Laundry Manager: Wash & Profit", logo: "/logos/games/laundry-manager.jpg" },
  { id: "soulful-serenity", name: "Soulful Serenity", logo: "/logos/games/soulful-serenity.jpg" },
  { id: "pharmacy-manager", name: "Pharmacy Manager Simulator", logo: "/logos/games/pharmacy-manager.jpg" },
  { id: "bank-manager", name: "Bank Manager Simulator 3D", logo: "/logos/games/bank-manager.jpg" },
  { id: "farm-rush", name: "Farm Rush Idle", logo: "/logos/games/farm-rush.jpg" },
  { id: "fashion-store", name: "Fashion Store Simulator", logo: "/logos/games/fashion-store.jpg" },
  { id: "harvest-loop", name: "Harvest Loop 3D", logo: "/logos/games/harvest-loop.jpg" },
  { id: "idle-junkyard", name: "Idle Junkyard: City Builder", logo: "/logos/games/idle-junkyard.jpg" },
  { id: "idle-rent-tower", name: "Idle Rent Tower", logo: "/logos/games/idle-rent-tower.jpg" },
  { id: "cabin-crew", name: "Cabin Crew Simulator", logo: "/logos/games/cabin-crew.jpg" },
];

export const experience = [
  { id: "playablex", logo: "/logos/playablex.jpg" },
  { id: "voyager", logo: "/logos/voyager.jpg" },
  { id: "sevenapps", logo: "/logos/7apps.jpg" },
  { id: "hungri", logo: "/logos/hungri.jpg" },
  { id: "metahorse", logo: "/logos/metahorse.jpg" },
  { id: "limoods", logo: "/logos/limoods.jpg" },
  { id: "okan", logo: "/logos/okan.jpg" },
] as const;

export type ExperienceId = (typeof experience)[number]["id"];

export const tools = [
  { id: "after-effects", name: "After Effects" },
  { id: "illustrator", name: "Illustrator" },
  { id: "photoshop", name: "Photoshop" },
  { id: "capcut", name: "CapCut" },
  { id: "blender", name: "Blender" },
  { id: "cursor", name: "Cursor" },
] as const;

export type ToolId = (typeof tools)[number]["id"];

export const hobbies = [
  { id: "music" },
  { id: "sports" },
  { id: "games" },
  { id: "vibe-coding" },
] as const;

export type HobbyId = (typeof hobbies)[number]["id"];

export const categories = ["ai", "app", "game", "ugc", "assets"] as const;

export type Category = (typeof categories)[number];
export type FilterId = Category | "all";
export type WorkSize = "story" | "wide" | "square";

export const aiWorkIds = [
  "ai-01",
  "ai-02",
  "ai-03",
  "ai-04",
  "ai-05",
  "ai-06",
  "ai-07",
  "ai-08",
  "ai-09",
  "ai-10",
  "ai-11",
] as const;

export const assetWorkIds = [
  "asset-switch",
  "asset-cash",
  "asset-character",
  "asset-safe",
  "asset-headphones",
  "asset-watch",
  "asset-phone",
  "asset-necklace",
  "asset-cart",
] as const;

export const workIds = [...aiWorkIds, ...assetWorkIds] as const;

export type WorkId = (typeof workIds)[number];

export type WorkItem = {
  id: WorkId;
  category: Category;
  size: WorkSize;
  format: string;
  poster: string;
  youtube?: string;
  video?: string;
  playable?: string;
  featured?: boolean;
};

const aiVideos = [
  "wpz0RvQfgoc",
  "jvoIlPoe8sU",
  "dthqai7Db7E",
  "d5lEg1zUcQs",
  "KVZyxcSe7oo",
  "fK4dhMifOGg",
  "Tyt-7PVyPmE",
  "1Bf1znVLC-s",
  "zgYufsLLPUk",
  "4WjhjX9JT44",
  "7mz46gdnnDw",
] as const;

const assets = [
  { id: "asset-switch", poster: "/work/assets/switch.jpg" },
  { id: "asset-cash", poster: "/work/assets/cash.jpg" },
  { id: "asset-character", poster: "/work/assets/character.jpg" },
  { id: "asset-safe", poster: "/work/assets/safe.jpg" },
  { id: "asset-headphones", poster: "/work/assets/headphones.jpg" },
  { id: "asset-watch", poster: "/work/assets/watch.jpg" },
  { id: "asset-phone", poster: "/work/assets/phone.jpg" },
  { id: "asset-necklace", poster: "/work/assets/necklace.jpg" },
  { id: "asset-cart", poster: "/work/assets/cart.jpg" },
] as const;

export const workItems: WorkItem[] = [
  ...aiWorkIds.map((id, index) => ({
    id,
    category: "ai" as const,
    size: "story" as const,
    format: "9:16",
    poster: `https://i.ytimg.com/vi/${aiVideos[index]}/maxresdefault.jpg`,
    youtube: aiVideos[index],
    featured: index < 10,
  })),
  ...assets.map((item) => ({
    id: item.id,
    category: "assets" as const,
    size: "wide" as const,
    format: "16:9",
    poster: item.poster,
  })),
];

export const featuredWork = workItems.filter((item) => item.featured);

export function worksByFilter(filter: FilterId) {
  if (filter === "all") return workItems.filter((item) => item.category !== "assets");
  return workItems.filter((item) => item.category === filter);
}
