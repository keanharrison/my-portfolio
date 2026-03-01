"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";

const fullName = "Kean Harrison";
const BUBBLE_RADIUS = 140;
const MAX_SCALE = 1.45;

export default function Home() {
  const [scales, setScales] = useState<number[]>(
    () => Array(fullName.length).fill(1)
  );
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const containerRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const newScales = letterRefs.current.map((el) => {
        if (!el) return 1;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.hypot(x - cx, y - cy);
        if (d >= BUBBLE_RADIUS) return 1;
        const t = 1 - d / BUBBLE_RADIUS;
        return 1 + (MAX_SCALE - 1) * t;
      });
      setScales(newScales);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setScales(Array(fullName.length).fill(1));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-16 text-center">
        <motion.h1
          ref={containerRef}
          className="name-heading name-fine-grain mb-3 flex justify-center gap-0.5 whitespace-nowrap text-5xl font-bold tracking-tight text-zinc-800 sm:text-6xl"
          initial="initial"
          animate="animate"
          whileHover="hover"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={{
            initial: {},
            animate: {
              transition: { staggerChildren: 0.04, delayChildren: 0.1 },
            },
            hover: {
              transition: { staggerChildren: 0.02, delayChildren: 0 },
            },
          }}
        >
          {fullName.split("").map((letter, i) => (
            <motion.span
              key={i}
              ref={(el) => {
                letterRefs.current[i] = el;
              }}
              className="name-letter inline-block cursor-default origin-center"
              style={{ scale: scales[i] }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              variants={{
                initial: { y: 14, opacity: 0 },
                animate: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                },
                hover: {
                  x: [0, 6, -4, 2, 0],
                  y: [0, -3, 4, -2, 0],
                  opacity: [1, 0.88, 1],
                  transition: {
                    duration: 0.5,
                    delay: i * 0.025,
                    times: [0, 0.2, 0.4, 0.7, 1],
                  },
                },
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <p className="mb-10 text-lg text-zinc-600">
          Data Scientist Intern @ Booz Allen
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
          <Link
            href="/projects"
            className="rounded-none border border-zinc-200 bg-white px-5 py-2.5 text-black transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none border border-zinc-200 bg-white px-5 py-2.5 text-black transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            Resume
          </a>
          <Link
            href="/learn-more"
            className="rounded-none border border-zinc-200 bg-white px-5 py-2.5 text-black transition-colors hover:border-zinc-300 hover:bg-zinc-50"
          >
            Learn more
          </Link>
        </nav>

        <div className="mt-10 flex items-center justify-center gap-6 border-t border-zinc-100 pt-8 text-sm text-zinc-500">
          <a
            href="https://www.linkedin.com/in/kean-harrison/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/keanharrison"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@kean.thurman.harrison"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
          >
            Blog
          </a>
        </div>
      </main>
    </div>
  );
}
