import Nav from "@/components/Nav";
import ViewCursor from "@/components/ViewCursor";
import HeroIntro from "@/components/sections/HeroIntro";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main className="bg-bone">
      <Nav />
      <ViewCursor />
      <HeroIntro />
      <FeaturedProjects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
