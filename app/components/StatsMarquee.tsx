// import { marqueeItems } from "../data/content";

// Restore import from content.ts when re-enabling the marquee on the home page.
const marqueeItems: string[] = [];

export default function StatsMarquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-neutral-800 py-6">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-mono text-sm tracking-widest text-[var(--muted)] uppercase"
          >
            {item}
            <span className="ml-10 text-[var(--accent)]">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
