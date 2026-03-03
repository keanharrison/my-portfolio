import Link from "next/link";

export default function ThoughtsPage() {
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
          Thoughts
        </h1>
      </main>
    </div>
  );
}
