import Link from "next/link";

export default function TeardownsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-white"
        >
          ← Back
        </Link>
        <h1 className="mt-8 text-center text-2xl font-bold text-white">
          Teardowns
        </h1>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-white">
            ChatGPT Product Teardown
          </h2>
          <p className="mt-1 text-sm italic text-zinc-500">
            November 26, 2025
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            A consolidation of market research, user pain points,
            recommendations for improvement, and more, on ChatGPT. I created
            this paper with aims of improving my product sense, professional
            writing abilities, and to learn more about a tool I use every day.
          </p>
          <div className="mt-6">
            <a
              href="https://drive.google.com/file/d/1DBMw5Lw3Iq-E0Xdfyy_IeSBTXtqtio3o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-none border border-zinc-600 bg-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-600"
            >
              Read teardown (PDF)
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
