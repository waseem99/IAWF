"use client";

import Image from "next/image";
import { useState } from "react";

const primaryLinks = [
  ["About", "#about"],
  ["Membership", "#membership"],
  ["Events", "#events"],
  ["Knowledge & Resources", "#knowledge"],
  ["Awards & Opportunities", "#opportunities"],
  ["Partners", "#partners"]
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="concept-bar" role="note">
        <div className="container concept-bar__inner">
          <span><strong>Proposal concept</strong> · Audit-informed homepage direction</span>
          <a href="https://www.iawfonline.org/" aria-label="Open the current IAWF website">Current IAWF website ↗</a>
        </div>
      </div>
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <p>A global community advancing wildland fire knowledge, practice and collaboration.</p>
          <nav aria-label="Utility navigation">
            <a href="https://www.iawfonline.org/wildfire-magazine/">Wildfire Magazine</a>
            <a href="https://www.iawfonline.org/contact-us/">Contact</a>
            <a href="https://www.iawfonline.org/membership/">Member access</a>
            <a className="utility-donate" href="https://www.iawfonline.org/donate/">Donate</a>
          </nav>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#top" aria-label="IAWF homepage concept">
            <span className="brand__mark">
              <Image
                src="https://www.iafc.org/images/default-source/1logos/iawf-logo.png?sfvrsn=50a9660c_1"
                alt="International Association of Wildland Fire emblem"
                width={72}
                height={72}
                priority
              />
            </span>
            <span className="brand__type">
              <strong>IAWF</strong>
              <span>International Association<br />of Wildland Fire</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {primaryLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>

          <div className="header-actions">
            <a className="search-link" href="https://www.iawfonline.org/?s=" aria-label="Search the current IAWF website">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>
            </a>
            <a className="button button--small button--ember desktop-join" href="https://www.iawfonline.org/membership/">Join IAWF</a>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} hidden={!open}>
          <nav className="container" aria-label="Mobile navigation">
            {primaryLinks.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
            <div className="mobile-menu__actions">
              <a href="https://www.iawfonline.org/membership/">Member access</a>
              <a className="button button--ember" href="https://www.iawfonline.org/membership/">Join IAWF</a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
