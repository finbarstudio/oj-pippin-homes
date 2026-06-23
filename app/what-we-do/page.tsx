import Nav from "@/components/Nav";
import Services from "@/components/sections/Services";
import Inclusions from "@/components/sections/Inclusions";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import SiteFooter from "@/components/sections/SiteFooter";

export const metadata = {
  title: "What We Do | OJ Pippin Homes",
  description:
    "Custom homes, house and land packages and knockdown rebuilds across South East Queensland. All-inclusive fixed pricing, flexible designs, and a thirty-year family builder behind every key.",
};

export default function WhatWeDoPage() {
  return (
    <main className="bg-bone text-ink">
      <Nav immediate showLogo />

      <section className="min-h-[68vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <p className="eyebrow text-clay mb-6">What We Do</p>
        <h1 className="text-ink text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] max-w-4xl">
          Everything it takes to build a home, and{" "}
          <span className="display-italic">nothing</span> you didn&rsquo;t ask for.
        </h1>
      </section>

      <Services />
      <Inclusions />
      <Process />
      <WhyUs />
      <Testimonials />
      <SiteFooter />
    </main>
  );
}
