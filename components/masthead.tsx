"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Label } from "@/components/editorial/label";
import { Rule } from "@/components/editorial/rule";

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

export function Masthead() {
  return (
    <section aria-label="Introduction">
      <div
        className="mx-auto px-6 pt-24 pb-24"
        style={{ maxWidth: "var(--max-content)" }}
      >
        {/* Two-column layout */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">

          {/* Left column — text content */}
          <motion.div
            className="flex flex-col md:w-[60%]"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <Label>Portfolio</Label>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-5 font-serif text-[clamp(48px,7vw,88px)] font-normal leading-[0.95] tracking-tight text-ink"
            >
              Kean Harrison
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 font-sans text-sm tracking-wide text-ink-mute"
            >
              2027 · University of Virginia · Booz Allen Hamilton
            </motion.p>

            {/* Mobile photo — between dateline and paragraph */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex justify-center md:hidden"
            >
              <div className="w-full max-w-[280px]" style={{ aspectRatio: "2/3" }}>
                <Image
                  src="/images/kean-portrait.jpeg"
                  alt="Kean Harrison"
                  width={560}
                  height={840}
                  quality={90}
                  priority
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <p className="font-serif text-[16px] leading-[1.65] text-ink-soft">
                My greater mission goal is to become a product manager who creates technical solutions to solve business challenges. I see myself in product because of my innate creativity, sociability, business and technical fluency, and leadership experience. Career aside, I&rsquo;m constantly seeking to cultivate a life of adventure, connection, and continuous improvement.
              </p>
            </motion.div>

            {/* Links */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-col items-center gap-y-2">
              <div className="flex items-center gap-x-5">
                <a
                  href="https://github.com/keanharrison"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[13px] text-ink-mute transition-colors hover:text-ink"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/keanh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[13px] text-ink-mute transition-colors hover:text-ink"
                >
                  LinkedIn ↗
                </a>
              </div>
              <div className="flex items-center gap-x-5">
                <a
                  href="mailto:tru3us@virginia.edu"
                  className="font-sans text-[13px] text-ink-mute transition-colors hover:text-ink"
                >
                  tru3us@virginia.edu
                </a>
                <a
                  href="mailto:kean.thurman.harrison@gmail.com"
                  className="font-sans text-[13px] text-ink-mute transition-colors hover:text-ink"
                >
                  kean.thurman.harrison@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — portrait, desktop only */}
          <motion.div
            className="hidden md:block md:w-[40%]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/kean-portrait.jpeg"
                alt="Kean Harrison"
                fill
                quality={90}
                priority
                className="object-cover object-center"
              />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Full-width hairline rule — outside padded div so spacing is consistent */}
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-content)" }}>
        <Rule />
      </div>
    </section>
  );
}
