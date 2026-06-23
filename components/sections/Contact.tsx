"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cta, company } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

/**
 * Contact — the warm closing note. A two-column moment on bone paper: the
 * invitation and contact details on the left, a quiet enquiry form on the
 * right. Borderless inputs, clay accents on focus, no hard sell.
 */
export default function Contact() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-line", {
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
      id="contact"
      className="bg-bone px-6 md:px-16 py-24 md:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-16">
        {/* ── Left: invitation + details ────────────────────────────── */}
        <div className="lg:col-span-6 xl:col-span-5">
          <p className="contact-line eyebrow text-clay mb-5 md:mb-6">
            {cta.eyebrow}
          </p>

          <h2
            className="contact-line text-ink leading-[1.02] max-w-xl"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
          >
            {cta.heading[0]}
            <br />
            the home <span className="display-italic">you&rsquo;re picturing.</span>
          </h2>

          <p className="contact-line text-ink-soft text-lg leading-relaxed mt-7 md:mt-9 max-w-md">
            {cta.body}
          </p>

          {/* Contact details */}
          <div className="contact-line mt-12 md:mt-16 max-w-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              <div>
                <p className="eyebrow text-olive mb-2">Phone</p>
                <a
                  href={company.phoneHref}
                  className="text-ink text-lg tabular-nums transition-colors hover:text-clay"
                >
                  {company.phone}
                </a>
              </div>

              <div>
                <p className="eyebrow text-olive mb-2">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="text-ink text-lg transition-colors hover:text-clay"
                >
                  {company.email}
                </a>
              </div>

              <div className="sm:col-span-2">
                <p className="eyebrow text-olive mb-2">Studio</p>
                <p className="text-ink text-lg leading-relaxed">
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-10 pt-10 border-t border-ink/12">
              <p className="eyebrow text-olive mb-5">Open hours</p>
              <dl className="space-y-3">
                {company.hours.map((h) => (
                  <div
                    key={h.days}
                    className="flex items-baseline justify-between gap-6"
                  >
                    <dt className="text-ink-soft">{h.days}</dt>
                    <dd className="text-ink tabular-nums">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* ── Right: enquiry form ───────────────────────────────────── */}
        <div className="lg:col-span-6 xl:col-start-8 xl:col-span-5">
          <form
            className="contact-line"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Enquiry form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex flex-col">
                <label
                  htmlFor="contact-first-name"
                  className="eyebrow text-ink-soft mb-1"
                >
                  First name
                </label>
                <input
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  className="border-b border-ink/20 bg-transparent py-3 text-ink text-lg outline-none transition-colors focus:border-clay placeholder:text-ink/30"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="contact-last-name"
                  className="eyebrow text-ink-soft mb-1"
                >
                  Last name
                </label>
                <input
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  className="border-b border-ink/20 bg-transparent py-3 text-ink text-lg outline-none transition-colors focus:border-clay placeholder:text-ink/30"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="contact-email"
                  className="eyebrow text-ink-soft mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="border-b border-ink/20 bg-transparent py-3 text-ink text-lg outline-none transition-colors focus:border-clay placeholder:text-ink/30"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="contact-phone"
                  className="eyebrow text-ink-soft mb-1"
                >
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="border-b border-ink/20 bg-transparent py-3 text-ink text-lg tabular-nums outline-none transition-colors focus:border-clay placeholder:text-ink/30"
                />
              </div>

              <div className="flex flex-col sm:col-span-2">
                <label
                  htmlFor="contact-project"
                  className="eyebrow text-ink-soft mb-1"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="contact-project"
                  name="project"
                  rows={4}
                  className="border-b border-ink/20 bg-transparent py-3 text-ink text-lg leading-relaxed outline-none transition-colors focus:border-clay resize-none placeholder:text-ink/30"
                />
              </div>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="px-10 py-4 bg-ink text-cream text-sm uppercase tracking-widest transition-colors hover:bg-clay"
              >
                Book a Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
