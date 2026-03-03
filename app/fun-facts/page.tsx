import Image from "next/image";
import Link from "next/link";

const SCHOOL_OF_ATHENS_URL =
  "https://upload.wikimedia.org/wikipedia/commons/c/c3/Raphael_School_of_Athens.jpg";

export default function FunFactsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-white"
        >
          ← Back
        </Link>

        <div className="mt-6">
          <div className="aspect-[21/9] max-h-40 w-full overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800">
            <Image
              src={SCHOOL_OF_ATHENS_URL}
              alt="The School of Athens by Raphael (1509–1511)"
              width={840}
              height={360}
              className="h-full w-full object-cover object-center brightness-[0.82] contrast-[1.02]"
            />
          </div>
        </div>

        <h1 className="mt-8 text-center text-2xl font-bold text-white">
          Fun Facts
        </h1>
      </main>
    </div>
  );
}
