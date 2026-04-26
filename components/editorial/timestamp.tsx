export function Timestamp({
  children,
  dateTime,
}: {
  children: React.ReactNode;
  dateTime?: string;
}) {
  return (
    <time
      dateTime={dateTime}
      className="font-mono text-xs text-ink-mute"
    >
      {children}
    </time>
  );
}
