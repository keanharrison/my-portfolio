export function StatCallout({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="my-12 text-center">
      <div className="text-[56px] font-serif font-bold leading-none text-ink">
        {stat}
      </div>
      <div className="mt-2 font-sans text-[11px] uppercase tracking-[0.12em] text-ink-mute">
        {label}
      </div>
    </div>
  );
}
