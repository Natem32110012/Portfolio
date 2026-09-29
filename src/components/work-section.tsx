"use client";

import {
  categories,
  worksByFilter,
  type FilterId,
  type WorkId,
} from "@/content/site";
import type { Dictionary } from "@/locales";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const ease = [0.2, 0.8, 0.2, 1] as const;

type Props = {
  t: Dictionary;
  filter: FilterId;
  onFilter: (filter: FilterId) => void;
  onOpen: (id: WorkId) => void;
};

export function WorkSection({ t, filter, onFilter, onOpen }: Props) {
  const reduce = useReducedMotion();
  const items = worksByFilter(filter);
  const filters: FilterId[] = ["all", ...categories];

  return (
    <section id="work" className="work" aria-labelledby="work-heading">
      <div className="work-bar">
        <div>
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2 id="work-heading">{t.work.heading}</h2>
        </div>
        <LayoutGroup>
          <div className="filters" role="toolbar" aria-label={t.work.filterLabel}>
            {filters.map((id) => {
              const selected = filter === id;
              const label = id === "all" ? t.work.all : t.work.categories[id];
              return (
                <button
                  key={id}
                  type="button"
                  className="filter"
                  aria-pressed={selected}
                  onClick={() => onFilter(id)}
                >
                  {selected ? (
                    reduce ? (
                      <span className="filter-bg" />
                    ) : (
                      <motion.span layoutId="filter-bg" className="filter-bg" transition={{ duration: 0.22, ease }} />
                    )
                  ) : null}
                  <span className="filter-label">{label}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>
      </div>

      <p className="sr-only" aria-live="polite">
        {t.work.showing.replace("{count}", String(items.length))}
      </p>

      {items.length === 0 ? (
        <p className="empty">{t.work.empty}</p>
      ) : (
        <motion.div className="work-grid" layout>
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((item) => (
              <Tile
                key={item.id}
                id={item.id}
                poster={item.poster}
                video={item.video}
                youtube={item.youtube}
                size={item.size}
                label={t.work.items[item.id].title}
                reduce={Boolean(reduce)}
                onOpen={() => onOpen(item.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}

function Tile({
  id,
  poster,
  video,
  youtube,
  size,
  label,
  reduce,
  onOpen,
}: {
  id: WorkId;
  poster: string;
  video?: string;
  youtube?: string;
  size: string;
  label: string;
  reduce: boolean;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);
  const [inView, setInView] = useState(false);
  const [coarse, setCoarse] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: none)");
    const update = () => setCoarse(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !video) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.6),
      { threshold: [0, 0.6, 1] },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [video]);

  const play = Boolean(video) && !reduce && (coarse ? inView : hover);
  const preview = Boolean(youtube) && hover && !coarse && !reduce;

  useEffect(() => {
    setFrameReady(false);
  }, [preview, youtube]);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !video) return;
    if (play) {
      if (!node.getAttribute("src")) node.src = video;
      node.play().catch(() => undefined);
      return;
    }
    if (node.getAttribute("src")) {
      node.pause();
      node.removeAttribute("src");
      node.load();
    }
  }, [play, video]);

  return (
    <motion.button
      ref={ref}
      layout
      type="button"
      className={`tile size-${size}`}
      aria-label={label}
      onClick={onOpen}
      onPointerUp={(event) => {
        if (event.pointerType === "mouse") return;
        onOpen();
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      initial={reduce ? false : { opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
      transition={reduce ? { duration: 0 } : { duration: 0.22, ease }}
      data-id={id}
    >
      {video ? (
        <video ref={videoRef} poster={poster} muted loop playsInline preload="none" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" loading="lazy" decoding="async" />
      )}
      {preview && youtube ? (
        <iframe
          title={label}
          src={`https://www.youtube-nocookie.com/embed/${youtube}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${youtube}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          tabIndex={-1}
          onLoad={() => setFrameReady(true)}
          style={{ opacity: frameReady ? 1 : 0 }}
        />
      ) : null}
    </motion.button>
  );
}
