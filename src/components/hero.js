import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { RESUME_URL } from "../constants/urls.js";
const FLOATING_BADGES = [
  { label: "Python", icon: "fa-brands fa-python" },
  { label: "SentinelOne", icon: "fa-solid fa-shield-halved" },
  { label: "DevSecOps", icon: "fa-solid fa-infinity" },
  { label: "Security+", icon: "fa-solid fa-certificate" },
  { label: "Network+", icon: "fa-solid fa-certificate" },
  { label: "CySA+", icon: "fa-solid fa-certificate" },
];
const badgeTemplate = (badge, index, total) => {
  const angle = (360 / total) * index - 90;
  return html`
    <div
      class="hero-badge glass"
      style="--angle: ${angle}deg; animation-delay: -${index * 1.1}s"
      aria-hidden="true"
    >
      <i class="${badge.icon}" aria-hidden="true"></i>
      <span>${badge.label}</span>
    </div>
  `;
};
const heroTemplate = () => html`
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-mesh"></div>
    <div class="hero-blob hero-blob-1"></div>
    <div class="hero-blob hero-blob-2"></div>
    <div class="hero-blob hero-blob-3"></div>
  </div>
  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="hero-eyebrow" data-reveal>
        <span class="hero-status-dot"></span>
        Open to security & automation roles
      </p>
      <h1 class="hero-title" data-reveal>
        Merlin Martinez
      </h1>
      <p class="hero-role gradient-text-animated" data-reveal>IT Specialist & Jr. Security Operations Analyst</p>
      <p class="hero-description" data-reveal>
        I build automated Python-based workflows for security operations, harden
        systems against threats, and turn manual, repetitive tasks into fast,
        reliable defenses — with Python, SentinelOne, and Splunk at the core.
      </p>
      <div class="hero-cta-row" data-reveal>
        <a
          class="btn btn-primary magnetic ripple"
          href="${RESUME_URL}"
        >
          <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
          Resume
        </a>
        <a class="btn btn-secondary magnetic ripple" href="#experience">
          View Work
        </a>
        <a class="btn btn-ghost underline-link magnetic" href="#contact">
          Contact
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
      <p class="hero-resume-updated" data-reveal>Resume updated Jul 2026</p>
    </div>
    <div class="hero-visual" data-reveal>
      <div class="hero-orbit">
        <div class="hero-orbit-core glass">
          <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
        </div>
        ${FLOATING_BADGES.map((badge, i) => badgeTemplate(badge, i, FLOATING_BADGES.length))}
      </div>
    </div>
  </div>
  <a class="hero-scroll-cue underline-link" href="#about" aria-label="Scroll to About section">
    <span>Scroll</span>
    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
  </a>
`;
export function mountHero() {
  return mount("hero", heroTemplate());
}
