import Link from "next/link";
import Reveal from "./Reveal";
import JournalEntryCard from "./JournalEntryCard";
import { client } from "../../sanity/lib/client";
import { latestJournalEntriesQuery } from "../../sanity/lib/queries";
import type { JournalEntry } from "../../sanity/lib/journal";

export default async function JournalTeaser() {
  const entries = await client.fetch<JournalEntry[]>(latestJournalEntriesQuery);

  return (
    <section id="journal" className="mx-auto max-w-5xl px-6 py-16 md:px-12">
      <div className="mb-12 flex items-end justify-between gap-4">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-[var(--accent)] uppercase">Journal</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/journal"
            className="font-mono text-xs tracking-widest text-[var(--muted)] uppercase transition-colors hover:text-white"
          >
            View all &rarr;
          </Link>
        </Reveal>
      </div>

      {entries.length === 0 ? (
        <p className="text-[var(--muted)]">Nothing logged yet — first entries coming soon.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {entries.map((entry) => (
            <JournalEntryCard key={entry._id} entry={entry} />
          ))}
        </div>
      )}
    </section>
  );
}
