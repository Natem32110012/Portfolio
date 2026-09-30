"use client";

import { worksByFilter, type FilterId, type WorkId } from "@/content/site";
import type { Dictionary } from "@/locales";
import { useEffect, useId, useRef, type MouseEvent } from "react";

type Props = {
  t: Dictionary;
  activeId: WorkId | null;
  filter: FilterId;
  onClose: () => void;
  onStep: (direction: 1 | -1) => void;
};

export function Lightbox({ t, activeId, filter, onClose, onStep }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const openedAt = useRef(0);
  const titleId = useId();
  const items = worksByFilter(filter);
  const index = items.findIndex((item) => item.id === activeId);
  const item = index >= 0 ? items[index] : undefined;
  const copy = item ? t.work.items[item.id] : undefined;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeId) {
      openedAt.current = Number(dialog.dataset.opened || Date.now());
      if (!dialog.open) {
        dialog.dataset.opened = String(openedAt.current);
        dialog.showModal();
      }
    } else if (dialog.open) dialog.close();
  }, [activeId]);

  useEffect(() => {
    if (activeId && !wasOpen.current) closeRef.current?.focus();
    wasOpen.current = Boolean(activeId);
  }, [activeId]);

  useEffect(() => {
    if (!activeId) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onStep(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onStep(-1);
      }
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeId, onClose, onStep]);

  function onDialogClick(event: MouseEvent<HTMLDialogElement>) {
    const opened = Number(event.currentTarget.dataset.opened || openedAt.current || 0);
    if (Date.now() - opened < 700) return;
    if (event.target !== event.currentTarget) return;
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="lb"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={onDialogClick}
    >
      {item && copy ? (
        <div className="lb-body">
          <div className="lb-media">
            {item.youtube ? (
              <iframe
                key={item.id}
                src={`https://www.youtube-nocookie.com/embed/${item.youtube}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={copy.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : item.video ? (
              <video src={item.video} poster={item.poster} controls playsInline autoPlay muted loop />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.poster} alt={copy.alt} />
            )}
            <button type="button" className="lb-nav lb-prev" onClick={() => onStep(-1)} aria-label={t.work.previous}>
              ←
            </button>
            <button type="button" className="lb-nav lb-next" onClick={() => onStep(1)} aria-label={t.work.next}>
              →
            </button>
          </div>
          <div className="lb-copy">
            <div className="lb-top">
              <p className="eyebrow">
                {t.work.categories[item.category]} · {item.format}
              </p>
              <button ref={closeRef} type="button" className="lb-close" onClick={onClose} aria-label={t.work.close}>
                ×
              </button>
            </div>
            <h2 id={titleId}>{copy.title}</h2>
            <p className="lb-caption">{copy.caption}</p>
            <dl className="lb-meta">
              <div>
                <dt>{t.work.role}</dt>
                <dd>{copy.role}</dd>
              </div>
              {copy.result ? (
                <div>
                  <dt>{t.work.result}</dt>
                  <dd>{copy.result}</dd>
                </div>
              ) : null}
            </dl>
            {item.playable ? (
              <a className="explore" href={item.playable} target="_blank" rel="noopener noreferrer">
                {t.work.openPlayable}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ) : null}
            <p className="lb-hint">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              <span> · {t.work.hint}</span>
            </p>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
