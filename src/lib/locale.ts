import { cookies } from "next/headers";
import type { Locale } from "@/locales";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  return jar.get("locale")?.value === "tr" ? "tr" : "en";
}

export function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
