"use client";

import { profile } from "@/content/site";
import type { Dictionary } from "@/locales";
import { useEffect, useId, useRef, type MouseEvent } from "react";

type Props = {
  open: boolean;
  session: number;
  t: Dictionary;
  onClose: () => void;
};

export function CertificateDialog({ open, session, t, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openedAt = useRef(0);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      openedAt.current = Number(dialog.dataset.opened || Date.now());
      if (!dialog.open) {
        dialog.dataset.opened = String(openedAt.current);
        dialog.showModal();
      }
    } else if (dialog.open) dialog.close();
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
    const opened = Number(event.currentTarget.dataset.opened || openedAt.current || 0);
    if (Date.now() - opened < 700) return;
    if (event.target !== event.currentTarget) return;
    onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="certificate"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={onDialogClick}
    >
      {open ? (
        <div className="certificate-panel" key={session}>
          <div className="roster-head">
            <div>
              <h2 id={titleId}>{t.contact.certificate}</h2>
              <p className="certificate-caption">{t.contact.certificateCaption}</p>
            </div>
            <button ref={closeRef} type="button" className="roster-close" onClick={onClose} aria-label={t.work.close}>
              ×
            </button>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="certificate-image" src={profile.certificate} alt={t.contact.certificateAlt} />
        </div>
      ) : null}
    </dialog>
  );
}
