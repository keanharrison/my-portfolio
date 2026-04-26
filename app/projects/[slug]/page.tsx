import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { projectDetails } from "@/content/project-details";
import { Label } from "@/components/editorial/label";
import { Rule } from "@/components/editorial/rule";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — Kean Harrison` : "Project" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-bg">
      {/* Back navigation */}
      <nav className="mx-auto px-6 pt-8" style={{ maxWidth: "var(--max-content)" }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm text-ink-mute transition-colors hover:text-ink focus:outline-none focus-visible:underline"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
      </nav>

      <article
        className="mx-auto px-6 pb-32 pt-12"
        style={{ maxWidth: "var(--max-content)" }}
      >
        <Label>Project</Label>

        <h1 className="mt-4 font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[1.05] tracking-tight text-ink">
          {project.title}
        </h1>

        <p className="mt-4 font-sans text-sm text-ink-mute">
          {project.timeframe}
        </p>

        {project.coverImage && (
          <div className="mt-8 overflow-hidden rounded-sm">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1100}
              height={620}
              className="w-full object-cover"
              priority
            />
          </div>
        )}

        <div className="my-10">
          <Rule />
        </div>

        <div
          className="font-serif text-[18px] leading-[1.7] text-ink-soft"
          style={{ maxWidth: "var(--max-reading)" }}
        >
          {projectDetails[slug] ?? <p>[Write project content here.]</p>}
        </div>
      </article>
    </main>
  );
}
