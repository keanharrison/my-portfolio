"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Project } from "@/content/projects";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.742 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  function handleMouseEnter() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(14px) translateY(-8px)";
    card.style.boxShadow = "0 12px 36px rgba(0,0,0,0.20)";
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateZ(14px) translateY(-8px)`;
    card.style.boxShadow = `${-x * 20}px ${-y * 20}px 44px rgba(0,0,0,0.24)`;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0px) translateY(0px)";
    card.style.boxShadow = "";
  }

  return (
    <article
      ref={cardRef}
      className="group relative rounded-sm border border-rule bg-bg p-6 cursor-pointer flex flex-col items-center text-center"
      style={{ transition: "transform 0.22s ease-out, box-shadow 0.22s ease-out" }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        if (project.externalUrl) {
          window.open(project.externalUrl, "_blank", "noopener,noreferrer");
        } else {
          router.push(`/projects/${project.slug}`);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (project.externalUrl) {
            window.open(project.externalUrl, "_blank", "noopener,noreferrer");
          } else {
            router.push(`/projects/${project.slug}`);
          }
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${project.title}`}
    >
      {/* App icon */}
      <div className="mb-5 flex justify-center">
        <div
          className="h-28 w-28 overflow-hidden bg-rule"
          style={{ borderRadius: "22%" }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={112}
              height={112}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-[22px] font-normal leading-snug text-ink">
        {project.title}
      </h3>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-center gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 font-sans text-xs text-ink-mute transition-colors hover:text-ink"
            aria-label="View source on GitHub"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        )}
        <span className="font-sans text-xs text-ink-mute transition-colors group-hover:text-ink-soft">
          {project.externalUrl ? "View ↗" : "Click to learn more →"}
        </span>
      </div>
    </article>
  );
}
