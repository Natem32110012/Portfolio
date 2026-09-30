import { aiWorkIds, type WorkId } from "@/content/site";
import type { Dictionary, WorkCopy } from "@/locales/types";

const en = {
  meta: {
    title: "Seçkin Güneri — Marketing Artist",
    description:
      "Performance-driven UA creatives for mobile games. Video ads, playable ads, static banners, store visuals, and motion graphics. Based in Istanbul.",
  },
  header: {
    work: "Work",
    language: "Language",
    skip: "Skip to content",
  },
  hero: {
    role: "Marketing Artist",
    location: "Istanbul",
    positioning: "Performance-driven UA creatives for mobile games & non-gaming",
    status: "Open to new opportunities",
    explore: "Explore my work",
    viewAll: "View all",
    portraitLabel: "Portrait",
  },
  about: {
    heading: "About",
    paragraphs: [
      [
        {
          text: "I’m a Graphic Design graduate from Okan University. I started my career as a freelance designer, working across different industries before moving into the NFT Gaming space, where I gained experience as a Community Manager and Artist.",
        },
      ],
      [
        { text: "I later joined " },
        { text: "7Apps", strong: true },
        {
          text: " as a Marketing Artist in the mobile app industry and progressed into a Jr. Marketing Specialist role. During this time, I played a role in taking our app ",
        },
        { text: "Banger: AI Cover Songs & Music", strong: true },
        { text: " to " },
        { text: "#5 in the US App Store Music category", strong: true },
        { text: "." },
      ],
      [
        { text: "I then spent two years at " },
        { text: "Voyager", strong: true },
        {
          text: ", creating a wide range of performance-driven advertising creatives for mobile games across different genres. Most recently, I worked at ",
        },
        { text: "PlayableX", strong: true },
        {
          text: ", focusing on AI-powered video production and developing creative concepts for various game genres.",
        },
      ],
      [
        { text: "I enjoy combining " },
        { text: "design, marketing, and AI", strong: true },
        {
          text: " to create creative work that delivers results. I’m driven by curiosity, continuous learning, and experimenting with new ideas and technologies.",
        },
      ],
    ],
  },
  contact: {
    linkedin: "LinkedIn",
    cv: "Download CV",
    certificate: "Google Certificate",
    certificateCaption: "Fundamentals of Digital Marketing · Google Digital Workshop · 2022",
    certificateAlt: "Google Digital Workshop certificate for Seçkin Güneri",
  },
  stats: {
    years: "Experience years",
    projects: "Apps I worked on",
    games: "Games I worked on",
  },
  experience: {
    heading: "Experience",
    items: {
      playablex: {
        company: "PlayableX",
        meta: "Full-time",
        summary: "Mobile game UA creatives.",
        roles: [{ title: "Marketing Artist", period: "May 2026 – Sep 2026" }],
      },
      voyager: {
        company: "Voyager",
        meta: "Full-time",
        summary: "Growing and publishing gaming and non-gaming apps.",
        roles: [{ title: "Marketing Artist", period: "Aug 2024 – Apr 2026" }],
      },
      sevenapps: {
        company: "7apps",
        meta: "Jan 2023 – Mar 2024 · Full-time · Hybrid · Istanbul",
        summary: "",
        roles: [
          { title: "Jr. Marketing Specialist", period: "Sep 2023 – Mar 2024" },
          { title: "Jr. Marketing Artist", period: "Jan 2023 – Mar 2024" },
        ],
      },
      hungri: {
        company: "Hungri Games",
        meta: "Full-time · Istanbul",
        summary: "",
        roles: [{ title: "NFT Gaming Community and Social Media Manager", period: "Mar 2022 – Sep 2022" }],
      },
      metahorse: {
        company: "Metahorse Unity",
        meta: "Full-time · Istanbul",
        summary: "",
        roles: [
          { title: "NFT Gaming Community and Social Media Manager & Designer", period: "Mar 2022 – Sep 2022" },
        ],
      },
      limoods: {
        company: "Limood's",
        meta: "Freelance · Istanbul",
        summary: "",
        roles: [{ title: "Community and Social Media Manager & Designer", period: "May 2021 – Nov 2021" }],
      },
      okan: {
        company: "Istanbul Okan University",
        meta: "Part-time · Istanbul",
        summary: "",
        roles: [{ title: "Graphic Design Intern", period: "Jul 2020 – Oct 2020" }],
      },
    },
  },
  tools: {
    heading: "Apps I use",
    more: "and more",
  },
  hobbies: {
    heading: "Hobbies",
    items: {
      music: "Music",
      sports: "Sports",
      games: "Playing games",
      "vibe-coding": "Vibe coding",
    },
  },
  work: {
    eyebrow: "Selected work",
    heading: "Work",
    intro: "AI video, app, mobile game, UGC, and 3D.",
    all: "All",
    filterLabel: "Filter work",
    showing: "{count} pieces",
    empty: "Nothing in this category yet.",
    close: "Close",
    previous: "Previous",
    next: "Next",
    role: "Role",
    result: "Result",
    openPlayable: "Open playable",
    hint: "Arrow keys move between pieces. Esc closes.",
    categories: {
      ai: "AI Video Creatives",
      app: "App Creatives",
      game: "Mobile Game Creatives",
      ugc: "UGC Creatives",
      assets: "3D Assets",
    },
    items: {
      ...Object.fromEntries(
        aiWorkIds.map((id, index) => {
          const title = `${String(index + 1).padStart(2, "0")}-Creative`;
          const copy: WorkCopy = {
            title,
            caption: "AI video creative.",
            role: "Marketing Artist",
            result: "",
            alt: title,
          };
          return [id, copy];
        }),
      ),
      "asset-switch": {
        title: "Toggle Switch",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D toggle switch",
      },
      "asset-cash": {
        title: "Cash Stack",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D cash stack",
      },
      "asset-character": {
        title: "Character",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D character",
      },
      "asset-safe": {
        title: "Safe",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D safe",
      },
      "asset-headphones": {
        title: "Headphones",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D headphones",
      },
      "asset-watch": {
        title: "Watch",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D watch",
      },
      "asset-phone": {
        title: "Phone",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D phone",
      },
      "asset-necklace": {
        title: "Necklace",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D necklace",
      },
      "asset-cart": {
        title: "Shopping Cart",
        caption: "3D asset.",
        role: "Marketing Artist",
        result: "",
        alt: "3D shopping cart",
      },
    } as Record<WorkId, WorkCopy>,
  },
  footer: {
    heading: "Let's work together",
    line: "Open to new opportunities with mobile game studios and UA teams.",
    note: "Marketing Artist · Istanbul",
  },
} satisfies Dictionary;

export default en;
