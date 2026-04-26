import Image from "next/image";
import { interests } from "@/content/interests";
import { Label } from "@/components/editorial/label";

export function InterestsBlock() {
  return (
    <section aria-label="Interests">
      <div
        className="mx-auto px-6 py-24"
        style={{ maxWidth: "var(--max-content)" }}
      >
        <Label>Outside Work</Label>

        <h2 className="mt-4 font-serif text-[clamp(32px,5vw,48px)] font-normal text-ink">
          Interests
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {interests.map((interest) => (
            <div key={interest.id}>
              <div className="aspect-square w-full overflow-hidden rounded-sm bg-rule">
                {interest.image && (
                  <Image
                    src={interest.image}
                    alt={interest.alt ?? interest.caption}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <p className="mt-4 font-serif text-[16px] leading-[1.6] text-ink-soft">
                {interest.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
