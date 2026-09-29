import en from "@/locales/en";
import { mergeDictionary } from "@/locales/merge";
import tr from "@/locales/tr";
import type { Dictionary, Locale } from "@/locales/types";

export type { Dictionary, Locale };

export function getDictionary(locale: Locale): Dictionary {
  if (locale === "tr") return mergeDictionary(en, tr);
  return en;
}
