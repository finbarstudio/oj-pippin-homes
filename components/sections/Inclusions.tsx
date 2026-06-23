"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { inclusions } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * The turn-key spec sheet — a dark gallery moment. A tall interior frame on the
 * left holds the promise; the four inclusion groups read like a printed spec
 * card on the right. Everything is already in the price; nothing in fine print.
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
      className="bg-umber px-6 md:px-16 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 lg:gap-x-16 xl:gap-x-24">
        {/* Left — the promise + feature image */}
        <div className="lg:col-span-5">
          <p className="inc-lead eyebrow text-clay-soft mb-5">
            Turn-Key Inclusions
          </p>
          <h2
            className="inc-lead text-cream font-light leading-[1.02] max-w-md"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
          >
            All-inclusive.
            <br />
            <span className="display-italic">No fine print.</span>
          </h2>
          <p className="inc-lead text-cream/70 text-base md:text-lg leading-relaxed font-normal mt-7 max-w-sm">
            Every fixture and finish below is in the price from the day you sign.
            No upgrade lists, no provisional sums — the home you walk through is
            the home you move into.
          </p>

          <figure className="inc-lead relative mt-12 md:mt-16 aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/homes/interior-kitchen.jpg"
              alt="Interior of a finished OJ Pippin kitchen — stone benchtops and full-height cabinetry"
              fill
              quality={88}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(34,28,22,0) 60%, rgba(34,28,22,0.45) 100%)",
              }}
            />
          </figure>
        </div>

        {/* Right — the four inclusion groups */}
        <div className="inc-groups lg:col-span-7 lg:col-start-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-12 md:gap-y-16">
            {inclusions.map((group) => (
              <div key={group.group} className="inc-item">
                <p className="eyebrow text-clay-soft mb-6">{group.group}</p>
                <ul className="border-t border-cream/12">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-cream/12 py-3.5 text-cream/80 text-[15px] md:text-base font-normal leading-snug"
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
