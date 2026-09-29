"use client";

import { profile } from "@/content/site";
import { useRef, type CSSProperties, type MouseEvent } from "react";
import { Spotlight } from "@/components/spotlight";

type Props = {
  alt: string;
  label: string;
  delay: number;
};

export function PhotoCard({ alt, label, delay }: Props) {
  const tilt = useRef<HTMLDivElement>(null);

  function canTilt() {
    return (
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function move(event: MouseEvent<HTMLDivElement>) {
    const el = tilt.current;
    if (!el || !canTilt()) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transition = "transform 40ms linear";
    el.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  }

  function leave() {
    const el = tilt.current;
    if (!el) return;
    el.style.transition = "transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1)";
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
  }

  return (
    <Spotlight className="photo rise" style={{ "--i": delay } as CSSProperties}>
      <div className="photo-tilt" ref={tilt} onMouseMove={move} onMouseLeave={leave}>
        <div className="photo-back" aria-hidden="true" />
        <div className="photo-front">
          {profile.portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.portrait} alt={alt} className="portrait" />
          ) : (
            <div className="monogram">
              <span>S</span>
              <small>{label}</small>
            </div>
          )}
        </div>
        <div className="marks" aria-hidden="true">
          <span className="mark tl" />
          <span className="mark tr" />
          <span className="mark bl" />
          <span className="mark br" />
        </div>
      </div>
    </Spotlight>
  );
}
