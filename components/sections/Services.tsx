"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * "What We Do" — the full scope of the practice, set as a quiet six-cell grid.
 * Hairlines are drawn by a single bg-ink/10 wrapper showing through gap-px,
 * so every cell sits behind the same fine rule. Titles warm to clay on hover.
 */
export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-head", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 72%" },
      });
      gsap.from(".svc-item", {
        y: 32,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ".svc-grid", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="bg-bone px-6 md:px-16 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow → heading → intro */}
        <p className="svc-head eyebrow text-clay mb-5">What We Do</p>
        <h2
          className="svc-head text-ink font-light leading-[1.02] max-w-3xl"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
        >
          Everything, <span className="display-italic">under one roof.</span>
        </h2>
        <p className="svc-head text-ink-soft text-base md:text-lg leading-relaxed font-normal max-w-xl mt-6">
          One team and one contract, from the first sketch to the day you turn
          the key. Whatever the brief, the block or the budget — we build it.
        </p>

        {/* Six-cell grid — hairlines via gap-px over a bg-ink/10 wrapper */}
        <ul className="svc-grid mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-ink/10">
          {services.map((service) => (
            <li
              key={service.num}
              className="svc-item group bg-bone px-2 sm:px-7 md:px-8 py-9 md:py-11"
            >
              <span className="block eyebrow text-olive tabular-nums">
                {service.num}
              </span>
              <h3 className="text-ink font-light text-xl md:text-2xl leading-snug mt-5 transition-colors duration-500 group-hover:text-clay">
                {service.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed font-normal mt-3 max-w-xs">
                {service.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
