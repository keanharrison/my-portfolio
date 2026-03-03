import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-white"
        >
          ← Back
        </Link>
        <h1 className="mt-8 text-2xl font-bold text-white">Blog</h1>
        <p className="mt-4 text-zinc-400">
          Your blog posts. Link to an external blog or add posts here.
        </p>
      </main>
    </div>
  );
}
