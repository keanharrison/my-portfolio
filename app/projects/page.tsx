import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">
          ← Back
        </Link>
        <h1 className="mt-8 text-center text-2xl font-bold text-white">
          Projects
        </h1>

        {/* Hydra */}
        <section className="mt-12 border-b border-zinc-800 pb-12">
          <h2 className="text-xl font-semibold text-white">Hydra</h2>
          <p className="mt-1 text-sm text-zinc-400">
            The operating system for early-stage startup teams
          </p>
          <p className="mt-0.5 text-xs text-zinc-500">
            Nov 2025 – Feb 2026
          </p>
          <div className="mt-4 flex justify-start">
            <Image
              src="/projects/hydra-logo.png"
              alt="Hydra logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Problem
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Early-stage startup teams (2–10 people) lose context across tools,
            don&apos;t preserve reasoning behind decisions, and spend significant
            time on manual analysis and context switching, resulting in low
            efficiency and high cognitive load.
          </p>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Approach
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Hydra was built on 50+ PM and founder interviews, extensive market
            research, and personal entrepreneurial roadblocks. Our mission was to
            solve three core problems for early-stage startup and product teams:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm leading-relaxed text-zinc-300">
            <li>Workflow fragmentation</li>
            <li>Lost context</li>
            <li>Slow decision-making</li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            My co-founder and I designed agents to operate collaboratively across
            7 different verticals: GTM, Product, Team & Equity, Network,
            Investors & Funding, Compliance, and Tools. Hydra&apos;s agents work
            collaboratively to automate tasks and prioritize task execution.
            Here are some example workflows to convey Hydra&apos;s multi-faceted
            capabilities:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm leading-relaxed text-zinc-300">
            <li>Meeting notes → action items</li>
            <li>Contracts → signature</li>
            <li>Network → outreach</li>
            <li>Lead lists → sends invites → schedules on calendar</li>
          </ol>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Product / Tech
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Below is our demo video and MVP — if you&apos;re curious and want to
            test it out! Hydra is a React/Next.js app with a Supabase (Postgres
            + auth) backend. It uses LLM-based agents (not fully functional
            yet).
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1ypABEoDPYC-15a78E6PSmG3Z-cCMBpo2/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-none border border-zinc-600 bg-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-600"
            >
              Watch demo
            </a>
            <a
              href="https://hydra-ops.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-none border border-zinc-600 bg-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-600"
            >
              Try the app
            </a>
          </div>
        </section>

        {/* Add more projects below; each section uses border-b for clean separation */}
      </main>
    </div>
  );
}
