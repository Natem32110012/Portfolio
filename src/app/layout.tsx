import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { getLocale, siteUrl } from "@/lib/locale";
import { getDictionary } from "@/locales";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl()),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: "Seçkin Güneri",
    authors: [{ name: "Seçkin Güneri" }],
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0B0E13",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
