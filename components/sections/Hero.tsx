"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "@/components/Preloader";
import PipMark from "@/components/PipMark";
import { company } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const META = [
  `Est. ${company.established}`,
  "1,000+ homes",
  `QBCC ${company.qbcc}`,
  "Brendale, QLD",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const topbarRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    gsap.set(
      [topbarRef.current, scrollRef.current],
      { opacity: 0 }
    );
    gsap.set(".hero-line", { y: 46, opacity: 0 });
    gsap.set(".hero-meta", { opacity: 0, y: 14 });
  }, []);

  const handlePreloaderComplete = () => {
    setPreloaderDone(true);
    window.dispatchEvent(new Event("ojp:intro-done"));

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: "none" })
      .to(topbarRef.current, { opacity: 1, duration: 0.8 }, "-=0.2")
      .to(
        ".hero-line",
        { y: 0, opacity: 1, duration: 1.05, stagger: 0.12 },
        "-=0.5"
      )
      .to(
        ".hero-meta",
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        "-=0.6"
      )
      .to(scrollRef.current, { opacity: 1, duration: 0.6 }, "-=0.3");

    // Parallax drift on the image
    gsap.to(imgRef.current, {
      yPercent: 16,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  return (
    <>
      {!preloaderDone && <Preloader onComplete={handlePreloaderComplete} />}

      <section
        ref={sectionRef}
        className="relative h-screen min-h-[620px] w-full overflow-hidden bg-umber"
      >
        {/* Full-bleed facade */}
        <div ref={imgRef} className="absolute inset-0 -top-[8%] h-[116%] will-change-transform">
          <Image
            src="/homes/facade-hero.jpg"
            alt="An OJ Pippin home, Brisbane"
            fill
            priority
            quality={88}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Warm tonal overlay + bottom gradient for legibility */}
        <div
          ref={overlayRef}
          className="absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(28,22,16,0.46) 0%, rgba(28,22,16,0.20) 38%, rgba(28,22,16,0.62) 100%)",
          }}
        />

        {/* In-hero top bar (cream over image) */}
        <div
          ref={topbarRef}
          className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 md:px-10 h-16 md:h-20"
        >
          <a href="/" className="flex items-center gap-2.5 text-cream">
            <PipMark className="h-5 md:h-6 w-auto" stroke="var(--cream)" strokeWidth={1.5} />
            <span className="wordmark text-[15px] md:text-base leading-none">OJ&nbsp;PIPPIN</span>
          </a>
          <a
            href="#contact"
            className="eyebrow text-cream/85 hover:text-cream transition-colors border-b border-cream/30 pb-1"
          >
            Free Consultation
          </a>
        </div>

        {/* Headline — lower-left, editorial */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-5 md:px-10 pb-28 md:pb-32">
          <p className="hero-meta eyebrow text-clay-soft mb-5 md:mb-7">
            Custom &amp; turn-key builder · Brisbane since {company.established}
          </p>
          <div ref={headlineRef} className="w-fit">
            <h1 className="text-cream font-light leading-[1.0]" style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.6rem)" }}>
              <span className="hero-line block">Homes built around</span>
              <span className="hero-line block display-italic">the way you live.</span>
            </h1>
          </div>
        </div>

        {/* Engraved meta-rail along the bottom */}
        <div
          ref={railRef}
          className="absolute bottom-0 left-0 right-0 z-20 border-t border-cream/15"
        >
          <div className="px-5 md:px-10 py-4 flex flex-wrap items-center gap-x-7 gap-y-2">
            {META.map((m) => (
              <span key={m} className="hero-meta eyebrow text-cream/70">
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div ref={scrollRef} className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-cream/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-clay-soft"
              style={{ height: "45%", animation: "scrollDrop 1.9s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
