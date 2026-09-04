"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const primaryLinks = [
  ["About", "#about"],
  ["Membership", "#membership"],
  ["Events", "#events"],
  ["Knowledge", "#knowledge"],
  ["Opportunities", "#opportunities"],
  ["Partners", "#partners"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="concept-ribbon" role="note">
        <span>Interactive proposal concept · Codistan × IAWF</span>
        <a href="https://www.iawfonline.org/">Current website ↗</a>
      </div>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header__shell">
          <a className="brand" href="#top" aria-label="IAWF concept homepage" data-cursor="HOME">
            <span className="brand__mark">
              <span className="brand__orbit" aria-hidden="true" />
              <Image src="https://www.iafc.org/images/default-source/1logos/iawf-logo.png?sfvrsn=50a9660c_1" alt="International Association of Wildland Fire emblem" width={64} height={64} priority />
            </span>
            <span className="brand__type"><strong>IAWF</strong><small>International Association<br />of Wildland Fire</small></span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryLinks.map(([label, href], index) => <a key={label} href={href}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
          </nav>

          <div className="header-actions">
            <a className="header-search" href="https://www.iawfonline.org/?s=" aria-label="Search IAWF" data-cursor="SEARCH">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>
            </a>
            <a className="header-join" href="https://www.iawfonline.org/membership/" data-cursor="JOIN"><span>Join IAWF</span><i>↗</i></a>
            <button className={`menu-toggle ${open ? "is-open" : ""}`} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation menu" : "Open navigation menu"} onClick={() => setOpen((value) => !value)}>
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__contours" aria-hidden="true" />
        <nav aria-label="Mobile navigation">
          {primaryLinks.map(([label, href], index) => (
            <a key={label} href={href} onClick={() => setOpen(false)} style={{ "--menu-index": index } as React.CSSProperties}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{label}</strong><i>↗</i>
            </a>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <p>Global wildland fire knowledge, practice and collaboration.</p>
          <a href="https://www.iawfonline.org/membership/" onClick={() => setOpen(false)}>Become a member <span>↗</span></a>
        </div>
      </div>
    </>
  );
}
