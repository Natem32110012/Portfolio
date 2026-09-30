// Edit this file to change facts: stats, jobs, tools, and work.
// Sentences live in src/locales/en.ts (and later src/locales/tr.ts).

export const profile = {
  name: "Seçkin Güneri",
  email: "seckin.guneri@gmail.com",
  emailHref: "mailto:seckin.guneri@gmail.com",
  linkedin: "https://www.linkedin.com/in/seckinguneri/",
  cv: "/Seckin-Guneri-Marketing-Artist-CV.pdf",
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

export const appWorkIds = [
  "app-01",
  "app-02",
  "app-03",
  "app-04",
  "app-05",
  "app-06",
  "app-07",
  "app-08",
] as const;

export const gameWorkIds = [
  "game-01",
  "game-02",
  "game-03",
  "game-04",
  "game-05",
  "game-06",
  "game-07",
  "game-08",
  "game-09",
  "game-10",
  "game-11",
  "game-12",
  "game-13",
  "game-14",
  "game-15",
  "game-16",
  "game-17",
  "game-18",
  "game-19",
  "game-20",
  "game-21",
  "game-22",
  "game-23",
  "game-24",
  "game-25",
  "game-26",
  "game-27",
  "game-28",
  "game-29",
  "game-30",
  "game-31",
  "game-32",
] as const;

export const ugcWorkIds = [
  "ugc-01",
  "ugc-02",
  "ugc-03",
  "ugc-04",
  "ugc-05",
  "ugc-06",
  "ugc-07",
  "ugc-08",
  "ugc-09",
  "ugc-10",
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

export const workIds = [...aiWorkIds, ...appWorkIds, ...gameWorkIds, ...ugcWorkIds, ...assetWorkIds] as const;

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

const appVideos = [
  "CySTDwTUc94",
  "QUQXCXROH2s",
  "koGwQ1MvDpI",
  "i13o2NaOJVE",
  "DSqhBOH1o8g",
  "3HpjipD8QoI",
  "VmKcHVCM4X8",
  "CknY5nY24PY",
] as const;

const gameVideos = [
  "-C8rbBUN0mA",
  "XqwYuFKyUvE",
  "qCu3DrW2a5c",
  "jeHuImbUQfo",
  "LFPAdbIFzzw",
  "QcssdHH0tyY",
  "9Mn9eyMkx4c",
  "uH1Ho7CjP-Y",
  "UXzES46CG1s",
  "ttH2jnfUdqU",
  "OqDCr0FLP8o",
  "NZaWTs3Sn6w",
  "sqOAVXFZDCY",
  "2UbIXJohh18",
  "Nw69IafymlE",
  "xgm4EXgUr_I",
  "-JIgU4jxP7U",
  "vyDDb8mjNJk",
  "XObXLEjWpio",
  "yls1bCThIoA",
  "qxl8OUmFL1c",
  "ULVq2E4k2is",
  "tT3y7pzSdes",
  "WNVkax6kHtY",
  "78NtkS44Skw",
  "LAwEpQTZPkI",
  "dncEmUoAaK8",
  "Nx4JHbs5Clw",
  "fMAlB1w4sFc",
  "d8oxfmK0kyQ",
  "MBcI7neKnK4",
  "fMnjTRleslM",
] as const;

const ugcVideos = [
  "Atlvfyjl0WQ",
  "Xl3sskNgqzQ",
  "wP944Y_bzDs",
  "sjD3jJMnpoA",
  "yf04_PjzU-4",
  "sp9-tlnca_g",
  "pg_m_liXErY",
  "IQ5fT6B300I",
  "Ut1JLG_SpAo",
  "HDK6bfGiR0g",
] as const;

function youtubeStories<T extends WorkId>(ids: readonly T[], videos: readonly string[], category: Category): WorkItem[] {
  return ids.map((id, index) => ({
    id,
    category,
    size: "story" as const,
    format: "9:16",
    poster: `https://i.ytimg.com/vi/${videos[index]}/maxresdefault.jpg`,
    youtube: videos[index],
  }));
}

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
  ...youtubeStories(appWorkIds, appVideos, "app"),
  ...youtubeStories(gameWorkIds, gameVideos, "game"),
  ...youtubeStories(ugcWorkIds, ugcVideos, "ugc"),
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
