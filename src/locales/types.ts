import type { Category, ExperienceId, HobbyId, StatId, WorkId } from "@/content/site";

export type Locale = "en" | "tr";

export type WorkCopy = {
  title: string;
  caption: string;
  role: string;
  result: string;
  alt: string;
};

export type Dictionary = {
  meta: { title: string; description: string };
  header: { work: string; language: string; skip: string };
  hero: {
    role: string;
    location: string;
    positioning: string;
    status: string;
    explore: string;
    viewAll: string;
    portraitLabel: string;
  };
  about: {
    heading: string;
    paragraphs: { text: string; strong?: boolean }[][];
  };
  contact: { linkedin: string; cv: string };
  stats: Record<StatId, string>;
  experience: {
    heading: string;
    items: Record<
      ExperienceId,
      {
        company: string;
        meta: string;
        summary: string;
        roles: { title: string; period: string }[];
      }
    >;
  };
  tools: { heading: string; more: string };
  hobbies: { heading: string; items: Record<HobbyId, string> };
  work: {
    eyebrow: string;
    heading: string;
    intro: string;
    all: string;
    filterLabel: string;
    showing: string;
    empty: string;
    close: string;
    previous: string;
    next: string;
    role: string;
    result: string;
    openPlayable: string;
    hint: string;
    categories: Record<Category, string>;
    items: Record<WorkId, WorkCopy>;
  };
  footer: { heading: string; line: string; note: string };
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends string
    ? string
    : T[K] extends Record<string, unknown>
      ? DeepPartial<T[K]>
      : T[K];
};
