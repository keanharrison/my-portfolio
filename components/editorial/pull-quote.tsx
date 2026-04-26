export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-[3px] border-accent pl-6 text-[22px] italic leading-relaxed text-ink-soft font-serif">
      {children}
    </blockquote>
  );
}
