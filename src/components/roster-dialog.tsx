"use client";

import { portfolioApps, portfolioGames, type StatId } from "@/content/site";
import type { Dictionary } from "@/locales";
import { useEffect, useId, useRef, type CSSProperties, type MouseEvent } from "react";

type Props = {
  kind: StatId | null;
  session: number;
  t: Dictionary;
  onClose: () => void;
};

export function RosterDialog({ kind, session, t, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openedAt = useRef(0);
  const titleId = useId();
  const open = kind === "projects" || kind === "games";
  const items = kind === "games" ? portfolioGames : portfolioApps;
  const title = kind ? t.stats[kind] : "";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      openedAt.current = Date.now();
    }
    if (!open && dialog.open) dialog.close();
  }, [open, session]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open, session]);

  function onDialogClick(event: MouseEvent<HTMLDialogElement>) {
    if (Date.now() - openedAt.current < 450) return;
    if (event.target !== event.currentTarget) return;
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="roster"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={onDialogClick}
    >
      {open ? (
        <div className="roster-panel" key={session}>
          <div className="roster-head">
            <h2 id={titleId}>{title}</h2>
            <button ref={closeRef} type="button" className="roster-close" onClick={onClose} aria-label={t.work.close}>
              ×
            </button>
          </div>
          <ul className="roster-grid">
            {items.map((item, index) => (
              <li key={item.id} className="tool roster-tile" style={{ "--i": index } as CSSProperties}>
                <span className="glyph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt="" />
                </span>
                <span className="tool-name">{item.name}</span>
              </li>
            ))}
            {kind === "games" ? (
              <li className="tool roster-tile roster-more" style={{ "--i": items.length } as CSSProperties}>
                {t.tools.more}
              </li>
            ) : null}
          </ul>
        </div>
      ) : null}
    </dialog>
  );
}
