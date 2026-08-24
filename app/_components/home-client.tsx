"use client";

import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import { siFacebook, siInstagram, siTiktok } from "simple-icons/icons";
import { ArrowUpRightIcon, CarIcon, FlagIcon, PersonIcon, RoadIcon, SearchIcon, SeatIcon } from "./icons";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const families = [
  ["911", "Sports Car", "Engineered for drivers who put tactile feel and performance first."],
  ["Taycan", "Electric Performance", "All-electric innovation tailored for exhilarating daily driving."],
  ["Macan", "Compact SUV", "Dynamic versatility designed for every pace of life."],
  ["Cayenne", "Full-size SUV", "Expansive capability with generous room for passengers and luggage."],
  ["Panamera", "Sports Sedan", "Everyday luxury paired seamlessly with authentic sports car DNA."],
  ["718", "Mid-Engine Sports Car", "Pure connection to the road with unmatched agility."]
] as const;

const questions = [
  ["Which body style would you like to explore?", ["Sports Car", "SUV", "Sports Sedan"]],
  ["When will you primarily drive your Porsche?", ["Daily Commute", "Weekends", "Both"]],
  ["Which powertrain do you prefer to start with?", ["All-Electric", "Combustion Engine", "Undecided"]]
] as const;

const familyImages = ["/images/v2/family-911.png", "/images/v2/family-taycan.png", "/images/v2/family-macan.png", "/images/v2/family-cayenne.png", "/images/v2/family-panamera.png", "/images/v2/family-718.png"] as const;
const inventoryImages = ["/images/v2/inventory-911.png", "/images/v2/inventory-taycan.png", "/images/v2/inventory-macan.png", "/images/v2/inventory-cayenne.png"];
const persistentModelNames: ReadonlySet<string> = new Set(families.map(([name]) => name));
const slug = (model: string) => model.toLowerCase().replaceAll(" ", "-");

function readStoredModels(key: string, maximum: number) {
  try {
    const value = window.localStorage.getItem(key);
    const parsed: unknown = value ? JSON.parse(value) : [];
    if (!Array.isArray(parsed)) return [];
    return [...new Set(parsed.filter((model): model is string => typeof model === "string" && persistentModelNames.has(model)))].slice(0, maximum);
  } catch { return []; }
}
function writeStoredModels(key: string, models: string[]) { try { window.localStorage.setItem(key, JSON.stringify(models)); } catch { /* Storage is an optional convenience. */ } }
const Arrow = ArrowUpRightIcon;
function SocialIcon({ path }: Readonly<{ path: string }>) { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>; }

export default function Home({ confidence }: Readonly<{ confidence: ReactNode }>) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [compare, setCompare] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [notice, setNotice] = useState("");
  const [finderDirection, setFinderDirection] = useState<"forward" | "back">("forward");
  const [finderStarted, setFinderStarted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [introLogoLeaving, setIntroLogoLeaving] = useState(false);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const [isFinalCtaInView, setIsFinalCtaInView] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const homeMainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const finderStageRef = useRef<HTMLDivElement>(null);
  const finderKeyboardAction = useRef(false);
  const compareTrayRef = useRef<HTMLDivElement>(null);
  const compareKeyboardRemoval = useRef(false);

  useEffect(() => { const frame = requestAnimationFrame(() => { setCompare(readStoredModels("mdop-compare", 3)); setSaved(readStoredModels("mdop-saved", persistentModelNames.size)); setHydrated(true); }); return () => cancelAnimationFrame(frame); }, []);
  useEffect(() => { if (hydrated) writeStoredModels("mdop-compare", compare); }, [compare, hydrated]);
  useEffect(() => { if (hydrated) writeStoredModels("mdop-saved", saved); }, [saved, hydrated]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => {
        setIntroDone(true);
        setIntroVisible(false);
      });
      return () => cancelAnimationFrame(frame);
    }
    const hideLogo = window.setTimeout(() => setIntroLogoLeaving(true), 900);
    const fadeOverlay = window.setTimeout(() => setIntroLeaving(true), 1150);
    const finish = window.setTimeout(() => {
      setIntroDone(true);
      setIntroVisible(false);
    }, 1400);
    return () => {
      window.clearTimeout(hideLogo);
      window.clearTimeout(fadeOverlay);
      window.clearTimeout(finish);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!introDone || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !homeMainRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const scope = homeMainRef.current;
    const header = headerRef.current || document.querySelector<HTMLElement>(".topbar");
    const heroImage = scope.querySelector<HTMLElement>(".hero-image");
    const heroItems = scope.querySelectorAll<HTMLElement>(".hero-panel h1, .hero-panel > p, .hero-panel .hero-actions, .hero-panel .utility-link");

    const context = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (header) {
        tl.fromTo(header, { autoAlpha: 0, y: -60 }, { autoAlpha: 1, y: 0, duration: 0.6, onComplete: () => { gsap.set(header, { clearProps: "transform" }); } });
      }

      if (heroImage) {
        tl.fromTo(heroImage, { autoAlpha: 0, x: 80 }, { autoAlpha: 1, x: 0, duration: 0.75, onComplete: () => { gsap.set(heroImage, { clearProps: "transform" }); } }, header ? "-=0.2" : 0);
      }

      tl.fromTo(heroItems, { autoAlpha: 0, x: -60 }, { autoAlpha: 1, x: 0, duration: 0.65, stagger: 0.12 }, heroImage ? "-=0.35" : 0);

      const sections = gsap.utils.toArray<HTMLElement>(scope.querySelectorAll(".hero-bridge, #content > section, footer"));
      sections.forEach((section) => {
        gsap.fromTo(section, { autoAlpha: 0, y: 42 }, { autoAlpha: 1, y: 0, duration: .72, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 88%", once: true } });
        Array.from(section.querySelectorAll<HTMLElement>("h2, h3, p, a, button, strong, small, span:not(.icon-mark)")).forEach((element, index) => {
          const tag = element.tagName;
          const from = tag === "H2" || tag === "H3" ? { x: -24 } : tag === "P" || tag === "A" ? { x: 24 } : tag === "BUTTON" ? { y: 18 } : { y: -12 };
          gsap.fromTo(element, { autoAlpha: 0, ...from }, { autoAlpha: 1, x: 0, y: 0, duration: .48, delay: Math.min(index * .025, .2), ease: "power3.out", scrollTrigger: { trigger: section, start: "top 84%", once: true } });
        });
      });
    }, scope);
    return () => context.revert();
  }, [introDone]);

  useEffect(() => {
    let previousScroll = window.scrollY;
    const updateHeader = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - previousScroll;
      if (currentScroll <= 12) setHeaderVisible(true);
      else if (Math.abs(delta) > 8) setHeaderVisible(delta < 0);
      previousScroll = currentScroll;
    };
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const finalCta = document.querySelector(".final-cta");
    if (!finalCta || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setIsFinalCtaInView(entry.isIntersecting), { threshold: .18 });
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!finderKeyboardAction.current) return;
    const frame = requestAnimationFrame(() => {
      finderStageRef.current?.querySelector<HTMLElement>("button, a")?.focus();
      finderKeyboardAction.current = false;
    });
    return () => cancelAnimationFrame(frame);
  }, [step]);

  useEffect(() => {
    if (!compareKeyboardRemoval.current) return;
    const frame = requestAnimationFrame(() => {
      const nextTarget = compareTrayRef.current?.querySelector<HTMLElement>("[data-compare-remove]") || document.getElementById("compare-select");
      nextTarget?.focus();
      compareKeyboardRemoval.current = false;
    });
    return () => cancelAnimationFrame(frame);
  }, [compare]);

  const recommendedModel = useMemo(() => {
    const [body, usage, power] = answers;
    if (body === "SUV") {
      if (power === "All-Electric") return "Macan";
      if (power === "Combustion Engine") return "Cayenne";
      return usage === "Daily Commute" ? "Macan" : "Cayenne";
    }
    if (body === "Sports Sedan") {
      if (power === "All-Electric") return "Taycan";
      if (power === "Combustion Engine") return "Panamera";
      return usage === "Weekends" ? "Panamera" : "Taycan";
    }
    if (power === "All-Electric") return "Taycan";
    return usage === "Weekends" ? "718" : "911";
  }, [answers]);

  const finderReasons = useMemo(() => {
    const [body, usage, power] = answers;
    return [
      body === "Sports Car" ? "you selected sports cars" : body === "SUV" ? "you are seeking SUV capability" : "you prefer a sports sedan",
      usage === "Daily Commute" ? "you prioritize everyday usability" : usage === "Weekends" ? "your focus is on weekend getaways" : "you want versatility for both daily and weekend driving",
      power === "All-Electric" ? "you want to explore electric performance first" : power === "Combustion Engine" ? "you want to explore combustion power first" : "you are open to all powertrain options"
    ];
  }, [answers]);

  const choose = (answer: string) => {
    setFinderDirection("forward");
    setAnswers((old) => [...old.slice(0, step), answer]);
    setStep((old) => old + 1);
    setNotice(`Selected: ${answer}.`);
  };

  const addCompare = (model: string) => setCompare((old) => {
    if (old.includes(model)) {
      setNotice(`Removed ${model} from comparison.`);
      return old.filter((item) => item !== model);
    }
    if (old.length === 3) {
      setNotice("You can compare up to 3 models.");
      return old;
    }
    setSelectedModel(model);
    setNotice(`Added ${model} to comparison.`);
    return [...old, model];
  });

  const removeCompare = (model: string) => setCompare((old) => {
    setNotice(`Removed ${model} from comparison.`);
    return old.filter((item) => item !== model);
  });

  const closeMobileMenu = (event: MouseEvent<HTMLAnchorElement>) => event.currentTarget.closest("details")?.removeAttribute("open");
  const focusSkippedContent = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.getElementById("content");
    target?.focus();
    target?.scrollIntoView({ block: "start" });
  };
  const recordFinderKeyboardAction = (event: KeyboardEvent<HTMLElement>) => { if (event.key === "Enter" || event.key === " ") finderKeyboardAction.current = true; };
  const recordCompareKeyboardRemoval = (event: KeyboardEvent<HTMLButtonElement>) => { if (event.key === "Enter" || event.key === " ") compareKeyboardRemoval.current = true; };

  const finderDone = step >= questions.length;
  const primaryModel = selectedModel || (finderDone ? recommendedModel : null);
  const compareHref = `/compare?models=${encodeURIComponent(compare.join(","))}`;
  const mobileAction = compare.length >= 2 ? { href: compareHref, label: `Compare ${compare.length} models` } : primaryModel ? { href: `/models/${slug(primaryModel)}`, label: `View ${primaryModel}` } : null;

  return (
    <>
      {introVisible && (
        <div className={`brand-intro${introLogoLeaving ? " brand-intro--logo-leaving" : ""}${introLeaving ? " brand-intro--leaving" : ""}`} aria-hidden="true">
          <span>MDOP</span>
        </div>
      )}
      <a className="skip-link" href="#content" onClick={focusSkippedContent}>Skip to content</a>
      <header ref={headerRef} className={`topbar${headerVisible ? "" : " topbar--hidden"}`}>
        <Link className="wordmark" href="/" aria-label="MDOP homepage">MDOP</Link>
        <nav aria-label="Main navigation">
          <a href="#families">Models</a>
          <a href="#finder">Configure Porsche</a>
          <a href="#inventory">Available Inventory</a>
          <a href="#compare">Compare</a>
          <a href="#ownership">Ownership</a>
          <a href="#top">About MDOP</a>
        </nav>
        <div className="utilities">
          <form className="search-control" role="search" onSubmit={(event) => { event.preventDefault(); setNotice("Search feature is coming soon."); }}>
            <label className="sr-only" htmlFor="site-search"></label>
            <button type="submit" aria-label="Open search"><SearchIcon /></button>
            <input id="site-search" name="q" type="search" placeholder="Search" autoComplete="off" />
          </form>
          <button type="button" className="account-control" onClick={() => setNotice("Account feature is coming soon.")}>
            <PersonIcon />
            <span>Account</span>
          </button>
        </div>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#families" onClick={closeMobileMenu}>Models</a>
            <a href="#finder" onClick={closeMobileMenu}>Configure Porsche</a>
            <a href="#inventory" onClick={closeMobileMenu}>Available Inventory</a>
            <a href="#compare" onClick={closeMobileMenu}>Compare</a>
            <a href="#ownership" onClick={closeMobileMenu}>Ownership</a>
            <Link href="/saved" onClick={closeMobileMenu}>Saved Vehicles ({saved.length})</Link>
            <a href="#top" onClick={closeMobileMenu}>About MDOP</a>
          </nav>
        </details>
      </header>

      <main ref={homeMainRef} className={`home-main${introDone ? " home-main--ready" : ""}`}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Image src="/images/v2/hero.png" alt="Porsche 911 in silver within dark architectural space" fill priority quality={85} sizes="100vw" className="hero-image" />
          <div className="hero-panel">
            <h1 id="hero-title"><span>Pure Performance.</span><span>Pure Emotion.</span></h1>
            <p>Discover model lines, choose your match,<br />and begin configuring your Porsche.</p>
            <div className="hero-actions">
              <a className="button light" href="#families">Explore Model Lines <ArrowUpRightIcon /></a>
              <a className="button outline" href="#finder">Configure Porsche <ArrowUpRightIcon /></a>
            </div>
            <a className="utility-link" href="#inventory">Available Inventory <ArrowUpRightIcon /></a>
          </div>
        </section>

        <section className="hero-bridge section-light" aria-labelledby="hero-bridge-title">
          <p>CHOOSE HOW YOU WANT TO BEGIN</p>
          <h2 id="hero-bridge-title">A Porsche for every lifestyle.</h2>
          <span aria-hidden="true" />
          <p>Starting from six model lines.</p>
        </section>

        <p key={notice} className="action-notice" role="status" aria-live="polite">{notice}</p>

        <div id="content" className="main-content-start" tabIndex={-1}>
          <section id="families" className="families section-light" aria-label="Porsche Model Lines">
            <div className="family-index" role="list">
              {families.map(([name, role], index) => (
                <article role="listitem" className={`family family-${index}${selectedModel === name ? " is-selected" : ""}`} key={name}>
                  <div className="family-photo" aria-hidden="true">
                    <Image src={familyImages[index]} alt="" fill sizes="(max-width: 699px) 100vw, (max-width: 850px) 50vw, (max-width: 1100px) 33vw, 17vw" />
                  </div>
                  <div className="family-copy">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{name}</h3>
                    <p>{role}</p>
                    <button type="button" onClick={() => addCompare(name)} aria-pressed={compare.includes(name)}>
                      {compare.includes(name) ? `Remove ${name} from compare` : `Add ${name} to compare`}
                    </button>
                  </div>
                </article>
              ))}
            </div>
            <p className="data-note">Pricing, specifications, and vehicle availability will only be displayed with verified data.</p>
          </section>

          <section id="finder" className="finder section-light" aria-labelledby="finder-title">
            <div className="finder-overview">
              <div className="finder-lead">
                <h2 id="finder-title"><span>Find the car</span><span>that fits you</span></h2>
                <p>Answer a few quick questions and we&apos;ll suggest the model line that best fits your lifestyle.</p>
                <button type="button" className="finder-start" onClick={() => setFinderStarted(true)}>Get Started</button>
              </div>
              <div className="finder-preference"><PersonIcon /><span>What is your priority?</span><strong>Performance</strong></div>
              <div className="finder-preference"><RoadIcon /><span>Where do you usually drive?</span><strong>Mixed Roads</strong></div>
              <div className="finder-preference"><SeatIcon /><span>How many seats do you need?</span><strong>4 Seats</strong></div>
              <div className="finder-preference"><FlagIcon /><span>Primary driving purpose?</span><strong>Daily Driving</strong></div>
            </div>

            {finderStarted && (
              <div className="finder-tool">
                <p className="sr-only" role="status" aria-live="polite">
                  {finderDone ? `Top recommendation: ${recommendedModel}.` : `Question ${step + 1} of ${questions.length}. ${questions[step][0]}`}
                </p>
                <div ref={finderStageRef} className={`finder-stage finder-stage--${finderDirection}`} key={`${step}-${finderDone ? "result" : "question"}`}>
                  {!finderDone ? (
                    <>
                      <div className="progress" aria-label={`Progress: question ${step + 1} of ${questions.length}`}>
                        <span>Question {step + 1} / {questions.length}</span>
                        <i aria-hidden="true" style={{ transform: `scaleX(${(step + 1) / questions.length})` }} />
                      </div>
                      {answers.length > 0 && <p className="answer-summary">Current selections: {answers.join(" · ")}</p>}
                      <fieldset className="finder-question">
                        <legend>{questions[step][0]}</legend>
                        <div className="choice-list">
                          {questions[step][1].map((answer) => (
                            <button type="button" key={answer} onClick={() => choose(answer)} onKeyDown={recordFinderKeyboardAction}>
                              {answer}<Arrow />
                            </button>
                          ))}
                        </div>
                      </fieldset>
                      <div className="finder-recovery">
                        {step > 0 && (
                          <button type="button" className="text-button" onClick={() => { setFinderDirection("back"); setStep(step - 1); setAnswers((old) => old.slice(0, -1)); setNotice("Returned to previous question."); }} onKeyDown={recordFinderKeyboardAction}>
                            ← Previous question
                          </button>
                        )}
                        <Link className="text-link" href="/models">View all model lines <Arrow /></Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3>Top recommendation: {recommendedModel}</h3>
                      <p><strong>Matches your selections because:</strong> {finderReasons.join("; ")}.</p>
                      <p>This recommendation is based on your current selections and does not replace tailored consultation.</p>
                      <div className="result-actions">
                        <Link className="button dark" href={`/models/${slug(recommendedModel)}?from=finder`} onClick={() => setSelectedModel(recommendedModel)}>
                          View {recommendedModel} <Arrow />
                        </Link>
                        <Link className="text-link" href={`/configure/${slug(recommendedModel)}`}>
                          Configure {recommendedModel} <Arrow />
                        </Link>
                        <button type="button" className="text-button" onClick={() => { setFinderDirection("back"); setStep(0); setAnswers([]); setFinderStarted(false); setNotice("You can start over from the recommendations."); }} onKeyDown={recordFinderKeyboardAction}>
                          Start Over
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </section>

          <section id="featured" className="featured" aria-labelledby="featured-title">
            <Image src="/images/v2/featured.png" alt="Porsche 911 Carrera in silver profile against dark background" fill sizes="(max-width: 850px) 100vw, 90vw" className="feature-image" />
            <div className="feature-card">
              <p>Spotlight</p>
              <h2 id="featured-title">911 Carrera</h2>
              <span aria-hidden="true" />
              <p className="feature-statement">Experience pure sports car driving dynamics with timeless design.</p>
              <div className="hero-actions">
                <Link className="button feature-primary" href="/models/911" onClick={() => setSelectedModel("911")}>Learn More <Arrow /></Link>
                <Link className="text-link" href="/configure/911" onClick={() => setSelectedModel("911")}>Configure Now <Arrow /></Link>
              </div>
            </div>
          </section>

          <section id="compare" className="compare section-light" aria-labelledby="compare-title">
            <div className="compare-lead">
              <h2 id="compare-title">Compare Models</h2>
              <p>Select up to 3 models to quickly compare key characteristics.</p>
              {compare.length >= 2 ? <Link className="text-link" href={compareHref}>Compare {compare.length} models <Arrow /></Link> : <a id="compare-select" className="text-link" href="#families">Start Comparing <Arrow /></a>}
            </div>
            <div ref={compareTrayRef} key={compare.join("-")} className="compare-slots" aria-label="Models selected for comparison">
              {Array.from({ length: 3 }, (_, index) => compare[index]).map((model, index) => model ? (
                <button type="button" key={model} data-compare-remove className="compare-slot compare-slot--picked" onClick={() => removeCompare(model)} onKeyDown={recordCompareKeyboardRemoval}>
                  <CarIcon />
                  <span>{model}</span>
                  <small>Remove from compare</small>
                </button>
              ) : (
                <a href="#families" className="compare-slot" key={`empty-${index}`}>
                  <CarIcon />
                  <span>Select a model</span>
                </a>
              ))}
            </div>
          </section>

          <section id="inventory" className="inventory section-light" aria-labelledby="inventory-title">
            <div className="inventory-head">
              <h2 id="inventory-title">Available Inventory</h2>
              <Link className="text-link" href="/inventory">View all inventory <Arrow /></Link>
            </div>
            <div className="inventory-list">
              {["911 Carrera", "Taycan", "Macan", "Cayenne"].map((model, index) => (
                <Link href={`/inventory?vehicle=${slug(model)}`} onClick={() => setSelectedModel(model)} key={model} className="inventory-card">
                  <div className={`inventory-photo p${index}`}>
                    <Image src={inventoryImages[index]} alt={`${model} in showroom space`} fill sizes="(max-width: 699px) 82vw, (max-width: 1100px) 50vw, 25vw" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {confidence}

          <section className="final-cta" aria-labelledby="final-title">
            <Image src="/images/v2/final.png" alt="Porsche showroom space with warm ambient lighting" fill sizes="100vw" className="final-image" />
            <div>
              <h2 id="final-title">Begin Your Journey<br />with MDOP</h2>
              <p>Our team of Porsche specialists is always ready to guide your ownership path.</p>
              <div className="hero-actions">
                <Link className="button feature-primary" href={`/contact${primaryModel ? `?model=${slug(primaryModel)}` : ""}`}>Contact Consultation <Arrow /></Link>
                <Link className="text-link" href="/contact">Find Nearest Center <Arrow /></Link>
              </div>
            </div>
          </section>
        </div>

        <footer id="site-footer">
          <div className="footer-main">
            <section className="footer-brand" aria-label="MDOP">
              <Link className="wordmark" href="/">MDOP</Link>
              <p>Make Dreams. Own Porsche.</p>
              <p>Discover, configure, and begin your Porsche ownership journey.</p>
              <p>This is a portfolio/design-study; no actual commercial transactions are performed.</p>
              <div className="footer-social" aria-label="MDOP Social Channels">
                <button type="button" aria-label="Facebook" onClick={() => setNotice("Facebook channel is coming soon.")}>
                  <SocialIcon path={siFacebook.path} />
                </button>
                <button type="button" aria-label="Instagram" onClick={() => setNotice("Instagram channel is coming soon.")}>
                  <SocialIcon path={siInstagram.path} />
                </button>
                <button type="button" aria-label="TikTok" onClick={() => setNotice("TikTok channel is coming soon.")}>
                  <SocialIcon path={siTiktok.path} />
                </button>
              </div>
            </section>
            <nav aria-label="Discover Porsche">
              <h2>Discover</h2>
              <a href="#families">Models</a>
              <a href="#compare">Compare Models</a>
              <a href="#inventory">Available Inventory</a>
              <Link href="/saved">Saved Vehicles</Link>
            </nav>
            <nav aria-label="Begin Your Journey">
              <h2>Begin</h2>
              <a href="#finder">Configure Porsche</a>
              <Link href="/contact">Book Test Drive</Link>
              <Link href="/contact">1:1 Consultation</Link>
              <Link href="/contact">Find Nearest Center</Link>
            </nav>
            <section className="footer-support" aria-labelledby="footer-support-title">
              <h2 id="footer-support-title">Ownership Support</h2>
              <p>Our specialist team will help guide your next step: exploring models, configuring, scheduling a test drive, or direct consultation.</p>
              <Link className="button light" href="/contact">Contact Consultation <Arrow /></Link>
              <p className="footer-status">Official contact information, booking schedules, and social channels will only appear when verified.</p>
            </section>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} MDOP. Make Dreams. Own Porsche.</p>
            <div>
              <a href="#top">Back to top <Arrow /></a>
              <button type="button" onClick={() => setNotice("Terms of service are being updated.")}>Terms</button>
              <button type="button" onClick={() => setNotice("Privacy policy is being updated.")}>Privacy Policy</button>
            </div>
          </div>
        </footer>
      </main>
      {mobileAction && !isFinalCtaInView && (
        <div className="mobile-action">
          <Link key={mobileAction.label} href={mobileAction.href}>{mobileAction.label} <Arrow /></Link>
        </div>
      )}
    </>
  );
}

