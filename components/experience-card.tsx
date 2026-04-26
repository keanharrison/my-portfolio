"use client";

import Image from "next/image";
import type { ExperienceEntry } from "@/content/experience";

function Logo({ entry }: { entry: ExperienceEntry }) {
  if (entry.logo) {
    return (
      <Image
        src={entry.logo}
        alt={`${entry.company} logo`}
        width={96}
        height={52}
        className="h-[52px] w-auto object-contain"
      />
    );
  }
  const initials = entry.company
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <span className="font-sans text-sm font-medium text-ink-mute">
      {initials}
    </span>
  );
}

interface ExperienceCardProps {
  entry: ExperienceEntry;
  onClick: () => void;
}

export function ExperienceCard({ entry, onClick }: ExperienceCardProps) {
  return (
    <button
      type="button"
      className="group w-full cursor-pointer rounded-sm border border-rule bg-surface px-4 py-6 text-center flex flex-col items-center gap-3 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg hover:brightness-[1.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20"
      onClick={onClick}
    >
      <div className="flex h-[52px] items-center justify-center">
        <Logo entry={entry} />
      </div>

      <div className="flex flex-col items-center">
        <p className="font-sans text-[13px] font-medium text-ink">
          {entry.company}
        </p>
        <p className="mt-0.5 font-serif text-[15px] text-ink-soft">
          {entry.role}
        </p>
      </div>
    </button>
  );
}
