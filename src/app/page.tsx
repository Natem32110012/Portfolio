import { Site } from "@/components/site";
import { getLocale } from "@/lib/locale";

export default async function Home() {
  const locale = await getLocale();
  return <Site initialLocale={locale} />;
}
