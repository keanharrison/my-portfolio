"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { experience } from "@/content/experience";
import { ExperienceCard } from "@/components/experience-card";
import { ExperienceModal } from "@/components/experience-modal";
import { Label } from "@/components/editorial/label";
import { Rule } from "@/components/editorial/rule";

export function ExperienceGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = experience.find((e) => e.id === selectedId) ?? null;

  return (
    <section aria-label="Work experience">
      <div
        className="mx-auto px-6 py-24"
        style={{ maxWidth: "var(--max-content)" }}
      >
        <Label>Experience</Label>

        <h2 className="mt-4 font-serif text-[clamp(32px,5vw,48px)] font-normal text-ink">
          Work
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-4">
          {experience.map((entry) => (
            <ExperienceCard
              key={entry.id}
              entry={entry}
              onClick={() => setSelectedId(entry.id)}
            />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "var(--max-content)" }} className="mx-auto px-6">
        <Rule />
      </div>

      <AnimatePresence>
        {selected && (
          <ExperienceModal
            key={selected.id}
            entry={selected}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
