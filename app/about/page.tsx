import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
          About Me
        </h1>

        <div className="mx-auto mt-10 max-w-xl space-y-6 text-left leading-relaxed text-zinc-300">
          <p>
            Kean is a third-year at the University of Virginia majoring in
            Cognitive Science (Computer Science concentration) with minors in
            Data Science and Engineering Business. This summer, Kean will be
            tackling complex technical problems as a Data Scientist Intern at
            Booz Allen Hamilton in San Diego, CA.
          </p>
          <p>
            Career wise, Kean is pursuing a career in product management at
            full-throttle. He&apos;s currently building technical solutions to
            improve student engagement and belonging within college campuses,
            working through the PLC framework. His innate creativity (typically
            channeled through art and writing), coupled with his interest in
            solving people&apos;s problems and leading technical teams, enables
            Kean to thrive as a product manager at the intersection of business
            and technology.
          </p>
          <p>
            In his free time, Kean enjoys hiking, traveling, entrepreneurial
            endeavors, reading/writing, and connecting with like-minded
            individuals. He also loves to cook and sample novel cuisines, his
            favorite being the Mediterranean diet!
          </p>
          <p>More on Kean in pictures:</p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/campus-leader.png"
                alt="Kean at hackathon opening ceremony"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Campus leader
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/pet-enthusiast.png"
                alt="Kean with a pet"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Pet enthusiast
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/loves-to-teach.png"
                alt="Kean teaching"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Loves to teach
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/competitive-lifter.png"
                alt="Kean competitive lifting"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Competitive lifter
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/loves-meeting-people.png"
                alt="Kean meeting new people"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Loves meeting new people
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/constantly-doodling.png"
                alt="Kean doodling"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Constantly doodling
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/capturer-of-moments.png"
                alt="Kean capturing a moment"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Capturer of moments
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/king-of-the-mountain.png"
                alt="Kean hiking in the mountains"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                King of the mountain
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/family-oriented.png"
                alt="Kean with family"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Family oriented
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/50">
              <Image
                src="/about/kaizen.png"
                alt="1% - Kaizen"
                width={1024}
                height={1024}
                quality={100}
                unoptimized
                className="photo-sharper aspect-square w-full object-cover"
              />
              <figcaption className="border-t border-zinc-800 px-3 py-2 text-center text-sm text-zinc-400">
                Kaizen
              </figcaption>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}
