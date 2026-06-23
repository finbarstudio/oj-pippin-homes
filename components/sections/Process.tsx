"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { process } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * The build journey, told plainly, five steps from first sketch to keys.
 * A vertical ledger of hairline-ruled rows: big quiet step numbers, a titled
 * column, and the detail running long beside it. Editorial, unhurried.
 */
export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-row", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".step-list", start: "top 72%" },
      });
      gsap.fromTo(
        ".step-rule",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          stagger: 0.12,
          scrollTrigger: { trigger: ".step-list", start: "top 74%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="process"
      className="bg-bone-2 px-6 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <p className="eyebrow text-clay mb-5 md:mb-6">How It Works</p>

      <h2
        className="text-ink font-light leading-[1.02] max-w-4xl mb-14 md:mb-20"
        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}
      >
        From first sketch to <span className="display-italic">keys.</span>
      </h2>

      <ol className="step-list">
        {process.map((step) => (
          <li key={step.num} className="step-row group">
            <div className="relative border-t border-ink/12 py-9 md:py-12">
              {/* animated hairline overlay, drawn left-to-right on reveal */}
              <span className="step-rule absolute -top-px left-0 right-0 h-px bg-ink/25 origin-left" />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-baseline md:gap-10">
                {/* Step number */}
                <div className="md:col-span-2">
                  <span
                    className="block font-light leading-none tabular-nums text-ink/30 transition-colors duration-500 group-hover:text-olive"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-2xl font-light leading-tight text-ink transition-colors duration-300 group-hover:text-clay">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="max-w-xl text-base md:text-lg font-normal leading-relaxed text-ink-soft">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
