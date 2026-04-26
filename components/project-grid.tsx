import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { Label } from "@/components/editorial/label";
import { Rule } from "@/components/editorial/rule";

export function ProjectGrid() {
  return (
    <section aria-label="Selected projects">
      <div
        className="mx-auto px-6 py-24"
        style={{ maxWidth: "var(--max-content)" }}
      >
        <Label>Selected Work</Label>

        <h2 className="mt-4 font-serif text-[clamp(32px,5vw,48px)] font-normal text-ink">
          Projects
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "var(--max-content)" }} className="mx-auto px-6">
        <Rule />
      </div>
    </section>
  );
}
