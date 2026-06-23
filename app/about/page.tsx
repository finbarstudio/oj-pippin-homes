import Image from "next/image";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/sections/SiteFooter";
import ScrollText from "@/components/ScrollText";
import CountUp from "@/components/CountUp";
import { company, manifesto } from "@/lib/content";

export const metadata = {
  title: "Our Story — Family-Run Since 1994 | OJ Pippin Homes",
  description:
    "Thirty years building across Brisbane and South East Queensland. The story of OJ Pippin Homes — still family-run, still building to one standard.",
};

export default function AboutPage() {
  return (
    <main className="bg-bone text-ink">
      <Nav immediate />

      {/* Hero — centred heritage statement */}
      <section className="relative min-h-[88vh] flex items-center justify-center text-center px-6 pt-16">
        <div className="max-w-4xl">
          <p className="eyebrow text-clay mb-8">Our Story</p>
          <h1
            className="text-ink leading-[1.0]"
            style={{ fontSize: "clamp(2.6rem, 7vw, 6.5rem)" }}
          >
            Over <CountUp to={company.years} /> years of
            <br />
            <span className="display-italic">Brisbane homes.</span>
          </h1>
          <p className="mt-10 text-ink-soft text-lg font-normal max-w-xl mx-auto leading-relaxed">
            One family, one standard, since {company.established}. This is how it
            started — and why it hasn&rsquo;t changed.
          </p>
        </div>
      </section>

      {/* Where it started */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-6 md:px-16 py-20 md:py-32">
        <h2
          className="md:col-span-4 self-start text-3xl md:text-5xl leading-tight"
        >
          Where it
          <br />
          started
        </h2>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-base md:text-lg font-normal leading-relaxed">
          <ScrollText>
            OJ Pippin Homes began in 1994 in Brisbane&rsquo;s north, with one
            builder, one ute and a simple promise: quote a fair price, then hold
            it. No surprises at the end, no fine print to read twice.
          </ScrollText>
          <ScrollText>
            Word travelled the way it does in a good suburb — one family told
            another. The work grew because the homes stood up and the handshakes
            held. Thirty years later, we still run the business by the same rule.
          </ScrollText>
        </div>
      </section>

      <section className="px-6 md:px-16 pb-16 md:pb-32">
        <figure>
          <div className="relative aspect-[16/9] bg-ink/5 overflow-hidden">
            <Image
              src="/homes/facade-monaco.jpg"
              alt="An OJ Pippin home in Brisbane"
              fill
              quality={88}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <figcaption className="eyebrow text-olive mt-4">
            The Monaco facade — Brisbane
          </figcaption>
        </figure>
      </section>

      {/* The way we build */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 px-6 md:px-16 py-20 md:py-32 bg-bone-2">
        <div className="md:col-span-7 space-y-6 text-base md:text-lg font-normal leading-relaxed order-2 md:order-1">
          <ScrollText>
            Everything you&rsquo;d expect to pay extra for is already in the
            price — stone benchtops, ducted air, real flooring, a proper kitchen.
            We call it turn-key because the day we hand over the keys, the home is
            genuinely finished.
          </ScrollText>
          <ScrollText>
            We use the same trusted trades from one job to the next, which is why
            the finish looks the same in the thousandth home as it did in the
            first. And our designs flex: move a wall, add a bedroom, plan for two
            generations under one roof.
          </ScrollText>
        </div>
        <figure className="md:col-span-4 md:col-start-9 order-1 md:order-2">
          <div className="relative aspect-[3/4] bg-ink/5 overflow-hidden">
            <Image
              src="/homes/interior-living.jpg"
              alt="Interior of an OJ Pippin home"
              fill
              quality={88}
              className="object-cover"
              sizes="(min-width:768px) 33vw, 100vw"
            />
          </div>
        </figure>
      </section>

      {/* Pull quote */}
      <section className="px-6 md:px-16 py-24 md:py-40">
        <blockquote
          className="display-italic text-ink max-w-4xl leading-[1.08]"
          style={{ fontSize: "clamp(2rem, 5vw, 4.2rem)" }}
        >
          &ldquo;The name on the contract still answers the phone. After thirty
          years, that&rsquo;s the part we&rsquo;re proudest of.&rdquo;
        </blockquote>
      </section>

      {/* A thousand homes on */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-16 py-20 md:py-32 bg-bone-2">
        <h2 className="md:col-span-4 text-3xl md:text-5xl leading-tight">
          A thousand
          <br />
          homes on
        </h2>
        <div className="md:col-span-7 md:col-start-6 self-end">
          <div className="h-px bg-ink/15 mb-10" />
          <div className="grid grid-cols-3 gap-6">
            {manifesto.stats.map((s) => (
              <div key={s.label}>
                <div
                  className="text-ink font-light leading-none"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
                >
                  <CountUp to={s.value} suffix={s.suffix} />
                </div>
                <div className="eyebrow text-olive mt-4">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
