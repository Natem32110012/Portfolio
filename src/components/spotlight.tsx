"use client";

import { useCallback, type CSSProperties, type MouseEvent, type ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
  id?: string;
};

export function Spotlight({ className, children, style, id }: Props) {
  const onMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <article id={id} className={`card ${className ?? ""}`} style={style} onMouseMove={onMove}>
      {children}
    </article>
  );
}
