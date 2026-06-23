"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { services } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

/**
 * "What We Do" — a six-cell grid whose dividing lines are drawn in by two small
 * dots branching from the top-right corner down to the bottom-left. Each card
 * fades up as the branches reach it.
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

      const lines = gsap.utils.toArray<SVGPathElement>(".svc-line");
      lines.forEach((l) => {
        const len = l.getTotalLength();
        gsap.set(l, { strokeDasharray: len, strokeDashoffset: len });
      });
      gsap.set([".svc-dot-a", ".svc-dot-b"], { opacity: 0 });

      // top-right → bottom-left reveal order for the six cards (row-major 0..5)
      const order = [0.42, 0.21, 0, 0.63, 0.42, 0.21];

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".svc-grid", start: "top 74%" },
      });
      tl.to(".svc-dot-a, .svc-dot-b", { opacity: 1, duration: 0.3 }, 0)
        .to(lines, { strokeDashoffset: 0, duration: 1.6, ease: "power1.inOut", stagger: 0.12 }, 0)
        .to(
          ".svc-dot-a",
          { motionPath: { path: "#svc-guide-a", align: "#svc-guide-a", alignOrigin: [0.5, 0.5] }, duration: 1.7, ease: "power1.inOut" },
          0
        )
        .to(
          ".svc-dot-b",
          { motionPath: { path: "#svc-guide-b", align: "#svc-guide-b", alignOrigin: [0.5, 0.5] }, duration: 1.7, ease: "power1.inOut" },
          0
        )
        .to(".svc-dot-a, .svc-dot-b", { opacity: 0, duration: 0.4 }, 1.5)
        .from(
          ".svc-item",
          {
            opacity: 0,
            y: 26,
            duration: 0.8,
            ease: "power3.out",
            stagger: (i: number) => order[i] ?? 0,
          },
          0.25
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="bg-bone px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="svc-head eyebrow text-clay mb-5">What We Do</p>
        <h2
          className="svc-head text-ink font-light leading-[1.02] max-w-3xl"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
        >
          Everything, <span className="display-italic">under one roof.</span>
        </h2>
        <p className="svc-head text-ink-soft text-base md:text-lg leading-relaxed max-w-xl mt-6">
          One team and one contract, from the first sketch to the day you turn
          the key. Whatever the brief, the block or the budget, we build it.
        </p>

        {/* Grid + branch overlay */}
        <div className="svc-grid relative mt-14 md:mt-20">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <li
                key={service.num}
                className="svc-item group px-2 sm:px-7 md:px-8 py-9 md:py-11"
              >
                <span className="block eyebrow text-olive tabular-nums">{service.num}</span>
                <h3 className="text-ink font-light text-xl md:text-2xl leading-snug mt-5 transition-colors duration-500 group-hover:text-clay">
                  {service.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed mt-3 max-w-xs">
                  {service.desc}
                </p>
              </li>
            ))}
          </ul>

          {/* Branch lines + travelling dots, drawn over the grid */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 300 200"
            preserveAspectRatio="none"
            aria-hidden
          >
            <g stroke="var(--ink)" strokeOpacity="0.16" strokeWidth="0.6" vectorEffect="non-scaling-stroke" fill="none">
              <path className="svc-line" d="M300 0 H0" />
              <path className="svc-line" d="M200 0 V200" />
              <path className="svc-line" d="M300 100 H0" />
              <path className="svc-line" d="M100 0 V200" />
              <path className="svc-line" d="M300 200 H0" />
            </g>
            {/* Invisible guides for the two dots */}
            <path id="svc-guide-a" d="M300 0 V200 H0" fill="none" stroke="none" />
            <path id="svc-guide-b" d="M300 0 H0 V200" fill="none" stroke="none" />
            <circle className="svc-dot-a" r="2.4" fill="var(--clay)" />
            <circle className="svc-dot-b" r="2.4" fill="var(--clay)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
