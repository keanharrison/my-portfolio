"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";

const fullName = "Kean Harrison";

const EMAILS = [
  "kean.thurman.harrison@gmail.com",
  "tru3us@virginia.edu",
] as const;

function EmailLink({ email }: { email: (typeof EMAILS)[number] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    },
    [email]
  );

  return (
    <span className="group relative inline-block">
      <a href={`mailto:${email}`} className="hover:text-white">
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute inset-0 flex items-center justify-center bg-[var(--background)] opacity-0 transition-opacity group-hover:opacity-100"
        title="Copy email"
      >
        <span className="rounded border border-zinc-600 bg-zinc-700 px-2 py-1 text-xs text-zinc-200 shadow-sm hover:bg-zinc-600 hover:text-white">
          {copied ? "Copied!" : "Copy"}
        </span>
      </button>
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      <main className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-12 text-center">
        <div className="scale-[1.12] origin-center">
          <div className="mb-8 overflow-hidden rounded-full border-2 border-zinc-600 bg-zinc-800">
            <Image
              src="/kean.png"
              alt="Kean Harrison"
              width={512}
              height={512}
              quality={100}
              unoptimized
              className="photo-sharp h-40 w-40 object-cover sm:h-44 sm:w-44"
              priority
            />
          </div>

          <motion.h1
            className="name-heading name-fine-grain mb-3 flex justify-center gap-0.5 whitespace-nowrap text-5xl font-bold tracking-tight text-white sm:text-6xl"
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: { staggerChildren: 0.04, delayChildren: 0.1 },
            },
          }}
        >
          {fullName.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="name-letter inline-block"
              variants={{
                initial: { y: 14, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <p className="mb-6 text-lg text-zinc-300">
          Data Science Intern at Booz Allen, Summer 2026
        </p>

        <nav className="mt-6 flex flex-col items-center gap-3 text-sm font-medium text-zinc-300">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-zinc-100 shadow-sm transition-colors hover:border-zinc-500 hover:bg-zinc-800"
            >
              Projects
            </Link>
            <a
              href="https://drive.google.com/file/d/1HXZabGawHPS_WXdtolJOW9KUA-JY67v8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-zinc-100 shadow-sm transition-colors hover:border-zinc-500 hover:bg-zinc-800"
            >
              Resume ↗
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/thoughts"
              className="border-b-2 border-transparent pb-1 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Thoughts
            </Link>
            <Link
              href="/teardowns"
              className="border-b-2 border-transparent pb-1 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Teardowns
            </Link>
            <Link
              href="/about"
              className="border-b-2 border-transparent pb-1 transition-colors hover:border-zinc-500 hover:text-white"
            >
              About Me
            </Link>
          </div>
        </nav>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/kean-harrison/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/keanharrison"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            {EMAILS.map((email) => (
              <EmailLink key={email} email={email} />
            ))}
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}
