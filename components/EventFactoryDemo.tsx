"use client";

import { useState } from "react";

type EventState = "registration" | "live" | "archive";

const stateCopy: Record<EventState, { label: string; kicker: string; title: string; body: string; cta: string; meta: string }> = {
  registration: {
    label: "Registration open",
    kicker: "Before the event",
    title: "Register. Plan. Prepare.",
    body: "Registration, speakers, travel and program details are promoted automatically while the event is approaching.",
    cta: "Register now",
    meta: "31 OCT — 6 NOV 2026 · COIMBRA"
  },
  live: {
    label: "Event live",
    kicker: "During the event",
    title: "Your event day, at a glance.",
    body: "The same microsite shifts toward today's program, rooms, updates and attendee information without rebuilding pages.",
    cta: "View today’s program",
    meta: "DAY 03 · COIMBRA · LIVE"
  },
  archive: {
    label: "Archived",
    kicker: "After the event",
    title: "Keep the knowledge alive.",
    body: "Registration disappears and the permanent archive elevates recordings, resources, speakers and the historical program.",
    cta: "Explore event archive",
    meta: "2026 EVENT ARCHIVE · PUBLIC"
  }
};

export function EventFactoryDemo() {
  const [state, setState] = useState<EventState>("registration");
  const [theme, setTheme] = useState<"smoke" | "safety">("safety");
  const copy = stateCopy[state];

  return (
    <div className={`factory-demo factory-demo--${theme}`} data-reveal>
      <div className="factory-controls">
        <div>
          <p>Event lifecycle</p>
          <div className="segmented-control" role="group" aria-label="Preview event lifecycle state">
            {(["registration", "live", "archive"] as EventState[]).map((item) => (
              <button key={item} className={state === item ? "is-active" : ""} onClick={() => setState(item)}>{item === "registration" ? "Registration" : item === "live" ? "Live" : "Archived"}</button>
            ))}
          </div>
        </div>
        <div>
          <p>Event identity</p>
          <div className="theme-switch" role="group" aria-label="Preview event identity">
            <button className={theme === "safety" ? "is-active" : ""} onClick={() => setTheme("safety")}><span />Safety Summit</button>
            <button className={theme === "smoke" ? "is-active" : ""} onClick={() => setTheme("smoke")}><span />Smoke Symposium</button>
          </div>
        </div>
      </div>

      <div className="factory-browser" data-cursor="TRY THE SYSTEM">
        <div className="factory-browser__chrome"><span /><span /><span /><small>iawfonline.org/events/2026-safety-summit</small></div>
        <div className="factory-site">
          <div className="factory-site__masthead">
            <div className="factory-site__brand"><span className="factory-site__symbol">19</span><span><strong>{theme === "safety" ? "Wildland Fire Safety Summit" : "International Smoke Symposium"}</strong><small>IAWF EVENT · 2026</small></span></div>
            <nav aria-label="Concept event navigation"><span>Overview</span><span>Program</span><span>Speakers</span><span>Venue</span></nav>
          </div>
          <div className="factory-site__hero">
            <div className="factory-site__contours" aria-hidden="true" />
            <p>{copy.kicker}</p>
            <span className="factory-site__status"><i />{copy.label}</span>
            <h3>{copy.title}</h3>
            <p className="factory-site__body">{copy.body}</p>
            <a href="https://www.iawfonline.org/events/">{copy.cta}<span>↗</span></a>
            <small>{copy.meta}</small>
          </div>
          <div className="factory-site__cards">
            <div><small>01</small><strong>{state === "archive" ? "Recordings" : "Program"}</strong><span>{state === "live" ? "Now & next sessions" : state === "archive" ? "Watch past sessions" : "Build your schedule"}</span></div>
            <div><small>02</small><strong>{state === "archive" ? "Resources" : "Speakers"}</strong><span>{state === "live" ? "People on stage today" : state === "archive" ? "Downloads & papers" : "Meet the community"}</span></div>
            <div><small>03</small><strong>{state === "archive" ? "Next event" : state === "live" ? "Venue" : "Travel"}</strong><span>{state === "archive" ? "Continue with IAWF" : state === "live" ? "Rooms & wayfinding" : "Plan your visit"}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
