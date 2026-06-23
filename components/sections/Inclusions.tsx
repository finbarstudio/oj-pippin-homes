"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskReveal from "@/components/MaskReveal";
import { inclusions } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * The turn-key spec sheet. A tall interior frame holds the promise; the four
 * inclusion groups read like a printed spec card. Everything is in the price.
 */
export default function Inclusions() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".inc-lead", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
      gsap.from(".inc-item", {
        y: 26,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: ".inc-groups", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="inclusions"
      className="bg-bone-2 px-6 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 xl:gap-x-24">
        {/* Left, the promise + feature image */}
        <div className="lg:col-span-5">
          <p className="inc-lead eyebrow text-clay mb-5">Turn-Key Inclusions</p>
          <h2
            className="inc-lead text-ink font-light leading-[1.02] max-w-md"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            All-inclusive.
            <br />
            <span className="display-italic">No fine print.</span>
          </h2>
          <p className="inc-lead text-ink-soft text-base md:text-lg leading-relaxed mt-7 max-w-sm">
            Every fixture and finish below is in the price from the day you sign.
            No upgrade lists, no provisional sums, the home you walk through is
            the home you move into.
          </p>

          <MaskReveal className="relative mt-12 md:mt-16 aspect-[4/5] w-full bg-ink/5">
            <Image
              src="/homes/interior-kitchen.jpg"
              alt="A finished OJ Pippin kitchen, stone benchtops and full-height cabinetry"
              fill
              quality={88}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </MaskReveal>
        </div>

        {/* Right, the four inclusion groups */}
        <div className="inc-groups lg:col-span-7 lg:col-start-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-12 md:gap-y-16">
            {inclusions.map((group) => (
              <div key={group.group} className="inc-item">
                <p className="eyebrow text-clay mb-6">{group.group}</p>
                <ul className="border-t border-ink/12">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-ink/12 py-3.5 text-ink-soft text-[15px] md:text-base leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
