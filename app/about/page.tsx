import Image from "next/image";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/sections/SiteFooter";
import ScrollText from "@/components/ScrollText";
import CountUp from "@/components/CountUp";
import MaskReveal from "@/components/MaskReveal";
import { manifesto } from "@/lib/content";

export const metadata = {
  title: "Our Story, Family-Run Since 1994 | OJ Pippin Homes",
  description:
    "Thirty years building across Brisbane and South East Queensland. The story of OJ Pippin Homes, still family-run, still building to one standard.",
};

export default function AboutPage() {
  return (
    <main className="bg-bone text-ink">
      <Nav immediate showLogo />

      {/* Hero — one large statement, lots of air */}
      <section className="min-h-screen flex items-end px-6 md:px-16 lg:px-24 pb-20 md:pb-28 pt-32">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-8 items-end">
          <p className="md:col-span-1 eyebrow text-clay self-start md:pt-3">Our Story</p>
          <h1
            className="md:col-span-4 text-ink font-light leading-[0.98]"
            style={{ fontSize: "clamp(2.8rem, 7.5vw, 7rem)" }}
          >
            Thirty years on, the same family still{" "}
            <span className="display-italic">answers the phone.</span>
          </h1>
        </div>
      </section>

      {/* Where it started — sticky label, one continuous colour-fill block */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-8">
          <h2 className="md:col-span-1 md:sticky md:top-28 md:self-start text-olive font-light text-2xl md:text-3xl">
            1994
          </h2>
          <ScrollText
            as="div"
            className="md:col-span-3 md:col-start-2 space-y-8 text-2xl md:text-4xl font-light leading-[1.32] tracking-[-0.01em]"
          >
            <p>
              It began with one builder, one ute and a single promise: quote a
              fair price, then hold it. No surprises at the end, no fine print to
              read twice.
            </p>
            <p>
              Word travelled the way it does in a good suburb. One family told
              another, and the work grew because the homes stood up and the
              handshakes held.
            </p>
          </ScrollText>
        </div>
      </section>

      {/* Full-bleed image — mask reveal */}
      <section className="px-6 md:px-16 lg:px-24 py-10 md:py-16">
        <MaskReveal className="relative aspect-[16/9] w-full bg-ink/5">
          <Image
            src="/homes/facade-monaco.jpg"
            alt="An OJ Pippin home in Brisbane"
            fill
            quality={88}
            className="object-cover"
            sizes="100vw"
          />
        </MaskReveal>
      </section>

      {/* The way we build — body left, tall image right */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-8 items-center">
          <div className="md:col-span-3">
            <h2 className="text-olive font-light text-2xl md:text-3xl mb-8">
              The way we build
            </h2>
            <ScrollText
              as="div"
              className="space-y-8 text-2xl md:text-4xl font-light leading-[1.32] tracking-[-0.01em] max-w-2xl"
            >
              <p>
                Everything you would expect to pay extra for is already in the
                price. Stone benchtops, ducted air, real flooring, a proper
                kitchen.
              </p>
              <p>
                The same trusted trades come back job after job, which is why the
                thousandth home is finished to the standard of the first.
              </p>
            </ScrollText>
          </div>
          <div className="md:col-span-2 md:col-start-4">
            <MaskReveal className="relative aspect-[3/4] w-full bg-ink/5">
              <Image
                src="/homes/interior-living.jpg"
                alt="Inside an OJ Pippin home"
                fill
                quality={88}
                className="object-cover"
                sizes="(min-width:768px) 38vw, 100vw"
              />
            </MaskReveal>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <blockquote
          className="display-italic text-ink leading-[1.05] max-w-5xl"
          style={{ fontSize: "clamp(2.2rem, 6vw, 5.2rem)" }}
        >
          &ldquo;We have never wanted to be the biggest builder in Brisbane. Just
          the one a family would recommend to another.&rdquo;
        </blockquote>
      </section>

      {/* Heritage figures — sparse grid */}
      <section className="min-h-[70vh] flex flex-col justify-center bg-bone-2 px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-y-14 md:gap-8 items-end">
          <h2 className="md:col-span-2 text-ink font-light leading-[1.0] mb-4 md:mb-0" style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}>
            A thousand homes
            <br />
            <span className="display-italic">on.</span>
          </h2>
          {manifesto.stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-3 ${
                i === 0 ? "md:col-start-3 md:self-start" : i === 1 ? "md:col-start-4 md:self-end" : "md:col-start-5 md:self-start"
              }`}
            >
              <div
                className="text-ink font-light leading-none tabular-nums"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
              >
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-ink-soft text-sm md:text-base">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
