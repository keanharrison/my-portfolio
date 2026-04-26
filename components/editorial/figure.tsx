import Image from "next/image";

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function Figure({ src, alt, caption, width = 800, height = 500 }: FigureProps) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full rounded"
      />
      {caption && (
        <figcaption className="mt-3 text-sm italic text-ink-mute font-serif">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
