import Image from "next/image";
import { Header } from "../components/Header";
import { NewsletterForm } from "../components/NewsletterForm";

type IconName = "people" | "calendar" | "book" | "handshake" | "globe" | "spark" | "shield" | "arrow" | "pin" | "journal" | "award" | "mentor" | "check";

function Icon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<IconName, React.ReactNode> = {
    people: <><circle {...common} cx="9" cy="8" r="3"/><circle {...common} cx="17" cy="10" r="2.5"/><path {...common} d="M3.5 20c.5-4 2.7-6 5.5-6s5 2 5.5 6M14 15c3.6-.7 6.2 1 6.5 5"/></>,
    calendar: <><rect {...common} x="3" y="5" width="18" height="16" rx="2"/><path {...common} d="M7 3v4M17 3v4M3 10h18"/><path {...common} d="M8 14h3M13 14h3M8 18h3"/></>,
    book: <><path {...common} d="M4 5.5c4-.9 6.6.2 8 2v12c-1.4-1.8-4-2.9-8-2V5.5Z"/><path {...common} d="M20 5.5c-4-.9-6.6.2-8 2v12c1.4-1.8 4-2.9 8-2V5.5Z"/></>,
    handshake: <><path {...common} d="m8.5 12.5 3.1 3.1c1.2 1.2 3.1-.6 1.9-1.8l-2.7-2.7"/><path {...common} d="m11 8-2.2-2.2a2 2 0 0 0-2.8 0L3 8.8l5.3 5.3M13 8l2.2-2.2a2 2 0 0 1 2.8 0l3 3-6.2 6.2"/><path {...common} d="m10.8 11.1 2.1-2.1c1.2 1.3 2.5 1.5 4.1.8"/></>,
    globe: <><circle {...common} cx="12" cy="12" r="9"/><path {...common} d="M3 12h18M12 3c2.6 2.5 4 5.5 4 9s-1.4 6.5-4 9c-2.6-2.5-4-5.5-4-9s1.4-6.5 4-9Z"/></>,
    spark: <><path {...common} d="M12 2 14.4 8 20 10.5l-5.6 2.4L12 19l-2.4-6.1L4 10.5 9.6 8 12 2Z"/><path {...common} d="m19 17 .8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17Z"/></>,
    shield: <path {...common} d="M12 3 20 6v5c0 5.2-3.2 8.5-8 10-4.8-1.5-8-4.8-8-10V6l8-3Z"/>,
    arrow: <><path {...common} d="M5 12h14"/><path {...common} d="m14 7 5 5-5 5"/></>,
    pin: <><path {...common} d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle {...common} cx="12" cy="10" r="2"/></>,
    journal: <><rect {...common} x="5" y="3" width="14" height="18" rx="1.8"/><path {...common} d="M8 7h8M8 11h8M8 15h5"/></>,
    award: <><circle {...common} cx="12" cy="9" r="5"/><path {...common} d="m9 14-1 7 4-2 4 2-1-7"/></>,
    mentor: <><circle {...common} cx="9" cy="8" r="3"/><path {...common} d="M4 20c.5-4 2.3-6 5-6s4.5 2 5 6"/><path {...common} d="M16 5h5v5M20.5 5.5l-6 6"/></>,
    check: <path {...common} d="m5 12 4 4 10-10"/>
  };
  return <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

const audienceCards = [
  { icon: "people" as const, title: "Join the community", body: "Connect with practitioners, researchers, students and leaders working across the wildland fire profession.", cta: "Explore membership", href: "#membership" },
  { icon: "calendar" as const, title: "Attend an event", body: "Discover conferences, symposia and partner events where science, practice and policy meet.", cta: "Browse events", href: "#events" },
  { icon: "book" as const, title: "Explore knowledge", body: "Access Wildfire Magazine, IJWF, issue papers and practical resources from the global community.", cta: "Access resources", href: "#knowledge" },
  { icon: "handshake" as const, title: "Partner with IAWF", body: "Support the mission through organizational membership, sponsorship and professional collaboration.", cta: "Partner with us", href: "#partners" }
];

const events = [
  { status: "Registration open", date: "19–23 Oct 2026", title: "Wildland Fire Canada Conference + Canadian Smoke Forum", location: "Saskatoon, Saskatchewan, Canada", tone: "forest", href: "https://www.iawfonline.org/events/" },
  { status: "International summit", date: "31 Oct–6 Nov 2026", title: "19th International Wildland Fire Safety Summit", location: "Coimbra, Portugal", tone: "ochre", href: "https://www.iawfonline.org/events/" },
  { status: "Partner event", date: "10–11 Nov 2026", title: "UK Wildfire Conference — Wildfire2026", location: "Leeds, United Kingdom", tone: "ember", href: "https://www.iawfonline.org/events/" }
];

const benefits = [
  ["journal", "Wildfire Magazine", "Quarterly member publication connecting professional experience, research, challenges and progress from across the world."],
  ["book", "International Journal access", "Online access to the International Journal of Wildland Fire and member pathways into current science."],
  ["calendar", "Conference savings", "Member discounts on IAWF conference registration and access to recordings from past conference presentations."],
  ["mentor", "Mentoring & community", "Mentoring, committees, member connections and professional development opportunities across career stages."],
  ["award", "Scholarships", "Eligibility for graduate scholarships and other opportunities supporting the next generation of fire professionals."],
  ["shield", "Voice & leadership", "Voting rights, Board eligibility and participation in a professional association that convenes a neutral global forum."]
] as const;

const magazineStories = [
  ["Mitigation", "Making Progress — China Accelerates Prevention Efforts", "Eugene Gerden"],
  ["Cover story", "One Foot in the Black — An Off-Season Journey", "Silvie Fojtik"],
  ["Fire science", "Wildfires in the 21st Century", "Rhodri Jones"],
  ["Knowledge", "Weaving Palawa Knowledge with Western Science", "Todd Sculthorpe"]
] as const;

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero__image"
            src="https://www.nps.gov/articles/000/images/NPS_Fuels_Management_ELMA_NPS_2023_5_Photo1.jpg?autorotate=false&maxwidth=1300"
            alt="Wildland firefighter assessing ignitions during a prescribed fire"
            fill
            sizes="100vw"
            priority
          />
          <div className="hero__veil" />
          <div className="container hero__content">
            <p className="eyebrow eyebrow--light">International Association of Wildland Fire</p>
            <h1 id="hero-title">Uniting the global wildland fire community.</h1>
            <p className="hero__lede">Connecting people, knowledge and practice to strengthen leadership, learning and collaboration across wildland fire worldwide.</p>
            <div className="hero__actions">
              <a className="button button--ember" href="https://www.iawfonline.org/membership/">Become a member</a>
              <a className="button button--ghost-light" href="#events">Explore upcoming events</a>
            </div>
            <div className="hero__proof" aria-label="IAWF organization snapshot">
              <span><strong>Since 1990</strong><small>Independent professional association</small></span>
              <span><strong>837 members</strong><small>2025 annual report</small></span>
              <span><strong>41 countries</strong><small>2025 member presence</small></span>
            </div>
          </div>
        </section>

        <section className="audience section" aria-labelledby="audience-title">
          <div className="container">
            <div className="section-heading section-heading--center compact">
              <p className="eyebrow">Find your path</p>
              <h2 id="audience-title">What brings you to IAWF?</h2>
              <p>Start with your goal—not the organization chart.</p>
            </div>
            <div className="audience-grid">
              {audienceCards.map((card) => (
                <a className="audience-card" href={card.href} key={card.title}>
                  <span className="icon-shell"><Icon name={card.icon} /></span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                  <span className="text-link">{card.cta} <Icon name="arrow" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="events" className="events-section section section--smoke" aria-labelledby="events-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Meet, learn, exchange</p>
                <h2 id="events-title">Upcoming events</h2>
                <p>Global gatherings for professionals working across fire science, management, safety, smoke and community resilience.</p>
              </div>
              <a className="text-link text-link--large" href="https://www.iawfonline.org/events/">View all IAWF events <Icon name="arrow" /></a>
            </div>
            <div className="event-grid">
              {events.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className={`event-card__art event-card__art--${event.tone}`} aria-hidden="true">
                    <span className="event-card__ring event-card__ring--one" />
                    <span className="event-card__ring event-card__ring--two" />
                    <Icon name="globe" />
                  </div>
                  <div className="event-card__body">
                    <span className="status-pill">{event.status}</span>
                    <p className="event-date">{event.date}</p>
                    <h3>{event.title}</h3>
                    <p className="event-location"><Icon name="pin" />{event.location}</p>
                    <a className="text-link" href={event.href}>View event details <Icon name="arrow" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mission section" aria-labelledby="mission-title">
          <div className="container mission-grid">
            <div className="mission-media">
              <Image
                src="https://www.nps.gov/articles/000/images/NPS_Fuels_Management_ELMA_NPS_2023_5_Photo3.JPG?autorotate=false&maxwidth=650"
                alt="Firefighters mentoring one another during fuels reduction work"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className="media-caption">Illustrative field photography · National Park Service</div>
            </div>
            <div className="mission-copy">
              <p className="eyebrow">A neutral global forum</p>
              <h2 id="mission-title">Different disciplines. Shared purpose.</h2>
              <p className="lead">IAWF brings together experts across all aspects of wildland fire management to facilitate communication, strengthen understanding and provide leadership for the profession.</p>
              <p>As an independent nonprofit professional association, IAWF creates space for researchers, practitioners, agencies, students, communities and partners to address important—and sometimes difficult—wildland fire issues together.</p>
              <div className="mission-values" aria-label="Design response to IAWF mission">
                <span><Icon name="globe" /><strong>Global linkage</strong><small>People and perspectives across borders</small></span>
                <span><Icon name="spark" /><strong>Knowledge exchange</strong><small>Science, practice and lived experience</small></span>
                <span><Icon name="shield" /><strong>Professional leadership</strong><small>Safety, stewardship and informed dialogue</small></span>
              </div>
              <a className="button button--forest" href="https://www.iawfonline.org/about-us/">Learn more about IAWF</a>
            </div>
          </div>
        </section>

        <section id="membership" className="membership section section--forest" aria-labelledby="membership-title">
          <div className="container">
            <div className="membership-intro">
              <div>
                <p className="eyebrow eyebrow--ochre">Membership</p>
                <h2 id="membership-title">More than a subscription. A professional community.</h2>
              </div>
              <div>
                <p>Membership connects people to publications, events, professional opportunities and peers working on the same complex fire challenges around the world.</p>
                <a className="button button--light" href="https://www.iawfonline.org/membership/">See membership options</a>
              </div>
            </div>
            <div className="benefit-grid">
              {benefits.map(([icon, title, copy]) => (
                <article className="benefit-card" key={title}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="membership-note">
              <span><strong>$80</strong><small>Standard individual membership</small></span>
              <span><strong>$20</strong><small>Student, early-career and other reduced-rate categories</small></span>
              <span><strong>Voting rights</strong><small>Plus Board eligibility for individual members</small></span>
            </div>
          </div>
        </section>

        <section id="knowledge" className="knowledge section" aria-labelledby="knowledge-title">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Knowledge & publications</p>
                <h2 id="knowledge-title">Learn from the global fire community.</h2>
                <p>Make current research, professional experience and practical knowledge easier to discover—and easier to return to.</p>
              </div>
              <a className="text-link text-link--large" href="https://www.iawfonline.org/wildfire-magazine/">Explore Wildfire Magazine <Icon name="arrow" /></a>
            </div>
            <div className="knowledge-layout">
              <article className="magazine-feature">
                <div className="magazine-feature__media">
                  <Image
                    src="https://home.army.mil/hawaii/3415/5727/0391/20190507_Army_WildlandFire_DripTorch.JPG"
                    alt="Wildland firefighter using a drip torch during a prescribed burn"
                    fill
                    sizes="(max-width: 900px) 100vw, 55vw"
                  />
                </div>
                <div className="magazine-feature__content">
                  <p className="eyebrow eyebrow--ochre">Wildfire Magazine · Issue 35.1</p>
                  <h3>Stories, research and perspectives from across the profession.</h3>
                  <p>Wildfire is IAWF’s quarterly publication and a network-building platform for the broader global wildland fire community.</p>
                  <a className="button button--light" href="https://www.iawfonline.org/wildfire-magazine/">Read the current issue</a>
                </div>
              </article>
              <div className="story-list">
                {magazineStories.map(([category, title, author], index) => (
                  <a className="story-row" href="https://www.iawfonline.org/wildfire-magazine/" key={title}>
                    <span className="story-row__number">0{index + 1}</span>
                    <span className="story-row__main"><small>{category}</small><strong>{title}</strong><span>By {author}</span></span>
                    <Icon name="arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="issue-feature section section--mist" aria-labelledby="issue-title">
          <div className="container issue-grid">
            <div className="issue-copy">
              <p className="eyebrow">From knowledge to leadership</p>
              <h2 id="issue-title">A trusted voice on the issues shaping wildland fire.</h2>
              <p>IAWF’s issue papers and professional platforms create a neutral place for complex topics—from applied fire and climate adaptation to Indigenous-led cultural burning, diversity and firefighter safety.</p>
              <div className="check-list">
                <span><Icon name="check" />Evidence and professional experience</span>
                <span><Icon name="check" />Global and interdisciplinary perspectives</span>
                <span><Icon name="check" />Clear pathways from discussion to action</span>
              </div>
              <a className="text-link text-link--large" href="https://www.iawfonline.org/publications/">Explore publications and issue papers <Icon name="arrow" /></a>
            </div>
            <div className="issue-visual" aria-label="Editorial feature illustration">
              <Image
                src="https://api.army.mil/e2/c/images/2022/04/12/a9360fdb/original.jpg"
                alt="Wildland fire team briefing in the field"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
              />
              <div className="issue-visual__quote">“Facilitating communication and providing leadership for the wildland fire community.”</div>
            </div>
          </div>
        </section>

        <section id="opportunities" className="opportunities section" aria-labelledby="opportunities-title">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Awards & opportunities</p>
              <h2 id="opportunities-title">Recognize excellence. Grow the next generation.</h2>
              <p>Surface time-sensitive opportunities as structured, easy-to-scan content rather than burying them in long pages.</p>
            </div>
            <div className="opportunity-grid">
              <article className="opportunity-card opportunity-card--ember">
                <Icon name="award" />
                <p className="status-pill">Opening September 2026</p>
                <h3>2027 IAWF Awards</h3>
                <p>Prepare nominations for professionals making significant contributions to safety, leadership and the wildland fire community.</p>
                <a className="text-link" href="https://www.iawfonline.org/awards/">View award information <Icon name="arrow" /></a>
              </article>
              <article className="opportunity-card opportunity-card--forest">
                <Icon name="journal" />
                <p className="status-pill">Next cycle: Spring</p>
                <h3>Graduate Scholarships</h3>
                <p>IAWF typically awards two graduate-level scholarships valued at $3,000 USD to members studying wildland fire-related topics.</p>
                <a className="text-link" href="https://www.iawfonline.org/scholarships/">Explore scholarships <Icon name="arrow" /></a>
              </article>
              <article className="opportunity-card opportunity-card--ochre">
                <Icon name="mentor" />
                <p className="status-pill">Member program</p>
                <h3>Mentoring Program</h3>
                <p>Connect experienced professionals and mentees for a six-month relationship with resources, guidance and shared goals.</p>
                <a className="text-link" href="https://www.iawfonline.org/mentoring-program/">Learn about mentoring <Icon name="arrow" /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="snapshot section section--forest" aria-labelledby="snapshot-title">
          <div className="container">
            <div className="snapshot-heading">
              <p className="eyebrow eyebrow--ochre">2025 membership snapshot</p>
              <h2 id="snapshot-title">One association. A genuinely international community.</h2>
            </div>
            <div className="snapshot-grid">
              <div><strong>837</strong><span>members</span></div>
              <div><strong>41</strong><span>countries represented</span></div>
              <div><strong>36</strong><span>years since IAWF was established</span></div>
              <div><strong>2 × $3k</strong><span>graduate scholarships typically awarded annually</span></div>
            </div>
          </div>
        </section>

        <section id="partners" className="partners section" aria-labelledby="partners-title">
          <div className="container partners-grid">
            <div>
              <p className="eyebrow">Organizations & partners</p>
              <h2 id="partners-title">Create visible value for organizations that support the mission.</h2>
              <p>Structured organization and sponsor modules can give supporters consistent recognition across the main association site and event microsites—without turning pages into logo walls.</p>
              <a className="button button--forest" href="https://www.iawfonline.org/organizational-membership-benefits-join/">Organizational membership</a>
            </div>
            <div className="agency-panel">
              <p>Current agency members listed by IAWF include</p>
              <ul>
                <li>Fire and Emergency New Zealand</li>
                <li>ACT Parks and Conservation Service, Australia</li>
                <li>USFWS Branch of Fire Management</li>
                <li>Yukon Wildland Fire Management</li>
              </ul>
              <a className="text-link" href="https://www.iawfonline.org/agency-corporate-members/">See agency & corporate members <Icon name="arrow" /></a>
            </div>
          </div>
        </section>

        <section className="newsletter" aria-labelledby="newsletter-title">
          <div className="container newsletter-grid">
            <div>
              <p className="eyebrow eyebrow--light">Stay connected</p>
              <h2 id="newsletter-title">Keep up with events, knowledge and opportunities.</h2>
              <p>Production integration would use IAWF’s existing Constant Contact account and consent requirements.</p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-brand__line"><Icon name="globe" /><strong>IAWF</strong></div>
            <p>Professional membership association dedicated to facilitating communication and providing leadership for the global wildland fire community.</p>
            <p className="concept-note">Interactive proposal concept prepared by Codistan. Visual direction is illustrative and subject to IAWF discovery, official brand assets and approval.</p>
          </div>
          <div><h3>Explore</h3><a href="#about">About IAWF</a><a href="#membership">Membership</a><a href="#events">Events</a><a href="#knowledge">Knowledge & resources</a></div>
          <div><h3>Opportunities</h3><a href="https://www.iawfonline.org/awards/">Awards</a><a href="https://www.iawfonline.org/scholarships/">Scholarships</a><a href="https://www.iawfonline.org/mentoring-program/">Mentoring</a><a href="#partners">Partners</a></div>
          <div><h3>Connect</h3><a href="https://www.iawfonline.org/contact-us/">Contact</a><a href="https://www.iawfonline.org/wildfire-magazine/">Wildfire Magazine</a><a href="https://www.iawfonline.org/donate/">Donate</a><a href="https://www.iawfonline.org/">Current website ↗</a></div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 IAWF concept · Proposal evaluation only</span>
          <span>Designed for WCAG 2.1 AA · Mobile-first · Performance-budgeted</span>
        </div>
      </footer>
    </div>
  );
}
