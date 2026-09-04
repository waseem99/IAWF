import Image from "next/image";
import { Header } from "../components/Header";
import { ExperienceLayer } from "../components/ExperienceLayer";
import { EventExplorer } from "../components/EventExplorer";
import { EventFactoryDemo } from "../components/EventFactoryDemo";
import { NewsletterForm } from "../components/NewsletterForm";

type IconName = "people" | "calendar" | "book" | "handshake" | "globe" | "spark" | "shield" | "arrow" | "pin" | "journal" | "award" | "mentor" | "check";

function Icon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
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

const paths = [
  ["people", "Join the community", "Connect with practitioners, researchers, students and leaders shaping the wildland fire profession.", "Explore membership", "#membership"],
  ["calendar", "Attend an event", "Find conferences and symposia where science, practice, safety and policy meet.", "Browse events", "#events"],
  ["book", "Explore knowledge", "Discover Wildfire Magazine, IJWF, issue papers and practical resources.", "Access resources", "#knowledge"],
  ["handshake", "Partner with IAWF", "Support a neutral global forum through organizational membership and sponsorship.", "Partner with us", "#partners"]
] as const;

const benefits = [
  ["journal", "Wildfire Magazine", "Quarterly professional stories, research and perspectives."],
  ["book", "Journal access", "Online access to the International Journal of Wildland Fire."],
  ["calendar", "Conference savings", "Member discounts and access to past presentation recordings."],
  ["mentor", "Mentoring", "Professional connection across disciplines, regions and career stages."],
  ["award", "Scholarships", "Opportunities supporting the next generation of fire professionals."],
  ["shield", "Voice & leadership", "Voting rights, Board eligibility and participation in IAWF leadership."]
] as const;

const stories = [
  ["01", "Mitigation", "Making Progress — China Accelerates Prevention Efforts", "Eugene Gerden"],
  ["02", "Cover story", "One Foot in the Black — An Off-Season Journey", "Silvie Fojtik"],
  ["03", "Fire science", "Wildfires in the 21st Century", "Rhodri Jones"],
  ["04", "Knowledge", "Weaving Palawa Knowledge with Western Science", "Todd Sculthorpe"]
] as const;

export default function Home() {
  return (
    <div id="top">
      <ExperienceLayer />
      <Header />
      <main id="main-content">
        <section className="hero-v2" aria-labelledby="hero-title">
          <Image className="hero-v2__image" src="https://www.nps.gov/articles/000/images/NPS_Fuels_Management_ELMA_NPS_2023_5_Photo1.jpg?autorotate=false&maxwidth=1300" alt="Wildland firefighter assessing ignitions during a prescribed fire" fill sizes="100vw" priority />
          <div className="hero-v2__scrim" />
          <div className="hero-v2__smoke" aria-hidden="true" />
          <div className="hero-v2__topo" aria-hidden="true">
            <svg viewBox="0 0 900 700" preserveAspectRatio="xMidYMid slice"><path d="M-40 570C140 430 90 230 300 205s270 173 469 17 236-11 236-11"/><path d="M-60 620C121 475 116 294 299 265s285 153 463 21 263 6 263 6"/><path d="M-60 664C117 526 154 353 324 328s259 116 428 24 280 40 280 40"/><path d="M10 700C154 581 201 424 354 395s245 89 391 37 257 61 257 61"/></svg>
          </div>
          <div className="hero-v2__glow" aria-hidden="true" />
          <div className="hero-v2__content">
            <div className="hero-v2__meta" data-reveal><span>IAWF / GLOBAL NETWORK</span><span>EST. 1990</span><span>41 COUNTRIES</span></div>
            <div className="hero-v2__headline" data-reveal>
              <p>International Association of Wildland Fire</p>
              <h1 id="hero-title"><span>Uniting the</span><span>global wildland</span><span><em>fire</em> community.</span></h1>
            </div>
            <div className="hero-v2__bottom" data-reveal>
              <p>Connecting people, knowledge and practice to strengthen leadership, learning and collaboration across wildland fire worldwide.</p>
              <div className="hero-v2__actions">
                <a className="cta-orbit" href="https://www.iawfonline.org/membership/" data-cursor="JOIN IAWF"><span>Become a member</span><i>↗</i></a>
                <a className="hero-v2__text-link" href="#events" data-cursor="EXPLORE"><span>Explore upcoming events</span><i>↓</i></a>
              </div>
            </div>
            <div className="hero-v2__scroll" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
          </div>
        </section>

        <section className="fireline-story" aria-labelledby="fireline-title">
          <div className="fireline-story__intro" data-reveal>
            <p className="kicker">One connected profession</p>
            <h2 id="fireline-title">Fire doesn’t recognize borders.<br/><em>Neither should knowledge.</em></h2>
          </div>
          <div className="fireline-journey" data-reveal>
            <div className="fireline-journey__line" aria-hidden="true"><span /></div>
            {[["01","People","A global professional community"],["02","Science","Research translated into practice"],["03","Practice","Field experience shared openly"],["04","Leadership","A neutral forum for complex issues"],["05","Community","Stronger outcomes together"]].map(([n,title,copy]) => <div className="fireline-node" key={n}><span>{n}</span><strong>{title}</strong><small>{copy}</small></div>)}
          </div>
        </section>

        <section className="pathways section-pad" aria-labelledby="pathways-title">
          <div className="section-intro" data-reveal><p className="kicker">Find your path</p><h2 id="pathways-title">Start with what you need.</h2><p>Clear, audience-led routes replace organizational complexity with immediate choices.</p></div>
          <div className="pathway-rail">
            {paths.map(([icon,title,body,cta,href], index) => <a className="pathway-card" href={href} key={title} data-reveal data-cursor={cta.toUpperCase()}>
              <span className="pathway-card__number">0{index + 1}</span><span className="pathway-card__icon"><Icon name={icon} /></span><h3>{title}</h3><p>{body}</p><span className="pathway-card__link">{cta}<Icon name="arrow" /></span><i className="pathway-card__flare" aria-hidden="true" />
            </a>)}
          </div>
        </section>

        <section id="events" className="events-v2 section-pad" aria-labelledby="events-title">
          <div className="events-v2__intro" data-reveal><div><p className="kicker kicker--light">Meet · Learn · Exchange</p><h2 id="events-title">A global event network,<br/><em>made visible.</em></h2></div><p>Explore current gatherings across the wildland fire community. Each event can inherit one IAWF system while retaining its own identity.</p></div>
          <EventExplorer />
        </section>

        <section id="about" className="mission-v2 section-pad" aria-labelledby="mission-title">
          <div className="mission-v2__media" data-reveal data-cursor="GLOBAL COMMUNITY">
            <Image src="https://www.nps.gov/articles/000/images/NPS_Fuels_Management_ELMA_NPS_2023_5_Photo3.JPG?autorotate=false&maxwidth=650" alt="Firefighters mentoring one another during fuels reduction work" fill sizes="(max-width: 900px) 100vw, 46vw" />
            <div className="mission-v2__coordinates">FIELD / KNOWLEDGE / LEADERSHIP</div>
            <div className="mission-v2__frame" aria-hidden="true" />
          </div>
          <div className="mission-v2__copy" data-reveal>
            <p className="kicker">A neutral global forum</p>
            <h2 id="mission-title">Different disciplines.<br/><em>Shared purpose.</em></h2>
            <p className="mission-v2__lead">IAWF brings together experts across all aspects of wildland fire management to facilitate communication, strengthen understanding and provide leadership for the profession.</p>
            <div className="mission-v2__principles">
              <span><Icon name="globe"/><strong>Global linkage</strong><small>People and perspectives across borders</small></span>
              <span><Icon name="spark"/><strong>Knowledge exchange</strong><small>Science, practice and lived experience</small></span>
              <span><Icon name="shield"/><strong>Professional leadership</strong><small>Safety, stewardship and informed dialogue</small></span>
            </div>
            <a className="underlined-link" href="https://www.iawfonline.org/about-us/">Discover IAWF <span>↗</span></a>
          </div>
        </section>

        <section id="membership" className="membership-v2 section-pad" aria-labelledby="membership-title">
          <div className="membership-v2__mesh" aria-hidden="true" />
          <div className="membership-v2__intro" data-reveal><p className="kicker kicker--light">Membership</p><h2 id="membership-title"><span>More than</span><em>a subscription.</em><span>A professional community.</span></h2><div><p>Connect to publications, events, mentoring, leadership and peers working on the same complex fire challenges worldwide.</p><a className="cta-orbit cta-orbit--light" href="https://www.iawfonline.org/membership/" data-cursor="JOIN"><span>See membership options</span><i>↗</i></a></div></div>
          <div className="benefit-rail">
            {benefits.map(([icon,title,copy], index) => <article className="benefit-v2" key={title} data-reveal><span>0{index + 1}</span><Icon name={icon}/><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="membership-v2__numbers" data-reveal><div><strong>$80</strong><span>standard individual</span></div><div><strong>$20</strong><span>reduced-rate categories</span></div><div><strong>837</strong><span>members in 2025</span></div></div>
        </section>

        <section className="global-stat" aria-labelledby="global-stat-title">
          <div className="global-stat__map" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div>
          <div className="global-stat__content" data-reveal><p>2025 membership snapshot</p><div className="global-stat__number">41</div><h2 id="global-stat-title">countries.<br/><em>One community.</em></h2><small>One association connecting people across disciplines, agencies, regions and career stages.</small></div>
        </section>

        <section id="knowledge" className="knowledge-v2 section-pad" aria-labelledby="knowledge-title">
          <div className="knowledge-v2__header" data-reveal><div><p className="kicker">Knowledge & publications</p><h2 id="knowledge-title">A global fire journal,<br/><em>treated like one.</em></h2></div><div className="knowledge-v2__issue"><span>35.1</span><small>WILDFIRE MAGAZINE<br/>CURRENT ISSUE</small></div></div>
          <div className="editorial-feature" data-reveal data-cursor="READ ISSUE">
            <div className="editorial-feature__image"><Image src="https://home.army.mil/hawaii/3415/5727/0391/20190507_Army_WildlandFire_DripTorch.JPG" alt="Wildland firefighter using a drip torch during a prescribed burn" fill sizes="(max-width: 900px) 100vw, 58vw"/><span>FIELD NOTES / PROFESSIONAL PRACTICE</span></div>
            <div className="editorial-feature__copy"><p>Wildfire Magazine</p><h3>Stories, research and perspectives from across the profession.</h3><p>IAWF’s quarterly publication becomes a first-class editorial experience instead of another content archive.</p><a href="https://www.iawfonline.org/wildfire-magazine/">Read current issue <span>↗</span></a></div>
          </div>
          <div className="story-stack">
            {stories.map(([number,category,title,author]) => <a href="https://www.iawfonline.org/wildfire-magazine/" className="story-v2" key={title} data-reveal data-cursor="READ STORY"><span>{number}</span><small>{category}</small><strong>{title}</strong><em>{author}</em><i>↗</i></a>)}
          </div>
        </section>

        <section id="event-factory" className="factory-section section-pad" aria-labelledby="factory-title">
          <div className="factory-section__intro" data-reveal><p className="kicker">Event Site Factory</p><h2 id="factory-title">One system.<br/><em>Every event.</em></h2><p>The most important design idea in the proposal: reusable IAWF event sites that change intelligently from registration to live-event mode to permanent archive.</p></div>
          <EventFactoryDemo />
        </section>

        <section id="opportunities" className="opportunities-v2 section-pad" aria-labelledby="opportunities-title">
          <div className="section-intro" data-reveal><p className="kicker">Awards & opportunities</p><h2 id="opportunities-title">Recognize excellence.<br/><em>Grow what comes next.</em></h2></div>
          <div className="opportunity-grid-v2">
            {[["award","2027 cycle","IAWF Awards","Celebrate professionals making significant contributions to safety, leadership and the wildland fire community.","https://www.iawfonline.org/awards/"],["journal","Graduate support","Scholarships","Graduate-level support for members studying wildland fire-related topics.","https://www.iawfonline.org/scholarships/"],["mentor","Member program","Mentoring","Six-month professional relationships supported by guidance, resources and shared goals.","https://www.iawfonline.org/mentoring-program/"]].map(([icon,kicker,title,copy,href], index) => <a className="opportunity-v2" href={href} key={title} data-reveal data-cursor="EXPLORE"><span className="opportunity-v2__index">0{index + 1}</span><Icon name={icon as IconName}/><small>{kicker}</small><h3>{title}</h3><p>{copy}</p><i>↗</i></a>)}
          </div>
        </section>

        <section id="partners" className="partners-v2 section-pad" aria-labelledby="partners-title">
          <div className="partners-v2__copy" data-reveal><p className="kicker">Organizations & partners</p><h2 id="partners-title">Make partnership<br/><em>feel valuable.</em></h2><p>Consistent sponsor and organization modules can create meaningful recognition across the association site and every event microsite—without creating logo walls.</p><a className="underlined-link" href="https://www.iawfonline.org/organizational-membership-benefits-join/">Organizational membership <span>↗</span></a></div>
          <div className="partner-network" data-reveal>
            <div className="partner-network__orbit" aria-hidden="true"/><strong>IAWF</strong>
            {[["FENZ","New Zealand"],["ACT PCS","Australia"],["USFWS","United States"],["Yukon WFM","Canada"]].map(([name,country], index) => <span key={name} style={{"--partner-index": index} as React.CSSProperties}><b>{name}</b><small>{country}</small></span>)}
          </div>
        </section>

        <section className="closing-v2">
          <div className="closing-v2__line" aria-hidden="true" />
          <div className="closing-v2__copy" data-reveal><p>The fire community is global.</p><h2>So is <em>IAWF.</em></h2><span>One digital system for people, knowledge and recurring events.</span></div>
        </section>

        <section className="newsletter-v2" aria-labelledby="newsletter-title"><div data-reveal><p className="kicker kicker--light">Stay connected</p><h2 id="newsletter-title">Keep up with events,<br/>knowledge and opportunities.</h2><p>Production integration would use IAWF’s existing Constant Contact account and consent requirements.</p></div><NewsletterForm /></section>
      </main>

      <footer className="footer-v2"><div className="footer-v2__brand"><strong>IAWF</strong><span>International Association<br/>of Wildland Fire</span></div><div className="footer-v2__links"><a href="#about">About</a><a href="#membership">Membership</a><a href="#events">Events</a><a href="#knowledge">Knowledge</a><a href="#partners">Partners</a><a href="https://www.iawfonline.org/contact-us/">Contact ↗</a></div><div className="footer-v2__bottom"><span>Interactive proposal concept prepared by Codistan · Illustrative direction subject to IAWF discovery and approval.</span><span>WCAG 2.1 AA-minded · Mobile-first · Performance-budgeted</span></div></footer>
    </div>
  );
}
