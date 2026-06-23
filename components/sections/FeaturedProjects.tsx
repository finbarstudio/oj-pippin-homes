import ProjectShowcase from "@/components/sections/ProjectShowcase";
import { featuredProjects } from "@/lib/content";

export default function FeaturedProjects() {
  return (
    <div>
      {featuredProjects.map((p, i) => (
        <ProjectShowcase key={p.slug} project={p} index={i} />
      ))}
    </div>
  );
}
