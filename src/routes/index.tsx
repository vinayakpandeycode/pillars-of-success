import { createFileRoute } from "@tanstack/react-router";
import { Menu, Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/four-pillars-logo.png.asset.json";
import collaborationAsset from "@/assets/meraki-four-pillars.jpeg.asset.json";
import videoAsset from "@/assets/meraki-walkthrough.mp4.asset.json";
import towerAsset from "@/assets/nirvana-residences-tower.jpg.asset.json";
import entryAsset from "@/assets/nirvana-residences-entry.jpg.asset.json";

const title = "Four Pillars Business Advisory | Connecting Markets. Creating Opportunities.";
const description =
  "Four Pillars Business Advisory connects businesses, investors and strategic opportunities across GCC, South Asia, Africa and Australia through strategic consulting, market entry, partnerships, expansion and real estate advisory.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fourpillars.ae" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://fourpillars.ae" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Four Pillars Business Advisory",
          url: "https://fourpillars.ae",
          description,
          areaServed: ["GCC", "South Asia", "Africa", "Australia"],
          serviceType: [
            "Strategic consulting",
            "Market entry",
            "Strategic partnerships",
            "Business expansion",
            "Real estate advisory",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  ["Strategic consulting", "Strategic direction, commercial positioning and decision support for businesses entering or expanding within new markets."],
  ["Cross-border market entry", "Market intelligence, local positioning and practical support for businesses establishing a presence in new regions."],
  ["Strategic partnerships", "Connecting businesses with relevant partners, stakeholders and decision-makers to accelerate opportunity."],
  ["Business expansion & scaling", "Helping established businesses identify new markets, partnerships and scalable growth opportunities."],
  ["Opportunity & investment advisory", "Identifying relevant commercial and real estate opportunities and helping clients evaluate the path forward."],
  ["Network & market access", "Access to relevant market relationships, business networks and local opportunity ecosystems."],
];

const approach = [
  ["Targeted ambition", "Define the objective, market and desired outcome."],
  ["Market intelligence", "Understand the market, opportunity landscape and commercial environment."],
  ["Trusted network", "Identify the right relationships, partners and decision-makers."],
  ["Flawless execution", "Translate strategy into action and measurable progress."],
];

const sectors = [
  ["Education", "Market development, partnerships and expansion opportunities across education ecosystems."],
  ["Real estate", "Strategic access to real estate opportunities, developments and market relationships."],
  ["Hospitality", "Commercial growth, market entry and strategic partnerships across hospitality."],
  ["Food & consumer products", "Market access, distribution relationships and expansion opportunities."],
];

const markets = [
  ["GCC", "A strategic gateway for businesses seeking regional expansion and commercial opportunity."],
  ["South Asia", "A high-growth ecosystem connecting talent, enterprise and emerging opportunities."],
  ["Africa", "A diverse landscape of developing markets and long-term commercial potential."],
  ["Australia", "A mature market offering opportunities for international collaboration and expansion."],
];

const principles = [
  ["Market knowledge", "Understanding the commercial environment before recommending a direction."],
  ["Relevant connections", "Access to relationships that can create practical opportunities."],
  ["Strategic clarity", "Turning complex markets and opportunities into clear next steps."],
  ["Execution focus", "Moving from conversation to action."],
];

const navItems = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Real Estate", "#real-estate"],
  ["Projects", "#real-estate"],
] as const;

function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" aria-label="Four Pillars Business Advisory home" className="brand-link">
      <img
        src={logoAsset.url}
        alt="Four Pillars Business Advisory"
        width="360"
        height="345"
        className={compact ? "brand-logo brand-logo-compact" : "brand-logo"}
      />
    </a>
  );
}

function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      await video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    video.volume = nextMuted ? 0 : 1;
    setIsMuted(nextMuted);
  };

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <BrandLogo />
        <nav aria-label="Primary navigation" className="desktop-nav">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <Button asChild variant="hero" size="lg"><a href="#contact">Schedule a consultation</a></Button>
        </nav>
        <Button
          variant="hero-outline"
          size="icon"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
        <nav id="mobile-navigation" aria-label="Mobile navigation" className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}>
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Schedule a consultation</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <video
            ref={videoRef}
            className="hero-video"
            src={videoAsset.url}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlay={() => setIsPaused(false)}
            onPause={() => setIsPaused(true)}
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">Business advisory · Market access · Real estate</p>
            <h1 id="hero-title">Connecting Markets.<br />Creating Opportunities.<br />Scaling Businesses.</h1>
            <p className="hero-copy">Four Pillars Business Advisory connects businesses, investors and strategic opportunities across high-growth markets — with a focus on market entry, partnerships, expansion and real estate.</p>
            <div className="hero-actions">
              <Button asChild variant="hero" size="lg"><a href="#about">Explore our approach</a></Button>
              <Button asChild variant="hero-outline" size="lg"><a href="#contact">Schedule a consultation</a></Button>
            </div>
          </div>
          <div className="video-controls" aria-label="Video controls">
            <button type="button" onClick={togglePlayback} aria-label={isPaused ? "Play hero video" : "Pause hero video"}>
              {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}<span>{isPaused ? "Play" : "Pause"}</span>
            </button>
            <button type="button" onClick={toggleSound} aria-label={isMuted ? "Turn hero video sound on" : "Turn hero video sound off"}>
              {isMuted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}<span>{isMuted ? "Sound off" : "Sound on"}</span>
            </button>
          </div>
        </section>

        <section id="about" className="section light-section">
          <div className="section-grid" data-reveal>
            <div><p className="eyebrow">01 / About Four Pillars</p><h2>Where strategy<br />meets opportunity.</h2></div>
            <div className="body-copy">
              <p>Four Pillars Business Advisory helps businesses navigate new markets, build strategic relationships and identify opportunities for sustainable growth.</p>
              <p>We work across business advisory, market entry, strategic partnerships, expansion and real estate — connecting the right people, markets and opportunities to create meaningful outcomes.</p>
              <div className="market-line" aria-label="Markets served"><span>GCC</span><span>South Asia</span><span>Africa</span><span>Australia</span></div>
            </div>
          </div>
        </section>

        <section className="section dark-section positioning" aria-label="Our positioning">
          <div className="positioning-list" data-reveal>
            {["Market entry", "Strategic partnerships", "Business expansion", "Real estate opportunities"].map((item, index) => (
              <div className="positioning-row" key={item}><span>{String(index + 1).padStart(2, "0")}</span><h2>{item}</h2></div>
            ))}
          </div>
        </section>

        <section id="services" className="section light-section">
          <div className="section-intro" data-reveal><p className="eyebrow">02 / Our services</p><h2>Advisory built around<br />your next move.</h2></div>
          <div className="editorial-list" data-reveal>
            {services.map(([name, copy], index) => (
              <article key={name} className="editorial-row"><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section id="approach" className="section dark-section">
          <div className="section-intro" data-reveal><p className="eyebrow">03 / Our approach</p><h2>From ambition<br />to execution.</h2></div>
          <div className="four-grid" data-reveal>
            {approach.map(([name, copy], index) => <article key={name}><span className="giant-number">{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="section light-section">
          <div className="section-intro" data-reveal><p className="eyebrow">04 / Sectors</p><h2>Built around sectors<br />with room to grow.</h2></div>
          <div className="sector-grid" data-reveal>
            {sectors.map(([name, copy], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="section dark-section">
          <div className="section-intro" data-reveal><p className="eyebrow">05 / Markets</p><h2>Connecting businesses across<br />high-growth markets.</h2></div>
          <div className="market-grid" data-reveal>
            {markets.map(([name, copy]) => <article key={name}><h3>{name}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="section light-section collaboration">
          <div className="collaboration-grid" data-reveal>
            <div className="collaboration-image-wrap"><img src={collaborationAsset.url} width="1491" height="1055" loading="lazy" alt="Meraki and Four Pillars collaboration mark" /></div>
            <div><p className="eyebrow">06 / Strategic collaboration</p><h2>Two perspectives.<br />One stronger opportunity.</h2><p>Four Pillars Business Advisory collaborates with Meraki to bring together strategic business advisory, market access and real estate opportunity.</p><p>The collaboration is designed around creating stronger pathways between businesses, markets and investment opportunities.</p><Button asChild variant="editorial" size="lg"><a href="#real-estate">Explore the collaboration</a></Button></div>
          </div>
        </section>

        <section id="real-estate" className="section dark-section project-section">
          <div className="section-intro project-intro" data-reveal><div><p className="eyebrow">07 / Real estate</p><h2>Opportunities worth<br />looking closer at.</h2></div><p>Project 01<br /><strong>Nirvana Residences I</strong><br />Dubai / Me'aisem</p></div>
          <div className="project-gallery" data-reveal>
            <img src={towerAsset.url} width="1061" height="1447" loading="lazy" alt="Architectural rendering of Nirvana Residences I tower in Me'aisem, Dubai" />
            <img src={entryAsset.url} width="1061" height="1447" loading="lazy" alt="Architectural rendering of the landscaped entrance at Nirvana Residences I" />
          </div>
          <div className="project-facts" data-reveal>
            <article><span>Type</span><strong>Residential</strong></article>
            <article><span>Residences</span><strong>392</strong></article>
            <article><span>Storeys</span><strong>22</strong></article>
            <article><span>Plot area</span><strong>52,085.92 sq ft</strong></article>
          </div>
          <div className="unit-mix" data-reveal>
            <p>Building composition</p><h3>2 basements + ground + 2 podiums + 19 floors + rooftop</h3>
            <div><span>127 Studios</span><span>178 One-bedroom</span><span>84 Two-bedroom</span><span>3 Three-bedroom</span></div>
          </div>
        </section>

        <section className="section light-section">
          <div className="section-intro" data-reveal><p className="eyebrow">08 / Why Four Pillars</p><h2>The value is<br />in the connection.</h2></div>
          <div className="principles-list" data-reveal>{principles.map(([name, copy]) => <article key={name}><h3>{name}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section id="contact" className="section dark-section final-cta">
          <div data-reveal><p className="eyebrow">Start a conversation</p><h2>Your next market<br />could be closer than you think.</h2><p>Tell us where you want to go, what you want to build, or which opportunity you are exploring.</p><p>Four Pillars Business Advisory can help define the next move.</p><div className="hero-actions"><Button asChild variant="hero" size="lg"><a href="https://fourpillars.ae">Schedule a consultation</a></Button><Button asChild variant="hero-outline" size="lg"><a href="https://fourpillars.ae">Contact Four Pillars</a></Button></div><a className="domain-link" href="https://fourpillars.ae">fourpillars.ae</a></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main"><BrandLogo compact /><nav aria-label="Footer navigation">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}<a href="#contact">Contact</a></nav><Button asChild variant="hero" size="lg"><a href="#contact">Schedule a consultation</a></Button></div>
        <div className="footer-bottom"><span>© 2026 Four Pillars Business Advisory</span><span>All rights reserved.</span><a href="https://fourpillars.ae">fourpillars.ae</a></div>
      </footer>
    </div>
  );
}
