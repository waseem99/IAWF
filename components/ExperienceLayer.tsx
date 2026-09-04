"use client";

import { useEffect, useState } from "react";

type MobileAction = { label: string; href: string } | null;

export function ExperienceLayer() {
  const [intro, setIntro] = useState(true);
  const [cursor, setCursor] = useState("");
  const [mobileAction, setMobileAction] = useState<MobileAction>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem("iawf-intro-seen") === "1";
    if (seen || reduceMotion) {
      setIntro(false);
    } else {
      const timer = window.setTimeout(() => {
        setIntro(false);
        window.sessionStorage.setItem("iawf-intro-seen", "1");
      }, 1550);
      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14, rootMargin: "0px 0px -6%" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    const actionSections = [
      ["events", "Explore events", "#events"],
      ["membership", "Join IAWF", "https://www.iawfonline.org/membership/"],
      ["knowledge", "Read Wildfire", "https://www.iawfonline.org/wildfire-magazine/"],
      ["event-factory", "See event system", "#event-factory"]
    ] as const;
    const actionObserver = new IntersectionObserver(
      (entries) => {
        const active = entries.find((entry) => entry.isIntersecting);
        if (!active) return;
        const match = actionSections.find(([id]) => id === active.target.id);
        if (match) setMobileAction({ label: match[1], href: match[2] });
      },
      { threshold: 0.35 }
    );
    actionSections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) actionObserver.observe(el);
    });

    let raf = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
        const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
        setCursor(target?.dataset.cursor || "");
      });
    };
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--page-progress", String(window.scrollY / max));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      reveal.disconnect();
      actionObserver.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className={`intro-loader ${intro ? "is-active" : "is-complete"}`} aria-hidden={!intro}>
        <div className="intro-loader__mark">
          <svg viewBox="0 0 160 160" aria-hidden="true">
            <circle className="intro-loader__track" cx="80" cy="80" r="58" />
            <path className="intro-loader__fireline" d="M23 80c10-37 34-58 62-55 30 3 50 27 53 54 3 29-17 54-45 59-30 6-58-12-67-39 8 9 18 13 29 11 19-4 28-21 23-37-4-13-16-21-29-22-11-1-20 3-26 9Z" />
          </svg>
          <span>IAWF</span>
        </div>
        <p>Connecting the global wildland fire community</p>
      </div>
      <div className="page-progress" aria-hidden="true"><span /></div>
      <div className={`custom-cursor ${cursor ? "is-labelled" : ""}`} aria-hidden="true"><span>{cursor}</span></div>
      {mobileAction && <a className="mobile-action" href={mobileAction.href}>{mobileAction.label}<span>↗</span></a>}
    </>
  );
}
