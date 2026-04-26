"use client";

import Image from "next/image";
import type { ExperienceEntry } from "@/content/experience";
import { Label } from "@/components/editorial/label";

function Logo({ entry }: { entry: ExperienceEntry }) {
  if (entry.logo) {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-rule bg-white">
        <Image
          src={entry.logo}
          alt={`${entry.company} logo`}
          width={48}
          height={48}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }
  const initials = entry.company.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-rule bg-bg font-sans text-xs font-medium text-ink-mute">
      {initials}
    </div>
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
      className="group w-full cursor-pointer rounded-sm border border-rule bg-surface p-5 text-left transition-shadow hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <Logo entry={entry} />

        <div className="min-w-0 flex-1">
          <p className="font-sans text-[13px] font-medium text-ink truncate">
            {entry.company}
          </p>
          <p className="mt-0.5 font-serif text-[15px] text-ink-soft">
            {entry.role}
          </p>
          <div className="mt-2">
            <Label>{entry.timeframe}</Label>
          </div>
        </div>

        <span
          className="mt-0.5 shrink-0 font-sans text-[11px] text-ink-mute opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        >
          Open →
        </span>
      </div>
    </button>
  );
}
