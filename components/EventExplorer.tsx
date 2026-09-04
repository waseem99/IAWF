"use client";

import { useState } from "react";

const events = [
  { city: "Saskatoon", country: "Canada", date: "19–23 Oct 2026", title: "Wildland Fire Canada Conference + Canadian Smoke Forum", status: "Registration open", x: 22, y: 31 },
  { city: "Coimbra", country: "Portugal", date: "31 Oct–6 Nov 2026", title: "19th International Wildland Fire Safety Summit", status: "International summit", x: 48, y: 40 },
  { city: "Leeds", country: "United Kingdom", date: "10–11 Nov 2026", title: "UK Wildfire Conference — Wildfire2026", status: "Tickets available", x: 50, y: 30 }
] as const;

export function EventExplorer() {
  const [active, setActive] = useState(0);
  const event = events[active];

  return (
    <div className="event-explorer" data-reveal>
      <div className="event-map" aria-label="IAWF event locations">
        <div className="event-map__grid" aria-hidden="true" />
        <svg className="event-map__world" viewBox="0 0 1000 520" aria-hidden="true">
          <path d="M54 116 128 74l101 18 45 63 88 19 14 61-55 43-19 78-58 54-63-38-7-90-71-45-48-68Zm389 48 58-76 93-11 75 48 75-12 126 54 57 104-77 66-91-3-53 54-74-38-40-88-69-16-60-82Zm129 143 63 19 55 95-32 61-62-16-39-75Z" />
        </svg>
        <svg className="event-map__route" viewBox="0 0 100 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M22 31 C33 14,43 14,48 40 S50 29,50 30" />
        </svg>
        {events.map((item, index) => (
          <button
            key={item.city}
            className={`event-pin ${active === index ? "is-active" : ""}`}
            style={{ left: `${item.x}%`, top: `${item.y}%` }}
            onClick={() => setActive(index)}
            aria-label={`Show ${item.title}`}
            aria-pressed={active === index}
          >
            <span className="event-pin__pulse" />
            <span className="event-pin__dot" />
            <span className="event-pin__label">{item.city}</span>
          </button>
        ))}
        <div className="event-map__coordinates" aria-hidden="true">GLOBAL EVENT NETWORK / 2026</div>
      </div>
      <article className="event-feature" data-cursor="VIEW EVENT">
        <div className="event-feature__topline"><span>{event.status}</span><span>{String(active + 1).padStart(2, "0")} / 03</span></div>
        <p className="event-feature__date">{event.date}</p>
        <h3>{event.title}</h3>
        <p className="event-feature__location">{event.city} · {event.country}</p>
        <div className="event-feature__actions">
          <a href="https://www.iawfonline.org/events/">Explore event <span>↗</span></a>
          <div className="event-feature__steps" aria-label="Select event">
            {events.map((item, index) => <button key={item.city} onClick={() => setActive(index)} className={active === index ? "is-active" : ""}>{index + 1}</button>)}
          </div>
        </div>
      </article>
    </div>
  );
}
