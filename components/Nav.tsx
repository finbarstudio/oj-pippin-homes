"use client";

import { useEffect, useState } from "react";
import PipMark from "@/components/PipMark";

const LEFT = [
  { label: "Home Designs", href: "/designs" },
  { label: "What We Do", href: "/#services" },
  { label: "Inclusions", href: "/#inclusions" },
];
const RIGHT = [
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];
const ALL = [...LEFT, ...RIGHT];

export default function Nav({
  immediate = false,
}: {
  immediate?: boolean;
} = {}) {
  const [revealed, setRevealed] = useState(immediate);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (immediate) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setRevealed(true);
      cleanup();
    };
    const onScroll = () => {
      if (window.scrollY > 40) reveal();
    };
    window.addEventListener("ojp:intro-done", reveal);
    window.addEventListener("scroll", onScroll, { passive: true });
    const fallback = window.setTimeout(reveal, 6000);
    function cleanup() {
      window.removeEventListener("ojp:intro-done", reveal);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(fallback);
    }
    return cleanup;
  }, [immediate]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass =
    "eyebrow text-ink-soft hover:text-clay transition-colors whitespace-nowrap";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-bone/90 backdrop-blur-md transition-transform duration-700 ease-out ${
          revealed ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex md:grid md:grid-cols-[1fr_auto_1fr] items-center h-14 px-5 md:px-10 border-b border-ink/8">
          {/* Left links */}
          <ul className="hidden md:flex items-center gap-8">
            {LEFT.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Centre — emblem + wordmark */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-ink hover:text-clay transition-colors md:justify-self-center"
          >
            <PipMark className="h-5 w-auto" strokeWidth={1.6} />
            <span className="wordmark text-[15px] leading-none whitespace-nowrap">
              OJ&nbsp;PIPPIN
            </span>
          </a>

          {/* Right links + hamburger */}
          <div className="flex items-center justify-end ml-auto md:ml-0">
            <ul className="hidden md:flex items-center gap-8">
              {RIGHT.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-[5px] relative z-[60]"
            >
              <span
                className={`block h-px bg-ink transition-all duration-300 ${
                  menuOpen ? "w-6 rotate-45 translate-y-[3px]" : "w-6"
                }`}
              />
              <span
                className={`block h-px bg-ink transition-all duration-300 ${
                  menuOpen ? "w-6 -rotate-45 -translate-y-[3px]" : "w-4"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-bone flex flex-col px-6 pt-24 gap-1 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {ALL.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="display text-ink text-3xl py-3 border-b border-ink/10"
          >
            {l.label}
          </a>
        ))}
        <a
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="eyebrow text-clay mt-6"
        >
          Free Consultation →
        </a>
      </div>
    </>
  );
}
