import Reveal from "./Reveal";
import JournalEntryCard from "./JournalEntryCard";
import { groupEntriesByYear, type JournalEntry } from "../../sanity/lib/journal";

export default function JournalTimeline({ entries }: { entries: JournalEntry[] }) {
  const byYear = groupEntriesByYear(entries);

  if (byYear.length === 0) {
    return <p className="text-[var(--muted)]">Nothing logged yet — first entries coming soon.</p>;
  }

  return (
    <div className="flex flex-col gap-16">
      {byYear.map(([year, yearEntries]) => (
        <div key={year} className="grid grid-cols-1 gap-6 md:grid-cols-[140px_1fr] md:gap-16">
          <Reveal>
            <span className="font-[family-name:var(--font-display)] text-5xl text-[var(--muted)] md:sticky md:top-28 md:text-6xl">
              {year}
            </span>
          </Reveal>
          <div className="flex flex-col gap-6">
            {yearEntries.map((entry) => (
              <JournalEntryCard key={entry._id} entry={entry} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
