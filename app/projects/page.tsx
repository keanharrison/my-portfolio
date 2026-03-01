import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link href="/" className="text-sm text-zinc-500 hover:text-black">
          ← Back
        </Link>
        <h1 className="mt-8 text-2xl font-bold text-black">Projects</h1>
        <p className="mt-2 italic text-zinc-600">
          Product, research, demos.
        </p>

        {/* Hydra */}
        <section className="mt-12 border-b border-zinc-100 pb-16">
          <h2 className="text-xl font-semibold text-black">Hydra</h2>
          <p className="mt-1 text-sm text-zinc-600">
            The operating system for early-stage startup teams
          </p>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Problem
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Early-stage startup teams (2–10 people) lose context across tools,
            don&apos;t preserve reasoning behind decisions, and spend significant
            time on manual analysis and context switching, resulting in low
            efficiency and high cognitive load.
          </p>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Approach
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            Hydra was built on 50+ PM and founder interviews, extensive market
            research, and personal entrepreneurial roadblocks. Our mission was to
            solve three core problems for early-stage startup and product teams:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm leading-relaxed text-zinc-700">
            <li>Workflow fragmentation</li>
            <li>Lost context</li>
            <li>Slow decision-making</li>
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700">
            My co-founder and I designed agents to operate collaboratively across
            7 different verticals: GTM, Product, Team & Equity, Network,
            Investors & Funding, Compliance, and Tools. Hydra&apos;s agents work
            collaboratively to automate tasks and prioritize task execution.
            Here are some example workflows to convey Hydra&apos;s multi-faceted
            capabilities:
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm leading-relaxed text-zinc-700">
            <li>Meeting notes → action items</li>
            <li>Contracts → signature</li>
            <li>Network → outreach</li>
            <li>Lead lists → sends invites → schedules on calendar</li>
          </ol>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-zinc-400">
            Product / Tech
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
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
              className="rounded-none border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              Watch demo
            </a>
            <a
              href="https://hydra-ops.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-none border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              Try the app
            </a>
          </div>
        </section>

        {/* ChatGPT Teardown */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-black">
            ChatGPT Product Teardown
          </h2>
          <p className="mt-1 text-sm italic text-zinc-500">
            November 26, 2025
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700">
            A consolidation of market/competitor research, advantages and
            disadvantages, and recommendations for improvement for ChatGPT. I
            created this paper with aims of improving my product-sense and
            PM-centric skills, alongside learning about the current AI/LLM
            landscape.
          </p>
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1DBMw5Lw3Iq-E0Xdfyy_IeSBTXtqtio3o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-none border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              Read teardown (PDF)
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
