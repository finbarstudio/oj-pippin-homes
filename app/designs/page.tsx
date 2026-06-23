import Nav from "@/components/Nav";
import ViewCursor from "@/components/ViewCursor";
import DesignShowcase from "@/components/sections/DesignShowcase";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";
import { designIndex } from "@/lib/content";

export const metadata = {
  title: "Home Designs — The Range | OJ Pippin Homes",
  description:
    "Browse the OJ Pippin range — single and double-storey designs from four to five bedrooms, every one adaptable to your block and the way you live.",
};

export default function DesignsPage() {
  return (
    <main className="bg-bone text-ink">
      <Nav immediate />
      <ViewCursor />

      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col justify-end px-6 md:px-16 pt-28 pb-16 md:pb-24">
        <p className="eyebrow text-clay mb-6">Home Designs</p>
        <h1 className="text-ink leading-[0.98]" style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}>
          The range.
        </h1>
        <p className="mt-8 text-ink-soft text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
          Single and double-storey homes from four to five bedrooms — each one a
          starting point. Move a wall, change a facade, plan for two generations.
          Every design bends to your block and the way you live.
        </p>
      </section>

      {/* Lookbook */}
      <DesignShowcase />

      {/* Full index */}
      <section className="px-6 md:px-16 py-24 md:py-32 bg-bone-2">
        <p className="eyebrow text-clay mb-6">Every Plan</p>
        <h2 className="text-ink text-3xl md:text-5xl mb-14 md:mb-20">
          Eight designs, endlessly adaptable.
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {designIndex.map((d, i) => (
            <li
              key={d.name}
              className="group flex items-baseline justify-between gap-6 py-6 border-t border-ink/12"
            >
              <span className="flex items-baseline gap-5">
                <span className="eyebrow text-clay/50 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-ink text-2xl md:text-4xl group-hover:text-clay transition-colors">
                  {d.name}
                </span>
              </span>
              <span className="eyebrow text-olive whitespace-nowrap">
                {d.beds} bed · {d.baths} bath
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Contact />
      <SiteFooter />
    </main>
  );
}
