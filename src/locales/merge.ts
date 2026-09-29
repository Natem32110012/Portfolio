import type { DeepPartial, Dictionary } from "@/locales/types";

function merge(base: unknown, override: unknown): unknown {
  if (override === undefined) return base;
  if (typeof base !== "object" || base === null || typeof override !== "object" || override === null) {
    return override;
  }
  if (Array.isArray(base) || Array.isArray(override)) return override;

  const output: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const key of Object.keys(override as Record<string, unknown>)) {
    output[key] = merge(
      (base as Record<string, unknown>)[key],
      (override as Record<string, unknown>)[key],
    );
  }
  return output;
}

export function mergeDictionary(base: Dictionary, override: DeepPartial<Dictionary>): Dictionary {
  return merge(base, override) as Dictionary;
}
