export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-ink-mute">
      {children}
    </span>
  );
}
