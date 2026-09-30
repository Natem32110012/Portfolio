"use client";

import { ContactLinks } from "@/components/contact-links";
import { Hero } from "@/components/hero";
import { Lightbox } from "@/components/lightbox";
import { WorkSection } from "@/components/work-section";
import { profile, worksByFilter, type Category, type FilterId, type WorkId } from "@/content/site";
import { showModal } from "@/lib/dialog";
import { getDictionary, type Locale } from "@/locales";
import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

export function Site({ initialLocale }: { initialLocale: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [filter, setFilter] = useState<FilterId>("all");
  const [activeId, setActiveId] = useState<WorkId | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const t = getDictionary(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t.meta.description);
  }, [locale, t.meta.description, t.meta.title]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    document.cookie = `locale=${next};path=/;max-age=31536000;SameSite=Lax`;
  }

  const explore = useCallback((category?: Category) => {
    setFilter(category ?? "all");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("work")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }, []);

  const openWork = useCallback((id: WorkId, resetFilter = false) => {
    flushSync(() => {
      if (resetFilter) setFilter("all");
      setActiveId(id);
    });
    showModal("dialog.lb");
  }, []);

  const close = useCallback(() => setActiveId(null), []);

  const step = useCallback(
    (direction: 1 | -1) => {
      const items = worksByFilter(filter);
      if (!activeId || items.length === 0) return;
      const index = items.findIndex((item) => item.id === activeId);
      const next = (index + direction + items.length) % items.length;
      setActiveId(items[next].id);
    },
    [activeId, filter],
  );

  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#content">
        {t.header.skip}
      </a>
      <div className="shell">
        <div className="fold" id="top">
          <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
            <div className="top-actions">
              <a className="nav-link" href="#work" onClick={(event) => {
                event.preventDefault();
                explore();
              }}>
                {t.header.work}
              </a>
              <div className="lang" role="group" aria-label={t.header.language}>
                <button type="button" lang="en" aria-pressed={locale === "en"} onClick={() => setLocale("en")}>
                  EN
                </button>
                <button type="button" lang="tr" aria-pressed={locale === "tr"} onClick={() => setLocale("tr")}>
                  TR
                </button>
              </div>
            </div>
          </header>
          <main id="content">
            <Hero
              t={t}
              onExplore={explore}
              onOpen={(id) => openWork(id, true)}
            />
          </main>
        </div>
        <WorkSection t={t} filter={filter} onFilter={setFilter} onOpen={openWork} />
        <footer className="footer">
          <p className="eyebrow">{t.hero.status}</p>
          <h2>{t.footer.heading}</h2>
          <p className="footer-line">{t.footer.line}</p>
          <ContactLinks t={t} />
          <p className="fine">
            © {year} {profile.name}. {t.footer.note}
          </p>
        </footer>
      </div>
      <div className="viewport-frame" aria-hidden="true" />
      <Lightbox t={t} activeId={activeId} filter={filter} onClose={close} onStep={step} />
    </>
  );
}
