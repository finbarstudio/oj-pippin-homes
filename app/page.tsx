import Nav from "@/components/Nav";
import ViewCursor from "@/components/ViewCursor";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import DesignShowcase from "@/components/sections/DesignShowcase";
import Services from "@/components/sections/Services";
import Inclusions from "@/components/sections/Inclusions";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main className="bg-bone">
      <Nav />
      <ViewCursor />
      <Hero />
      <Manifesto />
      <DesignShowcase />
      <Services />
      <Inclusions />
      <Process />
      <WhyUs />
      <Testimonials />
      <Contact />
      <SiteFooter />
    </main>
  );
}
