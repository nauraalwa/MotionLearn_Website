import { useEffect, useState } from "react";
import ArrowRight from "lucide-react/dist/esm/icons/arrow-right.js";
import BadgeAlert from "lucide-react/dist/esm/icons/badge-alert.js";
import Box from "lucide-react/dist/esm/icons/box.js";
import ChevronLeft from "lucide-react/dist/esm/icons/chevron-left.js";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right.js";
import Copy from "lucide-react/dist/esm/icons/copy.js";
import Disc3 from "lucide-react/dist/esm/icons/disc-3.js";
import Gauge from "lucide-react/dist/esm/icons/gauge.js";
import Instagram from "lucide-react/dist/esm/icons/instagram.js";
import Mail from "lucide-react/dist/esm/icons/mail.js";
import MessageCircle from "lucide-react/dist/esm/icons/message-circle.js";
import Play from "lucide-react/dist/esm/icons/play.js";
import Radio from "lucide-react/dist/esm/icons/radio.js";
import ScanEye from "lucide-react/dist/esm/icons/scan-eye.js";
import Waves from "lucide-react/dist/esm/icons/waves.js";
import gleapLogo from "./utils/gleap.png";
import humanoLogo from "./utils/humano.png";
import heroBackground from "./utils/background_1.jpg";
import logo from "./utils/logo.png";
import qrecLogo from "./utils/qrec.png";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Solution", href: "#solution" },
  { label: "Updates", href: "#updates" },
  { label: "Social", href: "#social" }
];

const aboutChallenges = [
  {
    title: "Hard to copy complex motion"
  },
  {
    title: "No live physical correction"
  },
  {
    title: "Mirrors only show 2D"
  }
];

const solutionCards = [
  {
    eyebrow: "Repetition & Precision",
    title: "Chrome Extension",
    copy:
      "Slow-down, compare, repeat workflow.",
    href: "#video-manipulator",
    icon: Play
  },
  {
    eyebrow: "3D Motion Review",
    title: "3D Youtube Overlay",
    copy:
      "Side-by-side 3D self-view with motion inspection.",
    href: "#unity-analysis",
    icon: Box
  },
  {
    eyebrow: "Real-Time Haptic Cues",
    title: "Haptic Feedback",
    copy:
      "Subtle wrist cues for timing, rhythm, and correction.",
    href: "#haptic-feedback",
    icon: Radio
  }
];

const supporters = [
  { name: "QREC", logo: qrecLogo },
  { name: "Humano", logo: humanoLogo },
  { name: "Gleap", logo: gleapLogo }
];

const updates = [
  {
    label: "Beta",
    title: "Beta release channel",
    copy: "Post new releases, tests, and early feature notes here as MotionLearn evolves."
  },
  {
    label: "Feature",
    title: "Video workflow experiments",
    copy: "Track improvements to repetition, precision review, and demo-video interaction."
  },
  {
    label: "Community",
    title: "Feedback-driven roadmap",
    copy: "Collect bug reports, coaching ideas, and athlete requests from the community."
  }
];

const rotatingWords = ["Anywhere", "Cheaper", "Faster", "Effective"];

function App() {
  const [activeUpdate, setActiveUpdate] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    handleMotionPreference();
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => mediaQuery.removeEventListener("change", handleMotionPreference);
  }, []);

  useEffect(() => {
    if (isCarouselPaused || prefersReducedMotion) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveUpdate((current) => (current + 1) % updates.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isCarouselPaused, prefersReducedMotion]);

  const showPreviousUpdate = () => {
    setActiveUpdate((current) => (current - 1 + updates.length) % updates.length);
  };

  const showNextUpdate = () => {
    setActiveUpdate((current) => (current + 1) % updates.length);
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap" aria-label="Primary navigation">
        <a className="brand" href="#hero" aria-label="MotionLearn home">
          <span className="brand-mark">
            <img src={logo} alt="" />
          </span>
          <span>MotionLearn</span>
        </a>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section
          className="hero"
          id="hero"
          style={{ "--hero-image": `url(${heroBackground})` }}
        >
          <div className="hero-content">
            <h1>MotionLearn</h1>
            <p className="hero-copy">
              Learning sports are meant to be{" "}
              <span className="rotating-word" aria-label={rotatingWords.join(", ")}>
                {rotatingWords.map((word) => (
                  <span key={word} aria-hidden="true">
                    {word}
                  </span>
                ))}
              </span>
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#beta">
                Try out our beta release
                <ArrowRight size={18} />
              </a>
              <a
                className="button button-secondary"
                href="https://discord.gg/placeholder"
                target="_blank"
                rel="noreferrer"
              >
                Give Feedback 
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p className="kicker">
              <Gauge size={16} />
              About Us
            </p>
            <h2>Sports learning is ready for an upgrade.</h2>
          </div>
          <div className="about-content">
            <p>
              Learning movements from a Youtube video gives these challenges:  
            </p>
            <div className="challenge-grid">
              {aboutChallenges.map((challenge, index) => {
                return (
                  <article className="challenge-card" key={challenge.title}>
                    <div className="challenge-card-top">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{challenge.title}</h3>
                  </article>
                );
              })}
            </div>
            <p className="about-closing">
              YouTube made sports knowledge available to everyone. MotionLearn
              makes that knowledge easier to copy, correct, and understand in motion.
            </p>
          </div>
        </section>

        <section className="section" id="solution">
          <div className="section-heading compact">
            <p className="kicker">
              <Disc3 size={16} />
              Solution
            </p>
            <h2>The 3-feature for sharper practice.</h2>
          </div>
          <p className="solution-intro">
            We turn sports learning into a clearer, more guided experience:
          </p>

          <div className="solution-grid">
            {solutionCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="solution-card" key={card.title}>
                  <div className="card-topline">
                    <span className="icon-box">
                      <Icon size={20} />
                    </span>
                    <span>{card.eyebrow}</span>
                  </div>
                  <div className="demo-video" aria-label={`${card.title} demo video placeholder`}>
                    <div className="play-ring">
                      <Play size={22} fill="currentColor" />
                    </div>
                    <span>Demo video</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section updates" id="updates">
          <div className="section-heading compact">
            <p className="kicker">
              <Waves size={16} />
              Updates
            </p>
            <h2>News and Updates</h2>
          </div>

          <div
            className="updates-carousel"
            id="beta"
            onBlur={() => setIsCarouselPaused(false)}
            onFocus={() => setIsCarouselPaused(true)}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            <div className="updates-carousel-shell">
              <button
                className="carousel-control carousel-control-prev"
                type="button"
                onClick={showPreviousUpdate}
                aria-label="Previous update"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="updates-list" aria-live="polite">
                <div
                  className="updates-track"
                  style={{ transform: `translateX(-${activeUpdate * 100}%)` }}
                >
                  {updates.map((update, index) => (
                    <article
                      className="update-card"
                      key={update.title}
                      aria-hidden={activeUpdate !== index}
                    >
                      <span>{update.label}</span>
                      <h3>{update.title}</h3>
                      <p>{update.copy}</p>
                    </article>
                  ))}
                </div>
              </div>

              <button
                className="carousel-control carousel-control-next"
                type="button"
                onClick={showNextUpdate}
                aria-label="Next update"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="carousel-dots" aria-label="Choose update">
              {updates.map((update, index) => (
                <button
                  className={activeUpdate === index ? "carousel-dot active" : "carousel-dot"}
                  type="button"
                  key={update.label}
                  onClick={() => setActiveUpdate(index)}
                  aria-label={`Show update: ${update.label}`}
                  aria-current={activeUpdate === index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section supported-by" aria-labelledby="supported-heading">
          <div className="section-heading compact">
            <p className="kicker">Supported By</p>
            <h2 id="supported-heading">Backed by those who believe in better learning.</h2>
          </div>
          <div className="supporter-grid">
            {supporters.map((supporter) => (
              <div className="supporter-logo" key={supporter.name}>
                <img src={supporter.logo} alt={`${supporter.name} logo`} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="social">
        <div>
          <a className="brand footer-brand" href="#hero">
            <span className="brand-mark">
              <img src={logo} alt="" />
            </span>
            <span>MotionLearn</span>
          </a>
          <p>Revolutionizing sports learning</p>
        </div>
        <div className="footer-link-groups" aria-label="Social and contact links">
          <div className="footer-link-group">
            <p>Join Our Community</p>
            <div className="social-links">
              <a href="https://instagram.com/motionlearn" target="_blank" rel="noreferrer">
                <Instagram size={18} />
                Instagram
              </a>
              <a href="https://discord.gg/placeholder" target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Discord
              </a>
            </div>
          </div>
          <div className="footer-link-group">
            <p>For Business Inquiries</p>
            <div className="social-links">
              <a href="mailto:hello@motionlearn.com">
                <Mail size={18} />
                Gmail
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
