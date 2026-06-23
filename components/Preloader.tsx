"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

/**
 * Opening sequence — the pip emblem draws itself, the wordmark rises, then the
 * whole bone screen lifts away. The signature first impression.
 */
export default function Preloader({ onComplete }: PreloaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const seedRef = useRef<SVGPathElement>(null);
  const veinRef = useRef<SVGPathElement>(null);
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    gsap.set([seedRef.current, veinRef.current], {
      strokeDasharray: 1,
      strokeDashoffset: 1,
    });
    gsap.set(markRef.current, { opacity: 0, yPercent: 40 });

    tl.to(seedRef.current, {
      strokeDashoffset: 0,
      duration: 1.1,
      ease: "power2.inOut",
    })
      .to(
        veinRef.current,
        { strokeDashoffset: 0, duration: 0.7, ease: "power2.out" },
        "-=0.55"
      )
      .to(
        markRef.current,
        { opacity: 1, yPercent: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      )
      .to({}, { duration: 0.5 })
      .to(ref.current, {
        yPercent: -100,
        duration: 0.95,
        ease: "power3.inOut",
      });
  }, [onComplete]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] bg-bone flex flex-col items-center justify-center gap-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 96"
        className="w-12 h-auto"
        fill="none"
      >
        <path
          ref={seedRef}
          d="M32 4 C 15 28, 15 68, 32 92 C 49 68, 49 28, 32 4 Z"
          pathLength={1}
          stroke="var(--ink)"
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
        <path
          ref={veinRef}
          d="M32 16 C 27 40, 27 58, 32 80"
          pathLength={1}
          stroke="var(--clay)"
          strokeWidth={1.6}
          strokeLinecap="round"
        />
      </svg>
      <div ref={markRef} className="wordmark text-ink text-sm">
        OJ&nbsp;PIPPIN
      </div>
    </div>
  );
}
