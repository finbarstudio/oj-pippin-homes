"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pillars } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * The reasons families choose OJ Pippin, five pillars set out as a calm,
 * editorial list. A numbered marker, a serif title and a plain-spoken line,
 * separated by hairline rules. Titles warm to clay on hover.
 */
export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pillar", {
        y: 32,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 68%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="why"
      className="bg-bone px-6 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <header className="max-w-3xl">
          <p className="eyebrow text-clay mb-5 md:mb-6">Why OJ Pippin</p>
          <h2
            className="text-ink font-light leading-[1.02]"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
          >
            Why families choose us.
          </h2>
        </header>

        <ul className="mt-14 md:mt-20">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className="pillar group border-t border-ink/12"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 py-8 md:py-11">
                {/* Marker */}
                <div className="md:col-span-1">
                  <span className="eyebrow text-clay/40 tabular-nums">
                    {String(i).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-5">
                  <h3 className="text-ink text-xl md:text-2xl font-light leading-tight transition-colors duration-500 ease-out group-hover:text-clay">
                    {pillar.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-xl">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
