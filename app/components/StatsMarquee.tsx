import { marqueeItems } from "../data/content";

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-5 sm:gap-10 sm:pr-10" aria-hidden={ariaHidden}>
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="font-mono text-[11px] tracking-wide text-[var(--muted)] uppercase sm:text-sm sm:tracking-widest"
        >
          {item}
          <span className="ml-5 text-[var(--accent)] sm:ml-10">&bull;</span>
        </span>
      ))}
    </div>
  );
}

export default function StatsMarquee() {
  return (
    <div className="overflow-hidden border-y border-neutral-800 py-4 sm:py-6">
      <div className="animate-marquee flex w-max will-change-transform">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </div>
  );
}
