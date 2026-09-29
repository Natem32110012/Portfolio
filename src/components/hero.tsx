"use client";

import { ContactLinks } from "@/components/contact-links";
import { Experience } from "@/components/experience";
import { PhotoCard } from "@/components/photo-card";
import { RosterDialog } from "@/components/roster-dialog";
import { Spotlight } from "@/components/spotlight";
import { ToolIcon } from "@/components/tool-icons";
import {
  categories,
  featuredWork,
  hobbies,
  profile,
  stats,
  tools,
  type Category,
  type StatId,
  type WorkId,
} from "@/content/site";
import type { Dictionary } from "@/locales";
import { useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";

type Props = {
  t: Dictionary;
  onExplore: (category?: Category) => void;
  onOpen: (id: WorkId) => void;
};

function rise(i: number): CSSProperties {
  return { "--i": i } as CSSProperties;
}

function StatIcon({ id }: { id: "projects" | "games" }) {
  if (id === "games") {
    return (
      <svg className="stat-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7.2 10.2h9.6a2.4 2.4 0 0 1 2.3 3l-.6 2a2 2 0 0 1-1.9 1.4h-.5a1.8 1.8 0 0 1-1.6-.9l-.8-1.6H10l-.8 1.6a1.8 1.8 0 0 1-1.6.9h-.5a2 2 0 0 1-1.9-1.4l-.6-2a2.4 2.4 0 0 1 2.3-3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M8.2 9.2v2.6M6.9 10.5h2.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="15.3" cy="9.4" r="0.9" fill="currentColor" />
        <circle cx="17.1" cy="11.1" r="0.9" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg className="stat-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="7.2" height="7.2" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.8" y="3" width="7.2" height="7.2" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="13.8" width="7.2" height="7.2" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13.8" y="13.8" width="7.2" height="7.2" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function Hero({ t, onExplore, onOpen }: Props) {
  const teaser = categories.map((id) => t.work.categories[id]).join("  ·  ");
  const [roster, setRoster] = useState<StatId | null>(null);
  const [rosterSession, setRosterSession] = useState(0);
  const shotsRef = useRef<HTMLDivElement>(null);
  const ignoreShotClick = useRef(false);

  function openShotAt(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") return;
    const root = shotsRef.current;
    if (!root) return;
    const shots = root.querySelectorAll<HTMLButtonElement>(".shot");
    for (const shot of shots) {
      const rect = shot.getBoundingClientRect();
      const hit =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!hit) continue;
      const id = shot.dataset.id;
      if (!id) return;
      ignoreShotClick.current = true;
      onOpen(id as WorkId);
      return;
    }
  }

  function openRoster(id: StatId) {
    if (id === "years") return;
    setRosterSession((session) => session + 1);
    setRoster(id);
  }

  return (
    <>
    <section className="bento" aria-labelledby="intro-heading">
      <Spotlight className="identity rise" style={rise(0)}>
        <h1 id="intro-heading" className="name">
          {profile.name}
        </h1>
        <p className="eyebrow">
          {t.hero.role}
          <span aria-hidden="true"> · </span>
          {t.hero.location}
        </p>
        <p className="positioning">{t.hero.positioning}</p>
        <p className="status">
          <i aria-hidden="true" />
          {t.hero.status}
        </p>
        <dl className="stats">
          {stats.map((stat) =>
            stat.id === "years" ? (
              <div key={stat.id}>
                <dt>{t.stats[stat.id]}</dt>
                <dd>{stat.value}</dd>
              </div>
            ) : (
              <div key={stat.id}>
                <button type="button" className="stat-open" aria-haspopup="dialog" onClick={() => openRoster(stat.id)}>
                  <StatIcon id={stat.id} />
                  <span className="stat-label">{t.stats[stat.id]}</span>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            ),
          )}
        </dl>
        <ContactLinks t={t} split />
      </Spotlight>

      <PhotoCard alt={profile.name} label={t.hero.portraitLabel} delay={1} />

      <div className="apps">
        <Spotlight className="panel tools-panel rise" style={rise(2)}>
          <p className="eyebrow">{t.tools.heading}</p>
          <ul className="tools">
            {tools.map((tool, index) => (
              <li key={tool.id} className="tool" data-tool={tool.id} style={rise(index)}>
                <span className="glyph">
                  <ToolIcon id={tool.id} />
                </span>
                <span className="tool-name">{tool.name}</span>
              </li>
            ))}
            <li className="tool more">{t.tools.more}</li>
          </ul>
        </Spotlight>
        <Spotlight className="panel hobbies-panel rise" style={rise(3)}>
          <p className="eyebrow">{t.hobbies.heading}</p>
          <ul className="hobbies">
            {hobbies.map((hobby) => (
              <li key={hobby.id}>{t.hobbies.items[hobby.id]}</li>
            ))}
          </ul>
        </Spotlight>
      </div>

      <div className="career">
        <Experience t={t} />
        <Spotlight className="panel about rise" style={rise(3)}>
          <p className="eyebrow">{t.about.heading}</p>
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((part) =>
                part.strong ? <strong key={part.text}>{part.text}</strong> : <span key={part.text}>{part.text}</span>,
              )}
            </p>
          ))}
        </Spotlight>
      </div>

      <Spotlight className="teaser rise" style={rise(4)}>
        <div className="teaser-copy">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2>{t.hero.explore}</h2>
          <p className="teaser-cats">{teaser}</p>
          <a
            className="explore"
            href="#work"
            onClick={(event) => {
              event.preventDefault();
              onExplore();
            }}
          >
            {t.hero.viewAll}
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
        <div className="shots" ref={shotsRef} onPointerUp={openShotAt}>
          <div className="shot-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="shot-set" aria-hidden={copy === 1 ? true : undefined}>
                {featuredWork.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="shot"
                    data-id={item.id}
                    tabIndex={copy === 1 ? -1 : undefined}
                    aria-label={t.work.items[item.id].title}
                    onClick={() => {
                      if (ignoreShotClick.current) {
                        ignoreShotClick.current = false;
                        return;
                      }
                      onOpen(item.id);
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.poster} alt="" />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Spotlight>
    </section>
    <RosterDialog kind={roster} session={rosterSession} t={t} onClose={() => setRoster(null)} />
    </>
  );
}
