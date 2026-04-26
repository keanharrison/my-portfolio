"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/content/experience";
import { experienceDetails } from "@/content/experience-details";
import { Label } from "@/components/editorial/label";
import { Rule } from "@/components/editorial/rule";

interface ExperienceModalProps {
  entry: ExperienceEntry;
  onClose: () => void;
}

export function ExperienceModal({ entry, onClose }: ExperienceModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const modal = modalRef.current;
      if (!modal) return;
      const focusable = Array.from(
        modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(26,26,26,0.45)" }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={`${entry.company} — ${entry.role}`}
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.96, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-h-[85vh] overflow-y-auto rounded bg-surface p-8 shadow-xl"
        style={{ maxWidth: "640px" }}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-sm text-ink-mute transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 pr-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-rule bg-surface">
            {entry.logo ? (
              <Image
                src={entry.logo}
                alt={`${entry.company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="font-sans text-sm font-medium text-ink-mute">
                {entry.company.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
            )}
          </div>
          <div>
            <p className="font-sans text-sm font-medium text-ink">
              {entry.company}
            </p>
            <p className="mt-0.5 font-serif text-[17px] text-ink-soft">
              {entry.role}
            </p>
            <div className="mt-1.5">
              <Label>{entry.timeframe}</Label>
            </div>
          </div>
        </div>

        <div className="my-6">
          <Rule />
        </div>

        {/* Body */}
        <div className="font-serif text-[17px] leading-[1.7] text-ink-soft">
          {experienceDetails[entry.id] ?? <p>{entry.detail}</p>}
        </div>
      </motion.div>
    </motion.div>
  );
}
