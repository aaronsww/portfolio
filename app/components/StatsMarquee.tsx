import { marqueeItems } from "../data/content";

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={ariaHidden}>
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="font-mono text-sm tracking-widest text-[var(--muted)] uppercase"
        >
          {item}
          <span className="ml-10 text-[var(--accent)]">&bull;</span>
        </span>
      ))}
    </div>
  );
}

export default function StatsMarquee() {
  return (
    <div className="overflow-hidden border-y border-neutral-800 py-6">
      <div className="animate-marquee flex w-max will-change-transform">
        <MarqueeTrack />
        <MarqueeTrack ariaHidden />
      </div>
    </div>
  );
}
